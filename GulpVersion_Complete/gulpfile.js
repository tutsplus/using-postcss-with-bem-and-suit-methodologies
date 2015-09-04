var gulp = require('gulp');
var postcss = require('gulp-postcss');

var bem = require('postcss-bem');
var nested = require('postcss-nested');

gulp.task('css', function () {
	var processors = [
		bem({style: 'suit'}),
		nested
	];
	return gulp.src('./src/*.css')
		.pipe(postcss(processors))
		.pipe(gulp.dest('./dest'));
});