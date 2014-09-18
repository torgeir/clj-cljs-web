var embedlr    = require('gulp-embedlr'),
    gulp       = require('gulp'),
    gulpif     = require('gulp-if'),
    handlebars = require('gulp-compile-handlebars'),
    minhtml    = require('gulp-htmlmin');

var config = require('./config');

module.exports = function (minify) {

  return function () {
    var manifest;

    manifest = require("." + config.TARGET_FOLDER + "/rev-manifest.json");
    for (var key in manifest) {
      // replace full path in key, so only app.js and app.css are left
      var newkey = key.replace(/.*\//, "");
      manifest[newkey] = manifest[key];
      delete manifest[key];
    }

    var templateData = config.FILES_REV.reduce(function (acc, conf) {
      acc[conf.name] = minify ? manifest[conf.targetFile] : conf.entryPath.replace(config.TARGET_FOLDER + "/", "");
      return acc;
    }, {});

    return gulp.src(config.PATH_INDEX)
      .pipe(gulpif(!minify, embedlr()))
      .pipe(handlebars(templateData))
      .pipe(gulpif(minify, minhtml({
        // https://github.com/jonschlinkert/gulp-htmlmin
        collapseWhitespace: true,
        removeComments: true,
        minifyCSS: true,
        minifyJS: true,
      })))
      .pipe(gulp.dest(config.TARGET_FOLDER));
    };
};

module.exports.deps = ['rev'];
