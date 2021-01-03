
# Comunica for quadstore

This package provides a Comunica-based SPARQL query engine for use
within quadstore. 

**IMPORTANT: this package is not meant to be used on its own but rather
as a dependency of quadstore itself.**

## Build

The engine is built using Comunica's runner, bundled into a single file
using Webpack (version **5.x**) and published in its bundled form to NPM.

**WARNING: due to issues with nested bundles arising from naming collisions
of Webpack's internal variables, the build process of this package replaces
the variable prefix `__webpack_` with `__cmncwpk_` everywhere in the bundle.**

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
