'use strict';


module.exports = function(context, name) {
	context.config.tasks[name] = name;

	var gulp = context.gulp;
	var config = context.config;
	var cacheManager = context.cacheManager;

	gulp.task(
		name,
		'watch server to build when change',
		addWatch
	);

	function addWatch(done) {
		if (cacheManager.get(name)) {
			console.log('无需重复添加watch: %s', name);
		} else {
			watch();
			cacheManager.set(name, true);
			console.log('添加watch：%s', name);
		}

		done(null);
	}

	function watch() {
		context.watch(
			config.files.server,
			function() {
				gulp.start(config.tasks.build_server);
			}
		);
	}
};