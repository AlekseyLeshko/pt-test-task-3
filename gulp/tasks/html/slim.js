var gulp = require('gulp');
var slim = require('gulp-slim');
var htmlmin = require('gulp-htmlmin');
var rename = require('gulp-rename');

gulp.task('slim', function() {
  var slimConfig = {
    pretty: true
  };

  var minifyConfig = {
    empty: true,
    spare: true
  };

  return gulp.src('app/**/*.slim')
    .pipe(slim(slimConfig))
    // .pipe(htmlmin(minifyConfig))
    .pipe(rename(function (path) {
      path.dirname = '';
      if (path.basename !== 'index') {
        path.dirname = 'views/';
      }
    }))
    .pipe(gulp.dest('www/'));
});
