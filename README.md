
# Comunica for quadstore

This package provides a SPARQL query engine for [quadstore][3] based on the
[Comunica][1] framework.

Current version(s): `1.0.0` available on NPM under the `latest` tag, using `comunica@1.20.0` 

## Usage

```
import {Quadstore} from 'quadstore';
import {newEngine} from 'quadstore-comunica';

const store = new Quadstore({ 
  /* other options... */ 
  comunica: newEngine(), 
});
```

## Build process

This package and the SPARQL query engine it contains are optimized for bundle
size and dependency count.

The engine is first built using Comunica's runner, then bundled into a single
file using Webpack **5.x** and finally published in its bundled form to NPM. 
Dependencies shared with [quadstore][0] appear as `peerDependencies` in 
`package.json`.

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

[0]: https://github.com/beautifulinteractions/node-quadstore
[1]: https://github.com/comunica/comunica
[2]: https://github.com/beautifulinteractions/node-quadstore/issues
[3]: https://github.com/beautifulinteractions/node-quadstore#optscomunica
