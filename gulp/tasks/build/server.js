'use strict';


module.exports = function(context, name) {
	context.config.tasks[name] = name;

	var debug = context.debug;
	var gulp = context.gulp;
	var config = context.config;

	gulp.task(
		name,
		'build server task',
		function(done) {
			debug('server source path: %s', config.files.server);
			console.log(config.directories.build);

			gulp.src(config.files.server)
				.pipe(gulp.dest(config.directories.build));

			done(null);
		});
};