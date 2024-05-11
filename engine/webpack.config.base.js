
const path = require('path');

/**
 *
 * @param {'module' | 'commonjs2'} externalsType
 */
const buildBaseConf = (externalsType) => {

  // These packages are replaced with alternatives that are smaller and/or
  // faster.
  const alias = {
    // 'readable-stream': path.join(__dirname, 'require-readable-stream.js'),
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
      alias,
    },
    externals,
  };
};

module.exports.buildBaseConf = buildBaseConf;
