const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const fileInclude = require('gulp-file-include');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

const htmlPaths = ['src/*.html', 'src/components/*.html', 'src/sections/*.html']

function buildHTML() {
  return gulp
    .src(['src/*.html', 'src/components/**/*.html', 'src/sections/**/*.html'])
    .pipe(fileInclude({prefix: '@@', basepath: '@file'}))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
}

function compileSass() {
  return gulp
    .src('src/assets/sass/**/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
}

function copyScripts() {
  return gulp
    .src('src/scripts/**/**/*.js')
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    injectChanges: true,
    server: {
      baseDir: './dist'
    },
  })

  gulp.watch('src/assets/sass/**/*.scss', compileSass).on('change', browserSync.reload);
  gulp.watch(htmlPaths, buildHTML);
  gulp.watch('src/scripts/**/*.js', copyScripts);
}


gulp.task('default', gulp.series(gulp.parallel(buildHTML, compileSass, copyScripts), watch));
