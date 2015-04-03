'use strict';


module.exports = function(context, name) {
	context.config.tasks[name] = name;

	var gulp = context.gulp;
	var config = context.config;

	gulp.task(
		name,
		'build server task',
		function(done) {
			console.log(config.files.server);
			console.log(config.directories.build);

			gulp.src(config.files.server)
				.pipe(gulp.dest(config.directories.build));

			done(null);
		});
};