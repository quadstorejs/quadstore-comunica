
# Comunica for quadstore

This monorepo hosts a number of packages that comprise the build system of
`quadstore-comunica`, a SPARQL query engine powered by [Comunica][i1] and
optimized for use with [`quadstore`][i2], both browser-side and server-side. 

[i1]: https://comunica.dev
[i2]: https://www.npmjs.com/package/quadstore

## Directory structure

| dir          | description                                                    |
|:-------------|:---------------------------------------------------------------|
| `./engine`   | the actual `quadstore-comunica` package and query engine       |
| `./spec`     | SPARQL testing suite package                                   |
| `./packages` | dependencies and replacements used within `quadstore-comunica` |
| `./examples` | runnable usage examples                                        |

Each package comes with its own `README.md` for further information. 

## Build process

The SPARQL query engine is optimized for bundle size and dependency count.

The engine is first built using Comunica's runner, then bundled into a single
file using Webpack **5.x** and finally published in its bundled form to NPM.
The bundle is intentionally kept un-minified to facilitate debugging and
preservation.

Dependencies shared with [quadstore][0] appear as `peerDependencies` in 
`engine/package.json`.

```shell
npm install         # run in the project's root dir, will install all
                    # dependencies across all packages

# link Comunica's packages into this project (see below)
# after the release of Comunica 2.0 this will not be necessary anymore. 
      
npm run ts:build    # run in the project's root dir, will compile all TS files
                    # across all packages
                    
cd engine           # build the actual quadstore-comunica package by running
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
