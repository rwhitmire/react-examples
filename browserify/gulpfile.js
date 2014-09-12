var gulp = require('gulp');
var source = require("vinyl-source-stream");
var browserify = require('browserify');
var reactify = require('reactify');

gulp.task('js', function() {

	var opts = {
		entries: ['./scripts/main.js'],
		debug: true
	}

	browserify(opts)
		.transform(reactify)
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('dist'));
});