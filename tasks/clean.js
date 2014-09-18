var del = require('del');

var c = require('./config');

module.exports = function (prod) {
  return function (fn) {
    del(c.TARGET_FOLDER, fn);
  };
};
