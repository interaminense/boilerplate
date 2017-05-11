const gulp = require('gulp');
const browserify = require('gulp-browserify');
const babelify = require('babelify');
const rename = require("gulp-rename");
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const minifyjs = require('gulp-js-minify')
const del = require('del');
const browserSync = require('browser-sync').create();
const runSequence = require('run-sequence');

const path = {
    dev: {
        root: 'src',
        css: 'scss',
        js: 'es6'
    },
    prod: {
        root: 'dist',
        css: 'css',
        js: 'js'
    }
}

gulp.task('sass', () => {
    return gulp.src(`${path.dev.root}/${path.dev.css}/app.scss`)
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename('app.min.css'))
        .pipe(gulp.dest(`${path.dev.root}/${path.prod.css}`))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task(`sass:${path.prod.root}`, () => {
    return gulp.src(`${path.dev.root}/${path.dev.css}/app.scss`)
        .pipe(sass())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename('app.min.css'))
        .pipe(gulp.dest(`${path.prod.root}/${path.prod.css}`))
});

gulp.task('babel', () => {
    return gulp.src(`${path.dev.root}/${path.dev.js}/app.js`)
        .pipe(browserify({
            transform: [babelify.configure({
                presets: ['env']
            })]
        }))
        .on('error', console.error.bind(console))
        .pipe(minifyjs())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest(`${path.dev.root}/${path.prod.js}`))
        .pipe(browserSync.reload({
            stream: true
        }))
});



gulp.task('babel:dist', () => {
    return gulp.src(`${path.dev.root}/${path.dev.js}/app.js`)
        .pipe(browserify({
            transform: [babelify.configure({
                presets: ['env']
            })]
        }))
        .pipe(minifyjs())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest(`${path.prod.root}/${path.prod.js}`))
});

gulp.task(`index:${path.prod.root}`, () => {
    return gulp.src(`${path.dev.root}/index.html`)
        .pipe(gulp.dest(`${path.prod.root}`))
});

gulp.task('browserSync', () => {
    browserSync.init({
        server: {
            baseDir: `${path.dev.root}`
        }
    })
});

gulp.task('watch', ['browserSync', 'sass', 'babel'], () => {
    gulp.watch(`${path.dev.root}/${path.dev.css}/**/*.scss`, ['sass']);
    gulp.watch(`${path.dev.root}/${path.dev.js}/**/*.js`, ['babel']);
    gulp.watch(`${path.dev.root}/index.html`, browserSync.reload);
});

gulp.task('default', (callback) => {
    runSequence(['sass', 'babel', 'browserSync', 'watch'],
        callback
    )
});

gulp.task(`clean:${path.prod.root}`, () => {
    return del.sync(`${path.prod.root}`);
});

gulp.task('build', (callback) => {
    runSequence(`clean:${path.prod.root}`, [`sass:${path.prod.root}`, `babel:${path.prod.root}`, `index:${path.prod.root}`],
        callback
    )
});