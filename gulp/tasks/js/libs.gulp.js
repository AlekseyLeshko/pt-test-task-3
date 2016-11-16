var gulp = require('gulp');
var appConfig = require('../../../config/app.json');

gulp.task('libs', function() {
  return gulp.src(appConfig.scripts)
    .pipe(gulp.dest('www/js/lib'));
});

