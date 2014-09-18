var gulp     = require('gulp'),
    cache    = require('gulp-cache'),
    imagemin = require('gulp-imagemin');

var c = require('./config');

module.exports = function () {
  return function () {
    return gulp.src(c.FILES_IMAGES)
      .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
      .pipe(gulp.dest(c.target(c.TARGET_FOLDER_IMAGES)));
  };
};
