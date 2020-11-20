
import type * as RDF from 'rdf-js';
import { Algebra } from 'sparqlalgebrajs';
import { AsyncIterator } from 'asynciterator';

export interface Map<K extends string, V> {
  get(key: K): V;
  toObject(): Record<K, V>;
}

export type Bindings = Map<string, RDF.Term>;

export type BindingsStream = AsyncIterator<Bindings>;

export interface IActorQueryOperationOutputBase {
  type: string;
  metadata?: () => Promise<Record<string, any>>;
}

export interface IQueryResultBindings extends IActorQueryOperationOutputBase {
  type: 'bindings';
  bindingsStream: BindingsStream;
  variables: string[];
  canContainUndefs: boolean;
  bindings: () => Promise<Bindings[]>;
}

export interface IQueryResultQuads extends IActorQueryOperationOutputBase {
  type: 'quads';
  quadStream: RDF.Stream & AsyncIterator<RDF.Quad>;
  quads: () => Promise<RDF.Quad[]>;
}

export interface IQueryResultBoolean extends IActorQueryOperationOutputBase {
  type: 'boolean';
  booleanResult: Promise<boolean>;
}

export type IQueryResult = IQueryResultBindings | IQueryResultQuads | IQueryResultBoolean;

export interface ActorInitSparql {
  query(query: string | Algebra.Operation, context?: any): Promise<IQueryResult>;
}

export declare function newEngine(): ActorInitSparql;
