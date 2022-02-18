
# Comunica for quadstore

This package provides a SPARQL query engine for [quadstore][3] based on the
[Comunica][1] framework.

Current version(s): `1.2.0-alpha.0` available on NPM under the `alpha` tag,
using `comunica@1.22.3`. 

## Usage

```typescript
import { Quadstore } from 'quadstore';
import { newEngine } from 'quadstore-comunica';

const store = new Quadstore({ 
  /* other options... */ 
  comunica: newEngine(), 
});
```

## Repository structure

This repository is a monorepo that contains a custom configuration/distribution
of Comunica. It includes the following projects and packages:

| Package                                     | Published as         | Notes                                    |
|---------------------------------------------|----------------------|------------------------------------------| 
| `distribution/`                             | `quadstore-comunica` | Configuration files and build system     |
| `spec/`                                     | -                    | Testing against SPARQL spec(s)           |
| `packages/actor-optimize-query-operation/`  | -                    | Quadstore-specific optimization actor    |
| `packages/actor-resolve-quad-pattern/`      | -                    | Quadstore-specific quad resolution actor |

## Build process

The SPARQL query engine is optimized for bundle size and dependency count.

The engine is first built using Comunica's runner, then bundled into a single
file using Webpack **5.x** and finally published in its bundled form to NPM. 
Dependencies shared with [quadstore][0] appear as `peerDependencies` in 
`distribution/package.json`.

```shell
cd distribution
npm run build
```

The bundle is intentionally kept un-minified to facilitate debugging and
preservation.

## Nested bundles

The build process of this package replaces the variable prefix `__webpack_` 
with `__cmncwpk_` everywhere throughout the resulting bundle. This ensures
that the latter can be included in other application bundles without 
triggering naming collisions of Webpack's internal variables.

More issues related to naming collisions between nested bundles:

https://github.com/webpack/webpack/issues/1054
https://github.com/webpack/webpack/issues/11277

See also [this PR to vercel/ncc](https://github.com/vercel/ncc/pull/633).

## Issues 

Issues should be reported in quadstore's [issue tracker][2].
See also the [quadstore][0] and [comunica][1] repositories.

## Linking Comunica

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

[0]: https://github.com/belayeng/quadstore
[1]: https://github.com/comunica/comunica
[2]: https://github.com/belayeng/quadstore/issues
[3]: https://github.com/belayeng/quadstore#optscomunica



## SPARQL spec

We're using the [`rdf-test-suite`][s4] package to validate our
support for SPARQL queries against official test suites published by the W3C.

We're currently testing against the following manifests:

- [SPARQL 1.1][s2] / [QUERY][s3]: 289/290 tests passing (`npm run spec:query`)
- [SPARQL 1.1][s2] / [UPDATE][s5]: 155/156 tests passing (`npm run spec:update`)

[s2]: https://w3c.github.io/rdf-tests/sparql11/data-sparql11/manifest-all.ttl
[s3]: http://www.w3.org/TR/sparql11-query/
[s5]: http://www.w3.org/TR/sparql11-update/
[s4]: https://www.npmjs.com/package/rdf-test-suite
