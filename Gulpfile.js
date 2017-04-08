'use strict';
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    nib = require('nib'),
    nodemon = require('gulp-nodemon'),
    connect = require('gulp-connect');

// Servidor web de desarrollo
gulp.task('connect', function () {
  connect.server({
    port: 8000,
    livereload: true
  })
})

// Preprocesador sass
gulp.task('css', function () {
  gulp.src('./css/sass/generalStyles.scss')
    .pipe(sass({ use: nib() }))
    .pipe(gulp.dest('./css'))
    .pipe(connect.reload())
})
gulp.task('html', function () {
    gulp.src('./components/**/*.html')
    .pipe(connect.reload())
})
gulp.task('js', function () {
  gulp.src('./components/**/*.html')
    .pipe(connect.reload())
})
gulp.task('nodemon', function () {
  nodemon({
    script: 'server.js'
  })
})

// Vigila cambios que se produzcan en el código
// y lanza las tareas relacionadas
gulp.task('watch', function () {
  gulp.watch(['./css/sass/**/*.scss'], ['css']);

  gulp.watch([
    './components/**/*.js',
    './components/**/*.js',
    './*.js'
  ], ['js']);

  gulp.watch([
    './components/**/*.html',
    './*.html'
  ], ['html']);

})

gulp.task('serve', ['connect','css','html','js','watch','nodemon'])


