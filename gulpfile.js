'use strict';

var gulp = require('gulp');
var choose = require('./');

gulp.task('default', function() {
  return gulp.src('fixtures/*.txt')
    .pipe(choose({choices: 'b.txt'}))
    .pipe(gulp.dest('actual'));
});
