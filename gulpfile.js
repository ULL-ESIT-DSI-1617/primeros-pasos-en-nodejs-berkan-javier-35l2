var gulp = require('gulp');
var shell = require('shelljs');
var ghPages = require('gulp-gh-pages');

gulp.task('build',function(){
    require('./scripts/generate-gitbook.js');
    require('./scripts/generate-wiki.js');
});

gulp.task('deploy',function(){
    return gulp.src('./gh-pages/**/*')
        .pipe(ghPages());
});

gulp.task('serve', function(){
    shell.exec("gitbook serve txt");
});

gulp.task('default',[]);