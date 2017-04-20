'use strict';
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    nib = require('nib'),
    nodemon = require('gulp-nodemon'),
    connect = require('gulp-connect');

// Servidor web de desarrollo
gulp.task('connect', function () {
  connect.server({
    root:'public',
    port: 8000,
    livereload: true
  });
  nodemon();
})

// Preprocesador sass
gulp.task('css', function () {
  gulp.src('./public/css/sass/generalStyles.scss')
    .pipe(sass({ use: nib() }))
    .pipe(gulp.dest('./css'))
    .pipe(connect.reload())

  gulp.src('./public/css/*.css')
    .pipe(connect.reload())
})
gulp.task('html', function () {
    gulp.src('./public/components/**/*.html')
    .pipe(connect.reload())
})
gulp.task('js', function () {
  gulp.src('./public/components/**/*.html')
    .pipe(connect.reload())
})


// Vigila cambios que se produzcan en el código
// y lanza las tareas relacionadas
gulp.task('watch', function () {
  gulp.watch([
    './public/css/sass/**/*.scss',
    './public/css/*.css'
  ], ['css']);

  gulp.watch([
    './public/*.js',
    './public/components/*.js',
    './public/components/**/*.js',
    './public/components/**/**/*.js',    
  ], ['js']);

  gulp.watch([
    './public/*.html',
    './public/components/*.html',
    './public/components/**/*.html',
    './public/components/**/**/*.html'    
  ], ['html']);
})

gulp.task('serve', ['connect','css','html','js','watch'])




