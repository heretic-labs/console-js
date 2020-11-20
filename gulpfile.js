var gulp = require("gulp");
var clean = require('gulp-clean');
var minify = require('gulp-minify');
var concat = require('gulp-concat');

gulp.task('clean', function () {
    return gulp.src('dist', { read: false, allowEmpty: true }).pipe(clean());
});

gulp.task('js', function () {
    return gulp.src(["src/*.js"], { "allowEmpty": true })
        .pipe(concat("is.js"))
        .pipe(minify())
        .pipe(gulp.dest("dist"))
        ;
});

gulp.task('js:watch', function () {
    gulp.watch('src/**/*.js', gulp.series('js'));
});

gulp.task("default", gulp.series(
    'clean',
    gulp.parallel('js'),
    gulp.parallel('js:watch')
));