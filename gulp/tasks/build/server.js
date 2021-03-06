'use strict';


module.exports = function(context, name) {
	var debug = context.debug;
	var gulp = context.gulp;
	var config = context.config;

	gulp.task(
		name,
		'build server task',
		function(done) {
			gulp.src(config.files.server)
				.pipe(debug({
					title: 'build server: '
				}))
				.pipe(gulp.dest(config.directories.build))
				.on('end', function(err) {
					done(err);
				});
		});
};