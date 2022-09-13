
// The Webpack bundle of this package is built using the "target: browser"
// option (see webpack.config.js). This leads some packages to assume the
// availability of the Web Crypto API through the global "crypto" object.
// As we don't have that in Node.js but usage seems to be limited to the
// crypto.getRandomValues() method, we use Node.js' own crypto module to
// create a polyfill.

const isNode = typeof process !== 'undefined'
  && process.versions != null
  && process.versions.node != null;

const polyfillCrypto = ({ randomFillSync }) => {
  global.crypto = {};
  global.crypto.getRandomValues = (arr) => {
    randomFillSync(arr);
    return arr;
  };
};

if (isNode && typeof crypto === 'undefined') {

  if (eval('typeof require === \'function\'')) {

    // require() is wrapped into a Function() so that it is ignored by webpack.
    polyfillCrypto(eval('require(\'crypto\');'));

  } else {

    // import() is wrapped into a Function() so that it is ignored by webpack.
    eval('import(\'crypto\');').then(polyfillCrypto).catch((err) => {
      console.error(err);
      process.exit(1);
    });

  }

}
