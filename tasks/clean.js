var del = require('del');

var config = require('./config');

module.exports = function (prod) {
  return function (fn) {
    del(config.TARGET_FOLDER_ALL, fn);
  };
};
