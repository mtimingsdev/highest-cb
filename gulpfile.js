const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');
const concat = require('gulp-concat');
const minifyCSS = require('gulp-minify-css');
const autoprefixer = require('gulp-autoprefixer');
var order = require('gulp-order');

gulp.task('styles', () => {
    return gulp.src('scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('minifycss', function(){
    return gulp.src('css/**/*.css')
        .pipe(order([
            'css/reset.css',
            'css/main.css'
        ], { base: __dirname }))
        .pipe(minifyCSS())
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(gulp.dest('css'));
});

gulp.task('clean', () => {
    return del([
        'css/main.css',
        'css/style.min.css'
    ]);
});

gulp.task('watch', () => {
    gulp.watch('sass/**/*.scss', (done) => {
        gulp.series(['clean', 'styles', 'minifycss'])(done);
    });
});

gulp.task('default', gulp.series(['clean', 'styles', 'minifycss']));