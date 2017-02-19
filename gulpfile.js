var gulp = require('gulp');
var shell = require('gulp-shell');
var ghPages = require('gulp-gh-pages');

gulp.task('build',function(){
    return gulp.src('')
        .pipe(shell(['./scripts/generate-gitbook']));
});

gulp.task('deploy',function(){
    return gulp.src('./txt/_book/**/*')
        .pipe(ghPages());
});