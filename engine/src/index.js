
require('./crypto-polyfill');

const { QueryEngineBase } = require('@comunica/actor-init-query');
const engine = new QueryEngineBase(require('./engine.js'));

const empty = Object.create(null);

class Engine {

    constructor(store) {
        this.store = store;
        this.engine = engine;
    }

    getContext(context) {
        return {
            ...context,
            source: this.store,
            destination: this.store,
        };
    }

    query(query, context = empty) {
        return engine.query(query, this.getContext(context));
    }

    queryVoid(query, context = empty) {
        return engine.queryVoid(query, this.getContext(context));
    }

    queryBindings(query, context = empty) {
        return engine.queryBindings(query, this.getContext(context));
    }

    queryQuads(query, context = empty) {
        return engine.queryQuads(query, this.getContext(context));
    }

    queryBoolean(query, context = empty) {
        return engine.queryBoolean(query, this.getContext(context));
    }

}

module.exports.Engine = Engine;
module.exports.__engine = engine;
