var gulp = require('gulp');
var exec = require('child_process').exec;
var notifier = require('node-notifier');

gulp.task('tex', function(){
    gulp.watch(['./src/**/*.tex'], ['build']);
    gulp.watch(['./src/**/*.bib'], ['build']);
    gulp.watch(['./src/**/*.png'], ['build']);
    gulp.watch(['./src/**/*.jpg'], ['build']);
});
gulp.task('build', function(){
  exec('./bin/mklatex', function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      notifier.notify({
          title: 'gulp tex build',
          message: 'success',
          sound: true,
          wait: true
      }, function (err, response) {
      });
  });
});
