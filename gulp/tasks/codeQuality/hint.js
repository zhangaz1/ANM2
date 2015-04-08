'use strict';


var jshint = require('gulp-jshint');

module.exports = function(context, name) {
	var tasks = context.config.tasks;
	var gulp = context.gulp;

	gulp.task(
		name,
		'hint task',
		function(done) {
			gulp.src(context.config.files.allJs)
				.pipe(jshint())
				.pipe(jshint.reporter('jshint-stylish'))
				.on('end', function(err) {
					done(err);
				});
		}
	);
};