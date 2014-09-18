module.exports = function (prod) {

  return function (fn) {

    var del = require('del');

    var c = require('./config');

    del(c.TARGET_FOLDER, fn);
  };
};
