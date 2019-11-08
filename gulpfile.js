var gulp = require ('gulp')
var sass = require ('gulp-sass')
var babel = require ('gulp-babel')
var ts = require('gulp-typescript')
var tsProject = ts.createProject('tsconfig.json')

function typey() {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest('app/js/typescripted'))
}

exports.typey = typey

function sassCompile(cb){
    return gulp.src('app/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
    cb()
}

exports.sass = sassCompile

function babelGulp(cb) {
    return gulp.src("app/js/ES6/main.js")
        .pipe(babel())
        .pipe(gulp.dest("app/js/ES5"));
    cb()
}

exports.babelGulp = babelGulp

function watch(){
    gulp.watch('app/scss/**/*.scss', sassCompile)
    gulp.watch('app/js/ES6/**/*.js', babelGulp)
    gulp.watch('app/js/ts/**/*.ts', typey)
}

exports.watch = watch;