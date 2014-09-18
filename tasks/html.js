var embedlr    = require('gulp-embedlr'),
    path       = require('path'),
    gulp       = require('gulp'),
    gulpif     = require('gulp-if'),
    handlebars = require('gulp-compile-handlebars'),
    minhtml    = require('gulp-htmlmin');

var c = require('./config');

module.exports = function (minify) {

  return function () {

    var manifest;

    if (minify) {
      manifest = require(path.join('..', c.target("rev-manifest.json")));
      for (var key in manifest) {
        // replace full path in key, so only app.js and app.css are left
        var newkey = key.replace(/.*\//, "");
        manifest[newkey] = manifest[key];
        delete manifest[key];
      }
    }

    var templateData = c.FILES_REV.reduce(function (acc, conf) {
      acc[conf.name] = minify ? manifest[conf.targetFile] : conf.entryPath;
      return acc;
    }, {});

    return gulp.src(c.PATH_INDEX)
      .pipe(gulpif(!minify, embedlr()))
      .pipe(handlebars(templateData))
      .pipe(gulpif(minify, minhtml({
        // https://github.com/jonschlinkert/gulp-htmlmin
        collapseWhitespace: true,
        removeComments: true,
        minifyCSS: true,
        minifyJS: true,
      })))
      .pipe(gulp.dest(c.target()));
    };
};

module.exports.deps = ['rev'];
