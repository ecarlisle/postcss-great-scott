var gulp       = require('gulp');
var postcss    = require('gulp-postcss');
var cssnext    = require('postcss-cssnext');
var precss     = require('precss');
var utils      = require('postcss-utils');

var format     = require("./src/js/postcss-format-standards.js")

var processors = [
  format({
    dashed: true,
    lowercase: true
  }),
  cssnext,
  precss,
  utils
];

gulp.task('css', function () {

  return gulp.src('./src/css/main.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('build/css'));

});

gulp.task('watch', function () {
  gulp.watch('src/css/**/*.css', ['css']);
});


gulp.task('default', ['css','watch']);