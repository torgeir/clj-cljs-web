var fs   = require('fs'),
    gulp = require('gulp');

var isProduction = (process.env.NODE_ENV === 'production');

var tasks = fs.readdirSync('./tasks');

tasks.forEach(function (filename) {
  var task = filename.replace('.js', '');
  if (task === 'config') return;

  gulp.task(task, require('./tasks/' + filename)(isProduction));
});
