var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function(callback) {
  var taskList = [
    'slim', 'scripts'
  ];

  return runSequence('clean', taskList, callback);
});