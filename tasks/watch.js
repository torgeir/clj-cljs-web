var gulp       = require('gulp'),
    livereload = require('gulp-livereload');

var config = require('./config');

module.exports = function () {
  return function () {
    gulp.watch(config.FILES_LESS,   ['less']);
    gulp.watch(config.FILES_IMAGES, ['images']);
    gulp.watch(config.PATH_INDEX,   ['html']);
    livereload.listen();
    gulp.watch(config.TARGET_FOLDER_ALL).on('change', livereload.changed);
  };
};

module.exports.deps = ['fonts', 'images', 'html'];
