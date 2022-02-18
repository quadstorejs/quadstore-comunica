
import type {
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
   Algebra,
} from 'sparqlalgebrajs';

type StringContext = Omit<
  QueryStringContext & QuerySourceContext<Quadstore>,
  'source' | 'sources' | 'destination'
>

type AlgebraContext = Omit<
  QueryAlgebraContext & QuerySourceContext<Quadstore>,
  'source' | 'sources' | 'destination'
>

interface Engine extends StringQueryable<AllMetadataSupport, StringContext>
  , AlgebraQueryable<Algebra, AllMetadataSupport, AlgebraContext>
  , StringSparqlQueryable<SparqlResultSupport, StringContext>
  , AlgebraSparqlQueryable<Algebra, SparqlResultSupport, AlgebraContext> {}

declare class Engine {
  constructor(store: Quadstore);
}

declare const __engine: unknown;
