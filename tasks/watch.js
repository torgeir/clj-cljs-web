var gulp       = require('gulp'),
    livereload = require('gulp-livereload');

var c = require('./config');

module.exports = function () {
  return function () {
    gulp.watch(c.PATH_INDEX,   ['html']);
    gulp.watch(c.FILES_LESS,   ['less']);
    gulp.watch(c.FILES_IMAGES, ['images']);

    livereload.listen();
    gulp.watch(c.TARGET_FOLDER_ALL).on('change', livereload.changed);
  };
};

module.exports.deps = ['fonts', 'images', 'html'];
