'use strict';


module.exports = function(context, name) {
	var tasks = context.config.tasks;

	context.gulp
		.task(
			name,
			'watch all task',
			function(done) {
				context.sequence(
					tasks.watch_server,
					tasks.watch_client
				)(done);
			}
		);
};