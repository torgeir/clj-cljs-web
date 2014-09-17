var gulp = require('gulp');
var debug = require('gulp-debug');

var config = require('./config');

module.exports = function () {
  return function () {
    return gulp.src(config.FOLDER_FONTS)
      .pipe(gulp.dest(config.TARGET_FOLDER_FONTS));
  };
};
