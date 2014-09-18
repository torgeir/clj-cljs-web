var gulp = require('gulp'),
    cache       = require('gulp-cache'),
    imagemin    = require('gulp-imagemin');

var config = require('./config');

module.exports = function () {
  return function () {
    return gulp.src(config.FILES_IMAGES)
      .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
      .pipe(gulp.dest(config.TARGET_FOLDER_IMAGES));
  };
};
