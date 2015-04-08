'use strict';


module.exports = function(context, name) {
	var tasks = context.config.tasks;

	context.gulp
		.task(
			name,
			'update client task',
			function(done) {
				context.sequence(
					tasks.build_client,
					tasks.runServer_web,
					tasks.dev_reload
				)(done);
			}
		);
};