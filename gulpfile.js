'use strict'

var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass');

gulp.task('transpileFiles', ["transpileSass"], function() {
  console.log('Transpilación Jade, Sass... ¡Satisfactoria!');
});

gulp.task('transpileJade', function() {
  return gulp.src('src/index.jade')
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('dist/'))
});

gulp.task('transpileSass', ['transpileJade'], function() {
  return gulp.src('src/scss/app.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css/'));
});
