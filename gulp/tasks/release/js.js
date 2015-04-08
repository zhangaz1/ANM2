'use strict';


module.exports = function(context, name) {
	var debug = context.debug;
	var gulp = context.gulp;
	var config = context.config;

	gulp.task(
		name,
		'release js task',
		function(done) {
			gulp.src(config.files.buildJs)
				.pipe(debug({
					title: 'release js: '
				}))
				.pipe(gulp.dest(config.directories.release))
				.on('end', function(err) {
					done(err);
				});
		});
};