// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var browserSync = require('browser-sync').create();
// var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Lint Task
// gulp.task('lint', function() {
//     return gulp.src('src/js/plugins/*.js')
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'));
// });

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "dist/"
        }
    });
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

// Concatenate & Minify JS
gulp.task('js', function() {
    return gulp.src('src/js/*.js')
        .pipe(concat('js/all.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename('js/all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('src/js/*.js', ['lint', 'js']);
    gulp.watch('src/scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['browser-sync', 'sass', 'js', 'watch']);