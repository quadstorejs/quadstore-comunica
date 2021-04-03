
const path = require('path');

// These packages should not be bundled by Webpack given the configuration
// in config/config-default.json. However, due to causes I haven't been able
// to find so far, they're still being bundled. So, we forcefully drop them
// from the bundle by tricking Webpack into aliasing them to a local empty
// module.
const ignoredPackagesToEmptyModuleAliases = [
  '@comunica/actor-http-memento',
  '@comunica/actor-http-native',
  '@comunica/actor-init-hello-world',
  '@comunica/actor-init-http',
  '@comunica/actor-init-rdf-dereference',
  '@comunica/actor-init-rdf-dereference-paged',
  '@comunica/actor-init-rdf-parse',
  '@comunica/actor-query-operation-sparql-endpoint',
  '@comunica/actor-rdf-dereference-http-parse',
  '@comunica/actor-rdf-metadata-all',
  '@comunica/actor-rdf-metadata-extract-hydra-controls',
  '@comunica/actor-rdf-metadata-extract-hydra-count',
  '@comunica/actor-rdf-metadata-extract-sparql-service',
  '@comunica/actor-rdf-metadata-primary-topic',
  '@comunica/actor-rdf-parse-html',
  '@comunica/actor-rdf-parse-html-rdfa',
  '@comunica/actor-rdf-parse-html-script',
  '@comunica/actor-rdf-parse-jsonld',
  '@comunica/actor-rdf-parse-n3',
  '@comunica/actor-rdf-parse-rdfxml',
  '@comunica/actor-rdf-parse-xml-rdfa',
  '@comunica/actor-rdf-resolve-hypermedia-none',
  '@comunica/actor-rdf-resolve-hypermedia-qpf',
  '@comunica/actor-rdf-resolve-hypermedia-sparql',
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
  '@comunica/actor-sparql-serialize-stats',
  '@comunica/actor-sparql-serialize-table',
  '@comunica/bus-rdf-dereference',
  '@comunica/bus-rdf-metadata',
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
  'microdata-rdf-streaming-parser',
  'n3',
  'promise-polyfill',
  'rdfa-streaming-parser',
  'rdfxml-streaming-parser',
  'through',
  'web-streams-node',
  'web-streams-ponyfill',
  'xml',
].reduce((acc, packageName) => {
  acc[packageName] = path.join(__dirname, 'require-empty.js');
  return acc;
}, {});

// These packages are required by other modules but their exports are never
// used. We trick webpack into resolving them to a local empty module.
const unusedPackagesToEmptyModuleAliases = [
  '@comunica/actor-sparql-serialize-tree', // @see https://github.com/comunica/comunica/blob/2d0818c64e5bfbbb334ecbccb7b5a98a69263d1c/packages/actor-init-sparql/index-browser.ts#L3
  'fs',
  'path',
  'stream',
  'readable-stream',
].reduce((acc, moduleName) => {
  acc[moduleName] = path.join(__dirname, 'require-empty.js');
  return acc;
}, {});

// The following modules are native Node.js modules that we do not want to have
// in our bundle but that are still required by this package and/or its
// dependencies. We add them as "commonjs2" externals, which causes Webpack to
// to add the relevant require() invocations where needed.
const nativeModulesExternals = [
  'os',
  'url',
  'util',
  'http',
  'https',
  'crypto',
  'buffer',
  'events',
  'querystring',
].reduce((acc, moduleName) => {
  acc[moduleName] = `commonjs2 ${moduleName}`;
  return acc;
}, {});

// The following modules are polyfills / ponyfills for native modules.
// We prefer native modules, so we use "commonjs2" externals to replace
// all polyfills with their native versions.
const replacementExternals = {
  'readable-stream': 'commonjs2 stream',
};

// These modules are dependencies of both this configuration of Comunica
// and quadstore itself. We don't need to bundle them as they are always
// available when using this package within quadstore.
// These should show up in our `peerDependencies`.
const peerDependenciesExternals = [
  'asynciterator',
  'rdf-data-factory',
].reduce((acc, moduleName) => {
  acc[moduleName] = `commonjs2 ${moduleName}`;
  return acc;
}, {});

// Webpack configuration
module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'index.bundle.js',
    libraryTarget: 'commonjs2',
  },
  target: 'web',
  optimization: {
    minimize: false,
    moduleIds: 'named',
    concatenateModules: false,
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
      ...ignoredPackagesToEmptyModuleAliases,
      ...unusedPackagesToEmptyModuleAliases,
    },
  },
  externals: {
    ...nativeModulesExternals,
    ...replacementExternals,
    ...peerDependenciesExternals,
  },
};

