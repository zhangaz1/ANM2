'use strict';


var livereload = require('gulp-livereload');

module.exports = function(context, name) {
	var tasks = context.config.tasks;
	var cacheManager = context.cacheManager;

	context.gulp
		.task(
			name,
			'run lieveReload server task',
			function(done) {
				var webProcess = cacheManager.get(name);
				if (!webProcess) {
					livereload.listen();
					cacheManager.set(name, true);
				}

				done(null);
			}
		);
};