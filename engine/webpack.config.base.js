
const path = require('path');

/**
 *
 * @param {'module' | 'commonjs2'} externalsType
 */
const buildBaseConf = (externalsType) => {
  // These packages are required by other modules but their exports are never
// used. We trick webpack into resolving them to a local empty module.
  const aliasToEmpty = [
    'buffer',
    'safe-buffer',
    'process',
    'promise-polyfill',
    'readable-web-to-node-stream',
    'stream',
    'readable-stream',
    'web-streams-ponyfill',
    'web-streams-node',
  ].reduce((acc, moduleName) => {
    acc[moduleName] = path.join(__dirname, 'require-empty.js');
    return acc;
  }, {});

// These packages are replaced with alternatives that are smaller and/or
// faster.
  const aliasToSubs = {
    uuid: path.resolve(__dirname, '..', 'packages', 'uuid'),
    immutable: path.resolve(__dirname, '..', 'packages', 'immutable'),
  };

// These modules are dependencies of both this configuration of Comunica
// and quadstore itself. We don't need to bundle them as they are always
// available when using this package within quadstore.
// These should show up in our `peerDependencies`.
  const externals = [
    'asynciterator',
  ].reduce((acc, moduleName) => {
    acc[moduleName] = `${externalsType} ${moduleName}`;
    return acc;
  }, {});

// Webpack configuration
  return {
    mode: 'production',
    entry: './src/index.js',
    target: 'web',
    output: {
      chunkFormat: false,
    },
    optimization: {
      minimize: false,
      moduleIds: 'named',
      usedExports: true,
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
        ...aliasToEmpty,
        ...aliasToSubs,

        // For some reason, two identical copies of sparqljs are ending up in the
        // bundle, one imported by Comunica itself and the other imported by
        // sparqlalgebrajs . This forces Webpack to resolve sparqljs to the same
        // package.
        sparqljs: path.resolve(__dirname, 'node_modules', 'sparqljs'),
        sparqlalgebrajs: path.resolve(__dirname, 'node_modules', 'sparqlalgebrajs'),

        // For some reason, two identical copies of rdf-data-factory are ending
        // up in the bundle. This forces Webpack to resolve them to the same
        // package.
        'rdf-data-factory': path.resolve(__dirname, '..', 'node_modules', 'rdf-data-factory'),
      },
    },
    externals,
  };
};

module.exports.buildBaseConf = buildBaseConf;
