var gulp = require('gulp');
var stylus = require('gulp-stylus');
var rename = require("gulp-rename");
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer-core');
var minifyCss = require('gulp-minify-css');

gulp.task('build-styles', function () {
  gulp.src('./src/calendar.styl')
    .pipe(stylus({
      compress: true,
      'include css': true
    }))
    .pipe(rename('calendar.css'))
    .pipe(postcss([ autoprefixer({ browsers: ['last 2 version'] }) ]))
    .pipe(minifyCss())
    .pipe(gulp.dest('./build/'));
});

gulp.task('watch-styles', function() {
  gulp.watch('./src/**/*.styl', ['build-styles']);
});

gulp.task('default', ['watch-styles']);
