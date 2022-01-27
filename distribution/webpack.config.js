
const path = require('path');

// These packages are required by other modules but their exports are never
// used. We trick webpack into resolving them to a local empty module.
const alias = [
  'readable-web-to-node-stream',
  'stream',
  'readable-stream',
  'web-streams-ponyfill',
  'web-streams-node',
].reduce((acc, moduleName) => {
  acc[moduleName] = path.join(__dirname, 'require-empty.js');
  return acc;
}, {});

// These modules are dependencies of both this configuration of Comunica
// and quadstore itself. We don't need to bundle them as they are always
// available when using this package within quadstore.
// These should show up in our `peerDependencies`.
const externals = [
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
    alias,
  },
  externals,
};

