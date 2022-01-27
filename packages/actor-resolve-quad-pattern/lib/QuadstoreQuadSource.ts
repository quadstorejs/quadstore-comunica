import type { IQuadSource } from '@comunica/bus-rdf-resolve-quad-pattern';
import { RdfJsQuadSource } from '@comunica/actor-rdf-resolve-quad-pattern-rdfjs-source';
import type { AsyncIterator } from 'asynciterator';
import { wrap as wrapAsyncIterator } from 'asynciterator';
import type * as RDF from 'rdf-js';
import type { IQuadstoreSourceExtended } from './IQuadstoreSourceExtended';

/**
 * A quad source that wraps over an {@link RDF.Source}.
 */
export class QuadstoreQuadSource extends RdfJsQuadSource implements IQuadSource {

  public static nullifyVariables(term?: RDF.Term): RDF.Term | undefined {
    return !term || term.termType === 'Variable' ? undefined : term;
  }

  public match(subject: RDF.Term, predicate: RDF.Term, object: RDF.Term, graph: RDF.Term): AsyncIterator<RDF.Quad> {
    // TODO: add ranges from context
    // TODO: where is the context?
    return super.match(subject, predicate, object, graph);
  }

}
