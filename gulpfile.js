var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('tex', function(){
  gulp.watch('./src/**/*.tex', ['build']);
});
gulp.task('build', function(){
  exec('./bin/mklatex', function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
  });
});
