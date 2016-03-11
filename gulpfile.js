/**
 * Gulp Packages
 */

// General
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');
var rename = require('gulp-rename');
var notify = require('gulp-notify');

// Sass
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');

// JS
//var jshint = require('gulp-jshint');
//var stylish = require('jshint-stylish');
//var concat = require('gulp-concat');
//var uglify = require('gulp-uglify');


/**
 * Paths to project folders
 */
var build = {
  input: 'src/',
  output: 'dist/',
};

var paths = {
  styles: {
    input: build.input + 'scss/**/*.{scss,sass}',
    output: build.output + 'css/'
  },
  scripts: {
    input: build.input + '/**/*.js',
    output: build.output + 'js/'
  }
};


/**
 * Gulp Tasks
 */
// Error Handling
var onError = function (err) {
  gutil.beep();
  console.log(err);
  this.emit('end');
};

// Process, lint, prefix & minify Sass files
gulp.task('sass', function() {
  return gulp.src(paths.styles.input)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(sass({
      outputStyle: 'expanded',
      sourceComments: false,
      precision: 8
    }))
    .pipe(prefix({
      browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']
    }))
    .pipe(gulp.dest(paths.styles.output))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minify({ compatibility: 'ie8' }))
    .pipe(gulp.dest(paths.styles.output))
    .pipe(notify({ message: 'Styles task complete' }));
});

// Lint, minify & concatenate scripts
gulp.task('js', function() {
  return gulp.src(paths.scripts.input)
    .pipe(plumber())
    .pipe(concat('main.js'))
    .pipe(header(banner.full, { package : package }))
    .pipe(gulp.dest(paths.scripts.output))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(header(banner.min, { package : package }))
    .pipe(gulp.dest(paths.scripts.output))
    .pipe(notify({ message: 'Scripts task complete' }))
    .pipe(connect.reload());
});


/**
 * Task Runners
 */

// Compile our Sass files
gulp.task('compile', [
  //'js',
  'sass'
]);

// Compile our Sass files before watching for further changes (our default task)
gulp.task('default', [
  'compile',
  'watch'
]);

// Watch for changes to our Sass files
gulp.task('watch', function() {
  gulp.watch(paths.styles.input, ['sass']);
  //gulp.watch(paths.scripts.input, ['js']);
});
