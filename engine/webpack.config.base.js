
const path = require('path');

/**
 *
 * @param {'module' | 'commonjs2'} externalsType
 */
const buildBaseConf = (externalsType) => {
  // These packages are required by other modules but their exports are never
// used. We trick webpack into resolving them to a local empty module.
  const aliasToEmpty = [
    '@bergos/jsonparse',
    '@comunica/bus-http',
    '@rubensworks/saxes',
    '@smessie/readable-web-to-node-stream',
    'buffer',
    'cross-fetch',
    'fetch-sparql-endpoint',
    'n3',
    'process',
    'promise-polyfill',
    'readable-stream',
    'readable-web-to-node-stream',
    'safe-buffer',
    'stream',
    'web-streams-node',
    'web-streams-ponyfill'
  ].reduce((acc, moduleName) => {
    acc[moduleName] = path.join(__dirname, 'require-empty.js');
    return acc;
  }, {});

// These packages are replaced with alternatives that are smaller and/or
// faster.
  const aliasToSubs = {
    'readable-stream': path.join(__dirname, 'require-readable-stream.js'),
    uuid: path.resolve(__dirname, '..', 'packages', 'uuid'),
    immutable: path.resolve(__dirname, '..', 'packages', 'immutable'),
  };

  const externals = [
    // These modules are dependencies that quadstore-comunica shares with
    // quadstore. We don't need to bundle them and we consider them peer
    // dependencies.
    'asynciterator',
    // These modules are dependecies of quadstore-comunica but they are also
    // directly used by other packages depending on quadstore-comunica. We
    // keep them outside the bundle to decrease chances of duplication. These
    // should show up in our standard dependencies.
    'sparqljs',
    'sparqlalgebrajs',
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
