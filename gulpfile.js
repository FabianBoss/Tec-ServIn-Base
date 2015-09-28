'use strict'

var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass');

gulp.task('compileJade', function() {
  gulp.src('src/index.jade')
  .pipe(jade({pretty: true}))
  .pipe(gulp.dest('dist/'))
});
