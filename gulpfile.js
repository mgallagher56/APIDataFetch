var gulp = require ('gulp')
var sass = require ('gulp-sass')
var babel = require ('gulp-babel')

function sassCompile(cb){
    return gulp.src('app/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
    cb()
}

exports.sass = sassCompile

function watch(){
    gulp.watch('app/scss/**/*.scss', sassCompile)
    gulp.watch('app/js/ES6/**/*.js', babelGulp)
}

exports.watch = watch;

function babelGulp(cb) {
    return gulp.src("app/js/ES6/index.js")
        .pipe(babel())
        .pipe(gulp.dest("app/js/ES5"));
    cb()
}

exports.babelGulp = babelGulp