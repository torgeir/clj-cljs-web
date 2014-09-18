var notify = require('gulp-notify');

var c = exports;

// fonts
c.FOLDER_FONTS            = './node_modules/font-awesome/fonts/*';
c.TARGET_FOLDER_FONTS     = './target/classes/public/fonts';
c.TARGET_FOLDER_ALL_FONTS = './target/classes/public/fonts/**';

// images
c.FOLDER_IMAGES            = './resources/images';
c.FILES_IMAGES             = './resources/images/**';
c.TARGET_FOLDER_IMAGES     = './target/classes/public/images';
c.TARGET_FOLDER_ALL_IMAGES = './target/classes/public/images/**';

// less
c.FOLDER_LESS           = './resources/less';
c.FILES_LESS            = './resources/less/**';
c.PATH_LESS_ENTRY       = './resources/less/app.less';
c.TARGET_FILE_CSS       = 'app.css';
c.TARGET_FOLDER_CSS     = './target/classes/public/css';
c.TARGET_PATH_CSS       = './target/classes/public/css/app.css';
c.TARGET_FOLDER_ALL_CSS = './target/classes/public/css/**';

// js
c.FOLDER_JS            = './resources/js';
c.FILES_JS             = './resources/js/**';
c.PATH_JS_ENTRY        = './resources/js/some-lib.js';
c.TARGET_FILE_JS       = 'some-lib.js';
c.TARGET_FOLDER_JS     = './target/classes/public/js';
c.TARGET_PATH_JS       = './target/classes/public/js/some-lib.js';
c.TARGET_FOLDER_ALL_JS = './target/classes/public/js/**';

// index file
c.PATH_INDEX          = "./resources/html/index.html";

c.TARGET_FOLDER = "./target/classes/public";

// rev
c.FILES_REV = [
  { name: "appCss",   entryPath: c.TARGET_PATH_CSS, targetFile: c.TARGET_FILE_CSS },
  { name: "appLibJs", entryPath: c.TARGET_PATH_JS,  targetFile: c.TARGET_FILE_JS },
  { name: "appCljs",  entryPath: "./target/classes/public/cljs/app.js", targetFile: "app.js" }
];

c.TARGET_FOLDER_ALL = [
  c.TARGET_FOLDER_ALL_CSS,
  c.TARGET_FOLDER_ALL_FONTS,
  c.TARGET_FOLDER_ALL_IMAGES,
  c.TARGET_FOLDER_ALL_JS
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
