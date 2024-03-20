
require('./crypto-polyfill');


// const { QueryEngineBase } from '@comunica/actor-init-query';
// import type { ActorInitQueryBase } from '@comunica/actor-init-query';
// import type { IQueryContextCommon } from '@comunica/types';

// // eslint-disable-next-line import/extensions,ts/no-require-imports,ts/no-var-requires
// const engineDefault = require('../engine.js');

// /**
//  * A Comunica SPARQL query engine.
//  */
// export class QueryEngine<QueryContext extends IQueryContextCommon = IQueryContextCommon>
//   extends QueryEngineBase<QueryContext> {
//   public constructor(engine: ActorInitQueryBase = engineDefault()) {
//     super(engine);
//   }
// }

const { QueryEngineBase } = require('@comunica/actor-init-query');

const engineDefault = require('./engine.js');
const queryEngine = new QueryEngineBase(engineDefault());

const empty = Object.create(null);

class Engine {

    constructor(store) {
        this._context = {
            sources: [store],
            destination: store,
        };
    }

    getContext(context) {
        return {
            ...context,
            ...this._context,
        };
    }

    query(query, context = empty) {
        return queryEngine.query(query, this.getContext(context));
    }

    queryVoid(query, context = empty) {
        return queryEngine.queryVoid(query, this.getContext(context));
    }

    queryBindings(query, context = empty) {
        return queryEngine.queryBindings(query, this.getContext(context));
    }

    queryQuads(query, context = empty) {
        return queryEngine.queryQuads(query, this.getContext(context));
    }

    queryBoolean(query, context = empty) {
        return queryEngine.queryBoolean(query, this.getContext(context));
    }

}

module.exports.Engine = Engine;
module.exports.__engine = queryEngine;
