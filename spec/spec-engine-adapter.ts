
import {
  Quad,
  Term,
} from 'rdf-js';
import {
  IQueryEngine,
  IQueryResult,
  IUpdateEngine,
  IQueryResultBindings,
  IQueryResultBoolean,
  IQueryResultQuads,
} from 'rdf-test-suite';
import {
  Quadstore,
  BindingArrayResult,
  BooleanResult,
  QuadArrayResult,
  ResultType,
  getBindingComparator,
  getQuadComparator,
  TermName,
} from 'quadstore';
import memdown from 'memdown';
import { DataFactory } from 'rdf-data-factory';
import { newEngine } from 'quadstore-comunica';

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

class RdfStoreQueryEngine implements IQueryEngine, IUpdateEngine {

  async parse(query: string, options: Record<string, any>) {
    // @ts-ignore
    return newEngine().actorInitQuery.mediatorQueryParse.mediate({ query, baseIRI: options.baseIRI });
  }

  async update(data: Quad[], queryString: string, options: Record<string, any>): Promise<Quad[]> {
    try {
      const store = new Quadstore({
        dataFactory: new DataFactory(),
        backend: memdown(),
        // @ts-ignore
        comunica: newEngine(),
        indexes,
      });
      await store.open();
      await store.multiPut(data);
      await store.sparql(queryString, options);
      const results = (await store.get({}));
      await store.close();
      return results.items;
    } catch (err) {
      return [];
    }
  }

  async query(data: Quad[], queryString: string, options: Record<string, any>): Promise<IQueryResult> {
    try {
      const store = new Quadstore({
        dataFactory: new DataFactory(),
        backend: memdown(),
        // @ts-ignore
        comunica: newEngine(),
        indexes,
      });
      await store.open();
      await store.multiPut(data);
      const results = await store.sparql(queryString, options);
      let preparedResults: IQueryResult;
      switch (results.type) {
        case ResultType.BINDINGS:
          preparedResults = await this.prepareBindingResult(results);
          break;
        case ResultType.QUADS:
          preparedResults = await this.prepareQuadResult(results);
          break;
        case ResultType.BOOLEAN:
          preparedResults = await this.prepareBooleanResult(results);
          break;
        default:
          throw new Error(`Unsupported`);
      }
      await store.close();
      return preparedResults;
    } catch (err) {
      console.error(err);
      return this.prepareBindingResult({ type: ResultType.BINDINGS, variables: [], items: [] });
    }
  }

  async prepareBooleanResult(result: BooleanResult): Promise<IQueryResultBoolean> {
    return {
      type: 'boolean',
      value: result.value,
      equals(that: IQueryResult, laxCardinality?: boolean): boolean {
        return that.type === 'boolean' && that.value === result.value;
      },
    };
  }

  async prepareBindingResult(result: BindingArrayResult): Promise<IQueryResultBindings> {
    return {
      type: 'bindings',
      value: result.items,
      checkOrder: false,
      variables: result.variables,
      equals: (that, laxCardinality?: boolean): boolean => {
        if (that.type !== 'bindings') {
          return false;
        }
        return this.compareBindingResult(result.items, that.value, result.variables, laxCardinality);
      },
    };
  }

  compareBindingResult(
    actualBindings: {[variable: string]: Term}[],
    expectedBindings: {[variable: string]: Term}[],
    variables: string[],
    laxCardinality?: boolean,
  ): boolean {
    const comparator = getBindingComparator(variables);
    actualBindings.sort(comparator);
    expectedBindings.sort(comparator);
    for (let i = 0, n = Math.min(actualBindings.length, expectedBindings.length); i < n; i += 1) {
      if (comparator(actualBindings[i], expectedBindings[i]) !== 0) {
        return false;
      }
    }
    return true;
  }

  async prepareQuadResult(result: QuadArrayResult): Promise<IQueryResultQuads> {
    return {
      type: 'quads',
      value: result.items,
      equals: (that, laxCardinality?: boolean): boolean => {
        if (that.type !== 'quads') {
          return false;
        }
        return this.compareQuadResult(result.items, that.value, laxCardinality);
      },
    };
  }

  compareQuadResult(
    actualQuads: Quad[],
    expectedQuads: Quad[],
    laxCardinality?: boolean,
  ): boolean {
    const comparator = getQuadComparator();
    actualQuads.sort(comparator);
    expectedQuads.sort(comparator);
    for (let i = 0, n = Math.min(actualQuads.length, expectedQuads.length); i < n; i += 1) {
      if (comparator(actualQuads[i], expectedQuads[i]) !== 0) {
        return false;
      }
    }
    return true;
  }

}

module.exports = new RdfStoreQueryEngine();
