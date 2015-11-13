var gulp = require('gulp');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');

requireDir('./tasks');

gulp.task('setup', function() {
  return runSequence('bower', 'preen');
});

gulp.task('build', function(done) {
  return runSequence(
    'delete-build',
    'bower_copy',
    [
      'mkdir:static',
      'symlink:static',
      'jsx',
      'stylus'
    ],
    done
  )
})

gulp.task('dev', function(done) {
  gulp.watch('./stylesheets/*.styl', ['stylus']);
  gulp.watch('./app/**/*.jsx', ['jsx']);

  return runSequence(
    'delete-build',
    'bower_copy',
    [
      'mkdir:static',
      'symlink:static',
      'jsx',
      'stylus'
    ]
  )
})
