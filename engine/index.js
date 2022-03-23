
(() => {
    const isNode = typeof process !== 'undefined'
        && process.versions != null
        && process.versions.node != null;
    // The Webpack bundle of this package is built using the "target: browser"
    // option (see webpack.config.js). This leads some packages to assume the
    // availability of the Web Crypto API through the global "crypto" object.
    // As we don't have that in Node.js but usage seems to be limited to the
    // crypto.getRandomValues() method, we use Node.js' own crypto module to
    // create a polyfill.
    if (isNode && typeof crypto === 'undefined') {
        const crypto = eval('require(\'crypto\')');
        // @ts-ignore
        global.crypto = {};
        global.crypto.getRandomValues = (arr) => {
            crypto.randomFillSync(arr);
            return arr;
        };
    }
})();

const empty = Object.create(null);

const { QueryEngineBase } = require('@comunica/actor-init-query');
const engine = new QueryEngineBase(require('./engine.js'));

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
