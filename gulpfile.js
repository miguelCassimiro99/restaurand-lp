const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

gulp.task('sass', () => {
  return gulp.src('src/assets/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('html', () => {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.parallel('sass', 'html'));
