var gulpif     = require('gulp-if'),
    less       = require('gulp-less'),
    mincss     = require('gulp-minify-css'),
    notify     = require('gulp-notify'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefix = require('gulp-autoprefixer'),
    gulp       = require('gulp'),
    concat     = require('gulp-concat');

var config = require('./config');

module.exports = function (minify) {

  return function () {
    return gulp.src(config.PATH_LESS_ENTRY)
      .pipe(gulpif(!minify, sourcemaps.init()))
      .pipe(gulpif(minify, less(), less().on('error', config.handleErrors('Less'))))
      .pipe(autoprefix('last 1 versions'))
      .pipe(gulpif(!minify, sourcemaps.write({ sourceRoot: '../' + config.FOLDER_LESS })))
      .pipe(gulpif(minify, mincss({
        // https://github.com/jonathanepollack/gulp-minify-css
        noRebase: true,
        noAdvanced: true,
        compatibility: true
      })))
      .pipe(gulp.dest(config.TARGET_FOLDER_CSS))
      .pipe(gulpif(!minify, notify({ title: "Less", message: 'reloaded' })));
  };
};
