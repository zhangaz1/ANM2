'use strict';


module.exports = function(context, name) {
	context.config.tasks[name] = name;

	var gulp = context.gulp;
	var config = context.config;

	gulp.task(
		name,
		'watch server to build when change',
		function(done) {
			addWatch();
			done(null);
		});

	function addWatch() {
		context.watchManager
			.addWatchOnlyOnce(
				name,
				function() {
					gulp.watch(
						config.files.server,
						function() {
							gulp.start(config.tasks.build_server);
						});
				});
	}
};