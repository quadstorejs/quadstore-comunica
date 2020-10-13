
const path = require('path');

// These packages should be ending up in the bundle given the configuration
// in config/config-default.json. However, due to causes I haven't been able
// to find so far, they're still being bundled. So, we forcefully add them
// to the "externals" section of Webpack's configuration pointing to variables
// that do not exist with similar names. This causes Webpack to drop them from
// the bundle while giving us a nice error message in case we ignore a package
// that is actually used by this configuration.
const ignoredPackagesExternals = [
  '@comunica/actor-http-memento',
  '@comunica/actor-http-native',
  '@comunica/actor-query-operation-sparql-endpoint',
  '@comunica/actor-rdf-dereference-http-parse',
  '@comunica/actor-rdf-metadata-extract-hydra-controls',
  '@comunica/actor-rdf-metadata-extract-hydra-count',
  '@comunica/actor-rdf-metadata-extract-sparql-service',
  '@comunica/actor-rdf-parse-html',
  '@comunica/actor-rdf-parse-html-rdfa',
  '@comunica/actor-rdf-parse-html-script',
  '@comunica/actor-rdf-parse-jsonld',
  '@comunica/actor-rdf-parse-n3',
  '@comunica/actor-rdf-parse-rdfxml',
  '@comunica/actor-rdf-parse-xml-rdfa',
  '@comunica/actor-rdf-resolve-hypermedia-qpf',
  '@comunica/actor-rdf-resolve-hypermedia-sparql',
  '@comunica/actor-rdf-resolve-quad-pattern-federated',
  '@comunica/actor-rdf-resolve-quad-pattern-hypermedia',
  '@comunica/actor-rdf-serialize-n3',
  '@comunica/actor-sparql-parse-graphql',
  '@comunica/actor-sparql-serialize-csv',
  '@comunica/actor-sparql-serialize-json',
  '@comunica/actor-sparql-serialize-rdf',
  '@comunica/actor-sparql-serialize-simple',
  '@comunica/actor-sparql-serialize-sparql-json',
  '@comunica/actor-sparql-serialize-sparql-tsv',
  '@comunica/actor-sparql-serialize-sparql-xml',
  '@comunica/actor-sparql-serialize-table',
  'cross-fetch',
  'cross-fetch/dist',
  'dom-serializer',
  'domhandler',
  'fetch-sparql-endpoint',
  'graphql',
  'graphql-to-sparql',
  'htmlparser2',
  'http-link-header',
  'jsonld-context-parser',
  'jsonld-streaming-parser',
  'jsonld-streaming-serializer',
  'jsonparse',
  'promise-polyfill',
  'rdfa-streaming-parser',
  'rdfxml-streaming-parser',
  'through',
  'web-streams-node',
  'web-streams-ponyfill',
  'xml',
].reduce((acc, packageName) => {
  acc[packageName] = `_webpack_ignored_${packageName.replace(/[^a-z0-9]/ig, '_')}`;
  return acc;
}, {});

// The following modules are either native Node.js modules that we do not want
// to have in our bundle but that are still required by this package and/or its
// dependencies. We add them as "commonjs2" externals, which causes Webpack to
// to add the relevant require() invocations where needed.
const nativeModulesExternals = [
  'fs',
  'os',
  'url',
  'path',
  'util',
  'http',
  'https',
  'crypto',
  'stream',
  'buffer',
  'events',
  'querystring',
].reduce((acc, moduleName) => {
  acc[moduleName] = `commonjs2 ${moduleName}`;
  return acc;
}, {});

// The following modules are polyfills / ponyfills for native modules. We want
// to use the latter, so we use Webpack externals to trick our application
// into using them.
const replacementExternals = {
  'readable-stream': 'commonjs2 stream',
};

// Webpack configuration
module.exports = {
  mode: 'production',
  entry: './engine.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'engine.bundle.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.jsonld$/,
        loader: 'json-loader',
      }
    ],
  },
  resolve: {
    alias: {
      // We can swap out "decimal.js" for "bignumber.js" as the latter covers
      // all of our uses at roughly half the size:
      // - https://github.com/MikeMcl/big.js/wiki
      // - https://github.com/comunica/sparqlee/blob/master/lib/functions/RegularFunctions.ts
      'decimal.js': 'bignumber.js',
    },
  },
  externals: {
    ...nativeModulesExternals,
    ...ignoredPackagesExternals,
    ...replacementExternals,
  },
};

