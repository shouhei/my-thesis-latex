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
    exec('./bin/mklatex',
         {timeout: 10000},
         function (err, stdout, stderr) {
             var status = "";
             var sound = false;
             if (err !== null) {
                 console.log('exec error: ' + err);
                 console.log(stderr);
                 status = 'failed';
                 sound = "Basso";
             } else {
                 console.log(stdout)
                 status = 'success';
             }
             notifier.notify({
                 title: 'gulp tex build',
                 message: status,
                 sound: sound,
                 wait: true
             }, function (err, response) {
             });

         });
});
