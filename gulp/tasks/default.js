'use strict';


module.exports = function(context, name) {
	var tasks = context.config.tasks;

	context.gulp
		.task(
			name,
			'default task',
			function(done) {
				context.sequence(
					tasks.build_all,
					tasks.runServer_web,
					tasks.runServer_liveReload,
					tasks.dev_browser,
					tasks.watch_server,
					done
				);
			}
		);
};