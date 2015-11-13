var gulp = require('gulp');
var async = require('async');
var fs = require('fs-extra');
var glob = require('glob');
var mkdirp = require('mkdirp');
var path = require('path');

gulp.task('delete-build', function(done) {
  fs.remove('./build', done);
});

gulp.task('mkdir:static', function(done) {
  glob('./static/**/', function(err, paths) {
    async.each(paths, function(path, acb) {
      path = path.replace('./static', './build');
      mkdirp(path, function() {
        return acb();
      });
    }, done);
  });
});

gulp.task('symlink:static', function(done) {
  glob('./static/**', {nodir: true}, function(err, paths) {
    console.log(paths);
    async.each(paths, function(old_path, acb) {
      var new_path = old_path.replace('./static', './build');
      fs.symlink(path.resolve(old_path), path.resolve(new_path), acb);
    }, done);
  });
});
