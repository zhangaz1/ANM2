'use strict';


module.exports = function(context, name) {
	context.config.tasks[name] = name;

	var gulp = context.gulp;
	var config = context.config;

	gulp.task(
		name,
		'watch server to build when change',
		addWatch
	);

	function addWatch(done) {
		var success = context.watchManager
			.cacheWatch(name);

		if (success) {
			watch();
			console.log('添加watch：%s', name);
		} else {
			console.log('无需重复添加watch: %s', name);
		}
		done(null);
	}

	function watch() {
		gulp.watch(
			config.files.server, [config.tasks.build_server]
		);
	}
};