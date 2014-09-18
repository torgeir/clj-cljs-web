var gulp       = require('gulp'),
    buffer     = require('vinyl-buffer'),
    browserify = require('browserify'),
    es6ify     = require('es6ify'),
    gulp       = require('gulp'),
    gulpif     = require('gulp-if'),
    notify     = require('gulp-notify'),
    source     = require('vinyl-source-stream'),
    uglify     = require('gulp-uglify'),
    watchify   = require('watchify');

var config = require("./config");

var watch = process.env.GULP_IS_WATCH;

module.exports = function scripts (minify) {

  return function () {

    es6ify.traceurOverrides = {
      experimental: true,
      blockBinding: true,
      asyncFunctions: true
    };

    var bundler = browserify(es6ify.runtime, {
      debug: !minify, // source maps
      cache: {},
      packageCache: {},
      fullPaths: watch
    });

    if (watch) {
      bundler = watchify(bundler);
    }

    bundler
      // https://github.com/sebastiandeutsch/es6ify-test/blob/master/browserify.js
      .add(config.PATH_JS_ENTRY)
      .transform(es6ify.configure(/^(?!.*node_modules)+.+\.js$/))
      .on('update', rebundle);

    return rebundle();

    function rebundle () {
      var stream = bundler.bundle();
      return gulpif(minify, stream, stream.on('error', config.handleErrors('Browserify')))
        .pipe(source(config.TARGET_FILE_JS))
        .pipe(buffer())
        .pipe(gulpif(minify, uglify()))
        .pipe(gulp.dest(config.TARGET_FOLDER_JS))
        .pipe(gulpif(watch, notify({ title: "Browserify", message: 'reloaded' })));
    }
  };
};

