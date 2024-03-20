
const { AsyncIterator } = require('asynciterator');

module.exports.Readable = function () {
  return new AsyncIterator();
}
