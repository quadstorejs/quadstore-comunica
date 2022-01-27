"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const quadstore_1 = require("quadstore");
const memdown_1 = __importDefault(require("memdown"));
const rdf_data_factory_1 = require("rdf-data-factory");
const quadstore_comunica_1 = require("quadstore-comunica");
const indexes = [
    ['subject', 'predicate', 'object', 'graph'],
    ['subject', 'predicate', 'graph', 'object'],
    ['subject', 'object', 'predicate', 'graph'],
    ['subject', 'object', 'graph', 'predicate'],
    ['subject', 'graph', 'predicate', 'object'],
    ['subject', 'graph', 'object', 'predicate'],
    ['predicate', 'subject', 'object', 'graph'],
    ['predicate', 'subject', 'graph', 'object'],
    ['predicate', 'object', 'subject', 'graph'],
    ['predicate', 'object', 'graph', 'subject'],
    ['predicate', 'graph', 'subject', 'object'],
    ['predicate', 'graph', 'object', 'subject'],
    ['object', 'subject', 'predicate', 'graph'],
    ['object', 'subject', 'graph', 'predicate'],
    ['object', 'predicate', 'subject', 'graph'],
    ['object', 'predicate', 'graph', 'subject'],
    ['object', 'graph', 'subject', 'predicate'],
    ['object', 'graph', 'predicate', 'subject'],
    ['graph', 'subject', 'predicate', 'object'],
    ['graph', 'subject', 'object', 'predicate'],
    ['graph', 'predicate', 'subject', 'object'],
    ['graph', 'predicate', 'object', 'subject'],
    ['graph', 'object', 'subject', 'predicate'],
    ['graph', 'object', 'predicate', 'subject']
];
class RdfStoreQueryEngine {
    async parse(query, options) {
        // @ts-ignore
        return (0, quadstore_comunica_1.newEngine)().actorInitQuery.mediatorQueryParse.mediate({ query, baseIRI: options.baseIRI });
    }
    async update(data, queryString, options) {
        try {
            const store = new quadstore_1.Quadstore({
                dataFactory: new rdf_data_factory_1.DataFactory(),
                backend: (0, memdown_1.default)(),
                // @ts-ignore
                comunica: (0, quadstore_comunica_1.newEngine)(),
                indexes,
            });
            await store.open();
            await store.multiPut(data);
            await store.sparql(queryString, options);
            const results = (await store.get({}));
            await store.close();
            return results.items;
        }
        catch (err) {
            return [];
        }
    }
    async query(data, queryString, options) {
        try {
            const store = new quadstore_1.Quadstore({
                dataFactory: new rdf_data_factory_1.DataFactory(),
                backend: (0, memdown_1.default)(),
                // @ts-ignore
                comunica: (0, quadstore_comunica_1.newEngine)(),
                indexes,
            });
            await store.open();
            await store.multiPut(data);
            const results = await store.sparql(queryString, options);
            let preparedResults;
            switch (results.type) {
                case quadstore_1.ResultType.BINDINGS:
                    preparedResults = await this.prepareBindingResult(results);
                    break;
                case quadstore_1.ResultType.QUADS:
                    preparedResults = await this.prepareQuadResult(results);
                    break;
                case quadstore_1.ResultType.BOOLEAN:
                    preparedResults = await this.prepareBooleanResult(results);
                    break;
                default:
                    throw new Error(`Unsupported`);
            }
            await store.close();
            return preparedResults;
        }
        catch (err) {
            console.error(err);
            return this.prepareBindingResult({ type: quadstore_1.ResultType.BINDINGS, variables: [], items: [] });
        }
    }
    async prepareBooleanResult(result) {
        return {
            type: 'boolean',
            value: result.value,
            equals(that, laxCardinality) {
                return that.type === 'boolean' && that.value === result.value;
            },
        };
    }
    async prepareBindingResult(result) {
        return {
            type: 'bindings',
            value: result.items,
            checkOrder: false,
            variables: result.variables,
            equals: (that, laxCardinality) => {
                if (that.type !== 'bindings') {
                    return false;
                }
                return this.compareBindingResult(result.items, that.value, result.variables, laxCardinality);
            },
        };
    }
    compareBindingResult(actualBindings, expectedBindings, variables, laxCardinality) {
        const comparator = (0, quadstore_1.getBindingComparator)(variables);
        actualBindings.sort(comparator);
        expectedBindings.sort(comparator);
        for (let i = 0, n = Math.min(actualBindings.length, expectedBindings.length); i < n; i += 1) {
            if (comparator(actualBindings[i], expectedBindings[i]) !== 0) {
                return false;
            }
        }
        return true;
    }
    async prepareQuadResult(result) {
        return {
            type: 'quads',
            value: result.items,
            equals: (that, laxCardinality) => {
                if (that.type !== 'quads') {
                    return false;
                }
                return this.compareQuadResult(result.items, that.value, laxCardinality);
            },
        };
    }
    compareQuadResult(actualQuads, expectedQuads, laxCardinality) {
        const comparator = (0, quadstore_1.getQuadComparator)();
        actualQuads.sort(comparator);
        expectedQuads.sort(comparator);
        for (let i = 0, n = Math.min(actualQuads.length, expectedQuads.length); i < n; i += 1) {
            if (comparator(actualQuads[i], expectedQuads[i]) !== 0) {
                return false;
            }
        }
        return true;
    }
}
module.exports = new RdfStoreQueryEngine();
