var gulp = require('gulp');
var slim = require('gulp-slim');
var minifyHTML = require('gulp-minify-html');
var rename = require('gulp-rename');

gulp.task('slim-views', function() {
  var slimConfig = {
    pretty: true
  };

  var minifyConfig = {
    empty: true,
    spare: true
  };

  return gulp.src('app/**/*/*.slim')
    .pipe(slim(slimConfig))
    .pipe(minifyHTML(minifyConfig))
    .pipe(rename(function (path) {
      path.dirname = '';
      if (path.basename !== 'index') {
        path.dirname = 'views/';
      }
    }))
    .pipe(gulp.dest('www/'));
});
