var notify = require('gulp-notify'),
    path   = require('path');

var c = exports;
c.all = allFiles;
c.target = targetFolder;

c.TARGET_FOLDER = "./target/classes/public";

// fonts
c.FOLDER_FONTS        = './node_modules/font-awesome/fonts/*';
c.TARGET_FOLDER_FONTS = 'fonts';

// images
c.FOLDER_IMAGES        = './resources/images';
c.TARGET_FOLDER_IMAGES = 'images';

// less
c.FOLDER_LESS       = './resources/less';
c.PATH_LESS_ENTRY   = './resources/less/app.less';
c.TARGET_FILE_CSS   = 'app.css';
c.TARGET_PATH_CSS   = 'css/app.css';
c.TARGET_FOLDER_CSS = 'css';

// js
c.FOLDER_JS        = './resources/js';
c.PATH_JS_ENTRY    = './resources/js/lib.js';
c.TARGET_FILE_JS   = 'lib.js';
c.TARGET_PATH_JS   = 'js/lib.js';
c.TARGET_FOLDER_JS = 'js';

// index file
c.PATH_INDEX = "./resources/html/index.html";

// tests
c.FOLDER_TESTS = './resources/js/tests';

// rev
c.FILES_REV = [
  { name: "appCss",   entryPath: c.TARGET_PATH_CSS,            targetFile: c.TARGET_FILE_CSS },
  { name: "appLibJs", entryPath: c.TARGET_PATH_JS,             targetFile: c.TARGET_FILE_JS },
  { name: "appCljs",  entryPath: path.join("cljs", "app.js"),  targetFile: "app.js" }
];

c.TARGET_FOLDER_ALL = [
    c.TARGET_FOLDER_CSS,
    c.TARGET_FOLDER_FONTS,
    c.TARGET_FOLDER_IMAGES,
    c.TARGET_FOLDER_JS
  ]
  .map(targetFolder)
  .map(function (folder) {
    return path.join(folder, "**");
  });

c.notify = function (title, message) {
  return notify({ title: title, message: message });
};

c.notifyError = function notifyError (description) {
  return function () {
    var args = [].slice.call(arguments);
    notify.onError({
      title: description + " error",
      message: "<%= error.message %>"
    }).apply(this, args);
    this.emit('end'); // Keep gulp from hanging on this task
  };
};

function allFiles (folder) {
  return path.join(folder, '**');
}

function targetFolder (folder) {
  var root = c.TARGET_FOLDER;
  if (folder) {
    return path.join(root, folder);
  }
  return root;
}
