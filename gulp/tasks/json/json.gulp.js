var gulp = require('gulp');

gulp.task('json', function() {
  return gulp.src('app/books/**/*.json')
    .pipe(gulp.dest('www/books'));
});


