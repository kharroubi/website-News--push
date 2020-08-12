// Gulpfile
var gulp                   = require('gulp'),
    sass                   = require('gulp-sass'),
    changed                = require('gulp-changed'),
    autoprefixer           = require('gulp-autoprefixer'),
    rename                 = require('gulp-rename'),
    del                    = require('del'),
    concat                 = require('gulp-concat'),
    cssnano                = require('gulp-cssnano'),
    uglify                 = require('gulp-uglifyjs'),
    cache                  = require('gulp-cache'),
    sourcemaps             = require('gulp-sourcemaps'),
    browserSync            = require('browser-sync').create();

// Compile SASS files into CSS
gulp.task('sass', function () {

 // Theme
 gulp.src([
   './scss/**/*.scss'
  ])
  .pipe(sourcemaps.init())
    .pipe(changed('.css/'))
    .pipe(sass({ outputStyle: 'expanded' }))
    .on('error', sass.logError)
    .pipe(autoprefixer([
        "last 1 major version",
        ">= 1%",
        "Chrome >= 45",
        "Firefox >= 38",
        "Edge >= 12",
        "Explorer >= 10",
        "iOS >= 9",
        "Safari >= 9",
        "Android >= 4.4",
        "Opera >= 30"], { cascade: true }))
  .pipe(sourcemaps.write(''))
  .pipe(gulp.dest('./css/'))
  .pipe(browserSync.stream());
});

// BrowserSync 
gulp.task('serve', function() {
  browserSync.init({
    files: "./*.html",
    startPath: "./demo/",
    server: {
      baseDir: "./",
    },
  })
});

// Gulp Watch and Tasks
gulp.task('watch', function() {
  gulp.watch('./scss/**/*.scss', ['sass']);
  gulp.watch('./demo/*.html').on('change', browserSync.reload);
});

// Gulp Tasks
gulp.task('default', ['watch', 'sass', 'serve'])


// CSS Customizer plugin minifier
gulp.task('minCUSTOMIZER', function() {
  return gulp.src([
    './css/bootstrap-customizer.css',
  ])
  .pipe(sourcemaps.init())
    .pipe(cssnano())
    .pipe(concat('bootstrap-customizer.min.css'))
  .pipe(sourcemaps.write(''))
  .pipe(gulp.dest('./css/'));
});

// JavaSript Customizer plugin minifier
gulp.task('minJSCUSTOMIZER', function() {
  return gulp.src([
    './js/bootstrap-customizer.js',
  ])
  .pipe(concat('bootstrap-customizer.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./js/'));
});

// Copy File from vendor (if not use cdn)
gulp.task('copyVENDOR', function() {
  gulp.src([
    './node_modules/*bootstrap/**/*',
    './node_modules/*jquery/**/*',
    './node_modules/*popper.js/**/*',
  ])
  .pipe(gulp.dest('./demo/vendor/'))
});

gulp.task('dist', ['copyVENDOR','minCUSTOMIZER', 'minJSCUSTOMIZER']);