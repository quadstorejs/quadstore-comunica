
# Comunica for quadstore

This monorepo hosts a number of packages that comprise the build system of
`quadstore-comunica`, a SPARQL query engine powered by [Comunica][i1] and
optimized for use with [`quadstore`][i2], both browser-side and server-side. 

[i1]: https://comunica.dev
[i2]: https://www.npmjs.com/package/quadstore
[i3]: https://www.npmjs.com/package/@comunica/query-sparql-rdfjs-lite

## Directory structure

| dir          | description                                                       |
|:-------------|:------------------------------------------------------------------|
| `./engine`   | the actual `quadstore-comunica` package and query engine          |
| `./spec`     | SPARQL testing suite package                                      |
| `./packages` | dependencies and replacements bundled within `quadstore-comunica` |
| `./examples` | runnable usage examples                                           |

Each package comes with its own `README.md` for further information. 

## Build process

`quadstore-comunica` is optimized for bundle size and dependency count.

The engine is based on [`@comunica/query-sparql-rdfjs-lite`][i3], bundled
into a single file using Webpack **5.x** and published in its bundled form
to NPM. The bundle is intentionally kept un-minified to facilitate debugging
and preservation.

Dependencies shared with [quadstore][i2] appear as `peerDependencies` in 
`engine/package.json`.

```shell
sh scripts/install.sh   # run "npm install" across all packages
sh scripts/build.sh     # run "npm run build" across all packages in the correct order

cd ./spec
npm run spec:query      # run SPARQL 1.1 / Query test suite
npm run spec:update     # run SPARQL 1.1 / Update test suite
```

### Nested bundles

The build process of this package replaces the variable prefix `__webpack_` 
with `__quadstore_comunica_` everywhere throughout the resulting bundle.
This ensures that the latter can be included in other application bundles
without triggering naming collisions of Webpack's internal variables.

More issues related to naming collisions between nested bundles:

https://github.com/webpack/webpack/issues/1054
https://github.com/webpack/webpack/issues/11277

See also [this PR to vercel/ncc](https://github.com/vercel/ncc/pull/633).
