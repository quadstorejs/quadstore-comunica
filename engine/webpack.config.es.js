
const path = require('path');
const baseConf = require('./webpack.config.base').buildBaseConf('module');

module.exports = {
  ...baseConf,
  output: {
    ...baseConf.output,
    path: path.resolve(__dirname, 'dist', 'esm'),
    filename: 'bundle.js',
    libraryTarget: 'module',
  },
  experiments: {
    outputModule: true,
  },
};

