
# Comunica for quadstore

A SPARQL query engine for [quadstore][i0] built on the [Comunica][i1]
framework and implementing the [RDF/JS Query specification][i3].

Practical examples of how to use the engine can be found in [`/examples`][i6].
These examples complement the [RDF/JS Query specification][i3] and 
[Comunica's documentation][i5]. See also the [quadstore][i0] and [comunica][i1]
repositories.

For further information, please refer to [quadstore's repository][i7].

[i0]: https://github.com/jacoscaz/quadstore
[i1]: https://github.com/comunica/comunica
[i2]: https://github.com/jacoscaz/quadstore/issues
[i3]: https://rdf.js.org/query-spec/
[i5]: https://comunica.dev/docs/query/getting_started/query_app/#3--executing-sparql-select-queries
[i6]: https://github.com/jacoscaz/quadstore-comunica/tree/master/examples
[i7]: https://github.com/jacoscaz/quadstore#browser-usage

## Basic usage

```typescript
import { MemoryLevel } from 'memory-level';
import { DataFactory } from 'rdf-data-factory';
import { Quadstore } from 'quadstore';
import { Engine } from 'quadstore-comunica';

const backend = new MemoryLevel();
const df = new DataFactory();
const store = new Quadstore({ backend, dataFactory: df });
const engine = new Engine(store);

await store.open();

const bindingsStream = await engine.queryBindings('SELECT * {?s ?p ?o}');
bindingsStream.on('data', binding => console.log(binding));
```

## SPARQL coverage

We're using the [`rdf-test-suite`][s4] package to validate our
support for SPARQL queries against official test suites published by the W3C.

We're currently testing against the following manifests:

- [SPARQL 1.1][s2] / [QUERY][s3]: 297/298 (99.6%) tests passing
- [SPARQL 1.1][s2] / [UPDATE][s5]: 155/157 (98.7%) tests passing

[s2]: https://w3c.github.io/rdf-tests/sparql11/data-sparql11/manifest-all.ttl
[s3]: http://www.w3.org/TR/sparql11-query/
[s5]: http://www.w3.org/TR/sparql11-update/
[s4]: https://www.npmjs.com/package/rdf-test-suite
