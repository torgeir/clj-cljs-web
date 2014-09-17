var notify = require('gulp-notify');

var c = exports;

// less
c.PATH_LESS_ENTRY   = 'resources/less/app.less';
c.FOLDER_LESS       = 'resources/less';
c.FILES_LESS        = 'resources/less/**';
c.TARGET_FILE_CSS   = 'app.css';
c.TARGET_FOLDER_CSS = 'target/classes/public/css';
c.TARGET_PATH_CSS   = 'target/classes/public/css/app.css';

// fonts
c.FOLDER_FONTS        = 'node_modules/font-awesome/fonts/*';
c.TARGET_FOLDER_FONTS = 'target/classes/public/fonts';

// images
c.FOLDER_IMAGES        = 'resources/images';
c.FILES_IMAGES         = 'resources/images/**';
c.TARGET_FOLDER_IMAGES = 'target/classes/public/images';

c.TARGET_FOLDER_ALL = [
  c.TARGET_FOLDER_CSS,
  c.TARGET_FOLDER_FONTS,
  c.TARGET_FOLDER_IMAGES,
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
