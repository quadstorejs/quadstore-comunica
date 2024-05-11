
require('./crypto-polyfill');

const { QueryEngine } = require('@comunica/query-sparql-rdfjs-lite');

const queryEngine = new QueryEngine();

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
