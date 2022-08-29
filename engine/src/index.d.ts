
import type {
  Quad,
  Query,
  Bindings,
  ResultStream,
  StringQueryable,
  AlgebraQueryable,
  StringSparqlQueryable,
  AlgebraSparqlQueryable,
  QueryAlgebraContext,
  QueryStringContext,
  QuerySourceContext,
  AllMetadataSupport,
  SparqlResultSupport,
} from '@rdfjs/types';

import type {
  Quadstore,
} from 'quadstore';

import type {
  Algebra
} from 'sparqlalgebrajs';

export type StringContext = Omit<
  QueryStringContext & QuerySourceContext<Quadstore>,
  'source' | 'sources' | 'destination'
>

export type AlgebraContext = Omit<
  QueryAlgebraContext & QuerySourceContext<Quadstore>,
  'source' | 'sources' | 'destination'
>

export declare class Engine implements StringQueryable<AllMetadataSupport, StringContext>
  , AlgebraQueryable<Algebra.Operation, AllMetadataSupport, AlgebraContext>
  , StringSparqlQueryable<SparqlResultSupport, StringContext>
  , AlgebraSparqlQueryable<Algebra.Operation, SparqlResultSupport, AlgebraContext> {

  constructor(store: Quadstore);

  queryBindings(query: string, context?: StringContext): Promise<ResultStream<Bindings>>;
  queryBindings(query: Algebra.Operation, context?: AlgebraContext): Promise<ResultStream<Bindings>>;

  queryBoolean(query: string, context?: StringContext): Promise<boolean>;
  queryBoolean(query: Algebra.Operation, context?: AlgebraContext): Promise<boolean>;

  queryQuads(query: string, context?: StringContext): Promise<ResultStream<Quad>>;
  queryQuads(query: Algebra.Operation, context?: AlgebraContext): Promise<ResultStream<Quad>>;

  queryVoid(query: string, context?: StringContext): Promise<void>;
  queryVoid(query: Algebra.Operation, context?: AlgebraContext): Promise<void>;

  query(query: string, context?: StringContext): Promise<Query<AllMetadataSupport>>;
  query(query: Algebra.Operation, context?: AlgebraContext): Promise<Query<AllMetadataSupport>>;
}

export declare const __engine: unknown;
