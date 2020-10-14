
import {ActorInitSparql} from '@comunica/actor-init-sparql/index-browser';

export { ActorInitSparql }

export const newEngine = (): ActorInitSparql => {
  return require('./engine.js');
};

