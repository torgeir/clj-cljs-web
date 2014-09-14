var notify = require('gulp-notify');

var c = exports;

// less
c.PATH_LESS_ENTRY   = 'resources/less/app.less';
c.FOLDER_LESS       = 'resources/less';
c.TARGET_FILE_CSS   = 'app.css';
c.TARGET_FOLDER_CSS = 'target/classes/public/css';
c.TARGET_PATH_CSS   = 'target/classes/public/css/app.css';

c.TARGET_FOLDER_ALL = [
  c.TARGET_FOLDER_CSS
];

c.handleErrors = function handleErrors (description) {
  return function () {
    var args = Array.prototype.slice.call(arguments);
    notify.onError({
      title: description + " error",
      message: "<%= error.message %>"
    }).apply(this, args);
    this.emit('end'); // Keep gulp from hanging on this task
  };
};
