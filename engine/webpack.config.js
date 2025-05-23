
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src', 'index.cjs'),
  target: 'web',
  output: {
    chunkFormat: false,
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'module',
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
        loader: 'json-loader'
      },
    ],
  },
  resolve: {
    alias: {
      uuid: path.resolve(__dirname, '..', 'packages', 'uuid'),
      immutable: path.resolve(__dirname, '..', 'packages', 'immutable'),
    },
  },
  externals: {
    asynciterator: 'module asynciterator',
    sparqljs: 'module sparqljs',
    sparqlalgebrajs: 'module sparqlalgebrajs'
  },
  experiments: {
    outputModule: true,
  },
}

export default config;
