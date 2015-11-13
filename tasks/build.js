var gulp = require('gulp');
var browserify = require('browserify');
var nib = require('nib');
var reactify = require('reactify');
var stylus = require('gulp-stylus');
var source = require('vinyl-source-stream');

gulp.task('jsx', function() {
  var b = browserify();
  b.transform(reactify);
  b.add('./app/index.js');
  return b.bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});

gulp.task('stylus', function() {
  return gulp.src('./stylesheets/*.styl')
    .pipe(stylus({use: nib()}))
    .pipe(gulp.dest('./build/css'));
})
