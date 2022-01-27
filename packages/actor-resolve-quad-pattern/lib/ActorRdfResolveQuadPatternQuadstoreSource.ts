import {ActorRdfResolveQuadPatternRdfJsSource} from '@comunica/actor-rdf-resolve-quad-pattern-rdfjs-source';
import type { IActionRdfResolveQuadPattern, IActorRdfResolveQuadPatternOutput,
  IQuadSource } from '@comunica/bus-rdf-resolve-quad-pattern';
import type { ActionContext, IActorArgs, IActorTest } from '@comunica/core';
import { QuadstoreQuadSource } from './QuadstoreQuadSource';

import { getContextSource } from '@comunica/bus-rdf-resolve-quad-pattern';

/**
 * A comunica RDFJS Source RDF Resolve Quad Pattern Actor.
 */
export class ActorRdfResolveQuadPatternQuadstoreSource extends ActorRdfResolveQuadPatternRdfJsSource {

  public async test(action: IActionRdfResolveQuadPattern): Promise<IActorTest> {
    // TODO: make sure the source is an instance of Quadstore
    return await super.test(action);
  }

  protected async getSource(context: ActionContext): Promise<IQuadSource> {
    console.log('QUADSTORE RESOLVER');
    const source: any = <any> getContextSource(context);
    return new QuadstoreQuadSource('match' in source ? source : source.value);
  }
}
