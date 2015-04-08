'use strict';


module.exports = function(context, name) {
	var tasks = context.config.tasks;

	context.gulp
		.task(
			name,
			'update server task',
			function(done) {
				context.sequence(
					tasks.build_server,
					tasks.runServer_web,
					tasks.dev_reload
				)(done);
			}
		);
};