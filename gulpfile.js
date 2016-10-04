var gulp = require('gulp');
var cachebust = require('.');

gulp.task('css', function () {
    return gulp.src('./test/src/css/*')
        .pipe(gulp.dest('./test/build/css/'));
});

gulp.task('html', ['css'], function () {
    return gulp.src('./test/src/index.html')
        .pipe(cachebust())
        .pipe(gulp.dest('./test/build/'));
});
