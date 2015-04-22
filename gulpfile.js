var gulp = require('gulp'),
	minifyCSS = require('gulp-minify-css'),
	concatCss = require('gulp-concat-css'),
	concat = require('gulp-concat');

gulp.task('minify-css', function () {
	return gulp.src('./css/production.css')
		.pipe(minifyCSS({
			keepBreaks: true
		}))
		.pipe(gulp.dest('./public/production.min.css'))
});

gulp.task('concat-css', function () {
	return gulp.src('./css/*.css')
		.pipe(concatCss("production.css"))
		.pipe(gulp.dest('./public/'));
});


gulp.task('scripts', function () {
	return gulp.src(['./lib/jquery.js', './lib/angular.js', './lib/hammer.js', './lib/*.js'])
		.pipe(concat('production.js'))
		.pipe(gulp.dest('./public/'));
});


gulp.task('app', function () {
	return gulp.src('./app/*.js')
		.pipe(concat('app.js'))
		.pipe(gulp.dest('./public/'));
});



gulp.task('default', ['concat-css', 'minify-css', 'scripts', 'app']);