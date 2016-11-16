var gulp = require('gulp');
var gopen = require('gulp-open');
var appConfig = require('../../../config/app.json');

gulp.task('open-index', function(){
  var gopenConfig = {
    uri: 'http://' + appConfig.dev.ip + ':' + appConfig.dev.port
  };

  return gulp.src('www/index.html')
    .pipe(gopen(gopenConfig));
});
