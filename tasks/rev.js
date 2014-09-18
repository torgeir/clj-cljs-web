var gulp = require('gulp'),
    rev  = require('gulp-rev'),
    path = require('path');

var config = require('./config');

module.exports = function revisions (minify) {
  return function() {

    // if (!minify) {
    //   // Don't add hashes to files names if we're not minifying
    //   fn();
    //   return;
    // }

    var files = config.FILES_REV.map(function (conf) {
      return conf.entryPath;
    });

    return gulp.src(files, { base: path.join(process.cwd(), config.TARGET_FOLDER) })
      .pipe(rev())
      .pipe(gulp.dest(config.TARGET_FOLDER))
      .pipe(rev.manifest())
      .pipe(gulp.dest(config.TARGET_FOLDER));
  };
};

module.exports.deps = ['less', 'scripts'];
