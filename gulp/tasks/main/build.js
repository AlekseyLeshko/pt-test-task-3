var gulp = require('gulp');
var runSequence = require('run-sequence');
var bundleGulp = require('../util/bundleGulp');

gulp.task('build', function(callback) {
  var taskList = [
    'slim', 'scripts', 'bower-copy'
  ];

  return runSequence('clean', 'validate-configs', 'bower', taskList, callback);
});
