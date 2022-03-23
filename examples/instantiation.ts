
import memdown from 'memdown';
import { Quadstore } from 'quadstore';
import { Engine } from 'quadstore-comunica';
import { DataFactory } from 'rdf-data-factory';

export const instantiate = async () => {

  const dataFactory = new DataFactory();

  const store = new Quadstore({
    dataFactory,
    backend: memdown(),
  });

  await store.open();

  await store.multiPut([
    dataFactory.quad(
      dataFactory.namedNode('http://ex#foo'),
      dataFactory.namedNode('http://ex#bar'),
      dataFactory.namedNode('http://ex#baz'),
    ),
    dataFactory.quad(
      dataFactory.namedNode('http://ex#ex'),
      dataFactory.namedNode('http://ex#why'),
      dataFactory.namedNode('http://ex#zed'),
    ),
  ]);

  const engine = new Engine(store);

  return { dataFactory, store, engine };

};

