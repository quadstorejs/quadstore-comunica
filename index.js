
(() => {

  const isNode = typeof process !== 'undefined'
    && process.versions != null
    && process.versions.node != null;

  // The Webpack bundle of this package is build using the "target: browser"
  // option (see webpack.config.js). This leads some packages to assume the
  // availability of the Web Crypto API through the global "crypto" object.
  // As we don't have that in Node.js but usage seems to be limited to the
  // crypto.getRandomValues() method, we use Node.js' own crypto module to
  // create a polyfill.

  if (isNode && typeof crypto === 'undefined') {

    // Concealing the require() invocation through eval() tricks Webpack
    // into ignoring it.
    const crypto = eval('require(\'crypto\')');

    global.crypto = {};

    global.crypto.getRandomValues = (array) => {
      crypto.randomFillSync(array);
      return array;
    };

  }

})();

exports.newEngine = () => {
  return require('./engine.js');
};
