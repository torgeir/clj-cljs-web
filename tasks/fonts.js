var gulp = require('gulp');

var c = require('./config');

module.exports = function () {
  return function () {
    return gulp.src(c.FOLDER_FONTS)
      .pipe(gulp.dest(c.target(c.TARGET_FOLDER_FONTS)));
  };
};
