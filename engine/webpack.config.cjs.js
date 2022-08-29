
const path = require('path');
const baseConf = require('./webpack.config.base').buildBaseConf('commonjs2');

module.exports = {
  ...baseConf,
  output: {
    ...baseConf.output,
    path: path.resolve(__dirname, 'dist', 'cjs'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2',
  },
};
