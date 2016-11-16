var gulp = require('gulp');
var appConfig = require('../../../config/app.json');

gulp.task('css', function() {
  return gulp.src(appConfig.css)
    .pipe(gulp.dest('www/css'));
});


