
require('./crypto-polyfill.cjs');

const { QueryEngine } = require('@comunica/query-sparql-rdfjs-lite');

const empty = Object.create(null);

const __engine = new QueryEngine();

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
        return __engine.query(query, this.getContext(context));
    }

    queryVoid(query, context = empty) {
        return __engine.queryVoid(query, this.getContext(context));
    }

    queryBindings(query, context = empty) {
        return __engine.queryBindings(query, this.getContext(context));
    }

    queryQuads(query, context = empty) {
        return __engine.queryQuads(query, this.getContext(context));
    }

    queryBoolean(query, context = empty) {
        return __engine.queryBoolean(query, this.getContext(context));
    }

}

module.exports.__engine = __engine;
module.exports.Engine = Engine;
