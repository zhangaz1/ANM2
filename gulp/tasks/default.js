'use strict';


module.exports = function(context, name) {
	var tasks = context.config.tasks;

	context.gulp
		.task(
			name,
			'default task',
			context.sequence(
				tasks.clean_build,
				tasks.build_boot,
				tasks.build_server,
				tasks.watch_server
			)
		);
};