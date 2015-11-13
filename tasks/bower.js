var gulp = require('gulp');
var bower = require('gulp-bower');
var flatten = require('gulp-flatten');
var preen = require('preen');

gulp.task('bower', function() {
  return bower();
});

gulp.task('preen', function(cb) {
  return preen.preen({}, cb);
});

gulp.task('bower_copy', function() {
  gulp.src('./bower_components/**/*.js').pipe(flatten()).pipe(gulp.dest('./build/vendor/js/'));
  gulp.src('./bower_components/**/*.map').pipe(flatten()).pipe(gulp.dest('./build/vendor/js/'));
  gulp.src('./bower_components/**/*.css').pipe(flatten()).pipe(gulp.dest('./build/vendor/css/'));
  gulp.src('./bower_components/semantic/dist/themes/default/assets/fonts/**')
    .pipe(flatten())
    .pipe(gulp.dest('./build/vendor/css/themes/default/assets/fonts/'));

  return gulp.src('./bower_components/semantic/dist/themes/default/assets/images/**')
    .pipe(flatten())
    .pipe(gulp.dest('./build/vendor/css/themes/default/assets/images/'));
});
