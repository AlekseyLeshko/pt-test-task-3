var gulp = require('gulp');
var appConfig = require('../../../config/app.json');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');

gulp.task('sass', function() {
  var config = {
    keepSpecialComments: 0
  };

  return gulp.src('app/**/*/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS(config))
    .pipe(concat(appConfig.appCss))
    .pipe(gulp.dest('www/css/'));
});

