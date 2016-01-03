var gulp     = require('gulp');
var gulputil = require('gulp-util');
var concat   = require('gulp-concat');
var uglify   = require('gulp-uglify');
var minify   = require('gulp-minify-css');
var connect  = require('gulp-connect');

// Use -> npm install --global gulp (instalar gulp)
// gulp -> para iniciar
// npm install -> instalar modulos dos packages ou unico modulo npm install gulp-connect --save-dev

gulp.task('scripts', function(){

 return gulp.src(['./lib/js/savana.js'])
        .pipe(concat('savana.min.js'))
	    .pipe(uglify())
	    .pipe(gulp.dest('./lib/js/'))
	    .pipe(connect.reload());

});

gulp.task('css', function(){

 return gulp.src(['./lib/css/savana.css'])
        .pipe(concat('savana.min.css'))
	    .pipe(minify())
	    .pipe(gulp.dest('./lib/css/'))
	    .pipe(connect.reload());

});

gulp.task('watch', function(){ //gulp watch
    	gulp.watch('./arquivos/gulp/js/*.js', ['scripts','css']);
});

gulp.task('default', ['css','scripts','watch']);

