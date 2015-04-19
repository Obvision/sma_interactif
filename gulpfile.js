var gulp = require('gulp'),
	minifyCSS = require('gulp-minify-css'),
	concatCss = require('gulp-concat-css');

gulp.task('concat-css', function () {
	return gulp.src('./css/*.css')
		.pipe(concatCss("production.css"))
		.pipe(gulp.dest('./public/'));
});

gulp.task('minify-css', function () {
	return gulp.src('./css/production.css')
		.pipe(minifyCSS({
			keepBreaks: true
		}))
		.pipe(gulp.dest('./public/production.min.css'))
});



gulp.task('default', ['concat-css', 'minify-css']);