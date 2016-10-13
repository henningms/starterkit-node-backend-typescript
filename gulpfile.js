var gulp = require('gulp');
var tsc  = require("gulp-typescript");
var del = require('del');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var path = require('path');
 
var tsProject = tsc.createProject("tsconfig.json");
 
gulp.task('clean', function(cb){
    return del('dist', cb)    
})
 
gulp.task('build', ['clean'], function() {
    var tsResult = gulp.src(["typings/**/*.ts","src/**/*.ts"])
        .pipe(sourcemaps.init())
        .pipe(tsProject()).js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("dist"));
});
 
gulp.task('default', ['build']);