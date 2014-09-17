var gulp = require('gulp');

var config = require('./config');

module.exports = function () {
  return function () {
    gulp.watch(config.FILES_LESS,  ['less']);
  };
};

module.exports.deps = ['less', 'fonts'];
