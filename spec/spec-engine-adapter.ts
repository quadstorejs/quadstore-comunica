
import { Quadstore, TermName } from 'quadstore';
import { MemoryLevel } from 'memory-level';
import { DataFactory } from 'rdf-data-factory';
import { Engine, __engine } from 'quadstore-comunica';
import { IQueryEngine, IUpdateEngine, QueryResultBindings, QueryResultBoolean, QueryResultQuads } from 'rdf-test-suite';
import { Quad, Bindings, Variable } from '@rdfjs/types';
import { streamToArray } from './utils';

const indexes: TermName[][] = [
  [ 'subject', 'predicate', 'object', 'graph' ],
  [ 'subject', 'predicate', 'graph', 'object' ],
  [ 'subject', 'object', 'predicate', 'graph' ],
  [ 'subject', 'object', 'graph', 'predicate' ],
  [ 'subject', 'graph', 'predicate', 'object' ],
  [ 'subject', 'graph', 'object', 'predicate' ],
  [ 'predicate', 'subject', 'object', 'graph' ],
  [ 'predicate', 'subject', 'graph', 'object' ],
  [ 'predicate', 'object', 'subject', 'graph' ],
  [ 'predicate', 'object', 'graph', 'subject' ],
  [ 'predicate', 'graph', 'subject', 'object' ],
  [ 'predicate', 'graph', 'object', 'subject' ],
  [ 'object', 'subject', 'predicate', 'graph' ],
  [ 'object', 'subject', 'graph', 'predicate' ],
  [ 'object', 'predicate', 'subject', 'graph' ],
  [ 'object', 'predicate', 'graph', 'subject' ],
  [ 'object', 'graph', 'subject', 'predicate' ],
  [ 'object', 'graph', 'predicate', 'subject' ],
  [ 'graph', 'subject', 'predicate', 'object' ],
  [ 'graph', 'subject', 'object', 'predicate' ],
  [ 'graph', 'predicate', 'subject', 'object' ],
  [ 'graph', 'predicate', 'object', 'subject' ],
  [ 'graph', 'object', 'subject', 'predicate' ],
  [ 'graph', 'object', 'predicate', 'subject' ]
];

async function source(data: Quad[]) {
  const store = new Quadstore({
    dataFactory: new DataFactory(),
    backend: new MemoryLevel(),
    indexes,
  });
  await store.open();
  await store.multiPut(data);
  return store;
}

const adapter: IQueryEngine & IUpdateEngine = {

  async parse(query, options) {
    // @ts-ignore
    return __engine.actorInitQuery.mediatorQueryParse.mediate({ query: query, baseIRI: options.baseIRI });
  },

  async query(data, queryString, options) {
    const store = await source(data);
    const engine = new Engine(store);
    const result = await engine.query(queryString, {
      baseIRI: options.baseIRI
    });
    switch (result.resultType) {
      case 'boolean':
        return new QueryResultBoolean(await result.execute());
      case 'quads':
        return new QueryResultQuads(await streamToArray(await result.execute()));
      case 'bindings': {
        const variables = (await result.metadata()).variables.map((variable: Variable) => `?${variable.value}`);
        const bindingsRaw: Bindings[] = (await streamToArray(await result.execute()));
        const bindingsArr = bindingsRaw.map(b => Object.fromEntries([...b].map(([k, v]) => [`?${k.value}`, v])));
        return new QueryResultBindings(variables, bindingsArr, false);
      }
      default:
        throw new Error('unexpected');
    }
  },

  async update(data, queryString, options) {
    const store = await source(data);
    const engine = new Engine(store);
    const result = await engine.query(queryString, {
      baseIRI: options.baseIRI
    });
    await result.execute();
    return (await store.get({})).items;
  },
};

module.exports = adapter;
