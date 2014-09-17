var gulp = require('gulp');

var config = require('./config');

module.exports = function () {
  return function () {
    return gulp.src(config.FOLDER_FONTS)
      .pipe(gulp.dest(config.TARGET_FOLDER_FONTS));
  };
};
