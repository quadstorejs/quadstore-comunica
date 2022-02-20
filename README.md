
# Comunica for quadstore

This package provides a SPARQL query engine for [quadstore][i0] built on the
[Comunica][i1] framework and implementing the [RDF/JS Query specification][i3].

Current version(s): `2.0.0-beta.0` available on NPM under the `latest` tag,
using `comunica@2.0.1-alpha.9.0`. 

Issues should be reported in quadstore's [issue tracker][i2]. See also the
[quadstore][i0] and [comunica][i1] repositories.

[i0]: https://github.com/belayeng/quadstore
[i1]: https://github.com/comunica/comunica
[i2]: https://github.com/belayeng/quadstore/issues
[i3]: https://rdf.js.org/query-spec/

## Table of contents

- [Example usage](#example-usage)
- [API](#api)
  - [`Engine` class](#engine-class)
  - [`engine.query()`](#enginequery)
  - [`query.resultType`](#queryresulttype)
  - [`query.metadata()`](#querymetadata)
  - [`query.execute()`](#queryexecute)
  - [`engine.queryBindings()`](#enginequerybindings)
  - [`engine.queryQuads()`](#enginequeryquads)
  - [`engine.queryVoid()`](#enginequeryvoid)
  - [`engine.queryBoolean()`](#enginequeryboolean)
- [SPARQL coverage](#sparql-coverage)
- [Build process](#build-process)
  - [Nested bundles](#nested-bundles)
  - [Linking Comunica](#linking-comunica)

## Example Usage

```typescript
import memdown from 'memdown';
import {DataFactory} from 'rdf-data-factory';
import {Quadstore} from 'quadstore';
import {Engine} from 'quadstore-comunica';

// Any implementation of AbstractLevelDOWN can be used.
// For server-side persistence, use `leveldown` or `rocksdb`.
const backend = memdown();

// Implementation of the RDF/JS DataFactory interface
const df = new DataFactory();

// Store and query engine are separate modules
const store = new Quadstore({backend, dataFactory: df});
const engine = new Engine(store);

// Put a single quad into the store using Quadstore's API
store.put(df.quad(
  df.namedNode('http://example.com/subject'),
  df.namedNode('http://example.com/predicate'),
  df.namedNode('http://example.com/object'),
  df.defaultGraph(),
));

// Queries the store via RDF/JS Query interfaces
const query = await engine.query('SELECT * {?s ?p ?o}');
const bindingsStream = await query.execute();
```

## API

### `Engine` class

The engine class implements the `StringQueryable`, `StringSparqlQueryable`,
`AlgebraQueryable` and `AlgebraSparqlQueryable` interfaces from the
[RDF/JS Query specification][a1]. Its constructor must be invoked with an 
instance of `Quadstore`.

```typescript
import { Quadstore } from 'quadstore';
import { Engine } from 'quadstore-comunica';

const store = new Quadstore({ /* ... */ });
const engine = new Engine(store);
```

[a1]: https://rdf.js.org/query-spec/

### `engine.query()`

```typescript
const query = await engine.query(`SELECT ...`);
```

TBD

### `query.resultType`

TBD

### `query.metadata()`

TBD 

### `query.execute()`

TBD

### `engine.queryBindings()`

TBD

### `engine.queryQuads()`

TBD

### `engine.queryVoid()`

TBD

### `engine.queryBoolean()`

TBD

## SPARQL coverage

We're using the [`rdf-test-suite`][s4] package to validate our
support for SPARQL queries against official test suites published by the W3C.

We're currently testing against the following manifests:

- [SPARQL 1.1][s2] / [QUERY][s3]: 288/290 (99.3%) tests passing
- [SPARQL 1.1][s2] / [UPDATE][s5]: 156/156 (100%) tests passing

[s2]: https://w3c.github.io/rdf-tests/sparql11/data-sparql11/manifest-all.ttl
[s3]: http://www.w3.org/TR/sparql11-query/
[s5]: http://www.w3.org/TR/sparql11-update/
[s4]: https://www.npmjs.com/package/rdf-test-suite

## Build process

The SPARQL query engine is optimized for bundle size and dependency count.

The engine is first built using Comunica's runner, then bundled into a single
file using Webpack **5.x** and finally published in its bundled form to NPM.
The bundle is intentionally kept un-minified to facilitate debugging and
preservation.

Dependencies shared with [quadstore][0] appear as `peerDependencies` in 
`distribution/package.json`.

```shell
npm install         # run in the project's root dir, will install all
                    # dependencies across all packages

# link Comunica's packages into this project (see below)
# after the release of Comunica 2.0 this will not be necessary anymore. 
      
npm run ts:build    # run in the project's root dir, will compile all TS files
                    # across all packages
                    
cd distribution     # build the actual quadstore-comunica package by running
npm run build       # Comunica's runner and then Webpack.

cd ../spec
npm run spec:query  # run SPARQL 1.1 / Query test suite
npm run spec:update # run SPARQL 1.1 / Update test suite
```

### Nested bundles

The build process of this package replaces the variable prefix `__webpack_` 
with `__cmncwpk_` everywhere throughout the resulting bundle. This ensures
that the latter can be included in other application bundles without 
triggering naming collisions of Webpack's internal variables.

More issues related to naming collisions between nested bundles:

https://github.com/webpack/webpack/issues/1054
https://github.com/webpack/webpack/issues/11277

See also [this PR to vercel/ncc](https://github.com/vercel/ncc/pull/633).

### Linking Comunica

When working against a local version of Comunica we need to link all of its
packages into this project's `node_modules` directory. The following commands
can help:

```shell
# Move to Comunica's directory.
cd /to/comunica/dir

# Prep all packages to be linked into a different project.
./node_modules/.bin/lerna --no-progress --loglevel warn exec -- yarn link

# Print a list of commands to be used in the root of whatever project depends
# on Comunica to link all packages into the project's node_modules.
./node_modules/.bin/lerna --no-progress --loglevel warn list | sed 's/^/yarn link /'
```
