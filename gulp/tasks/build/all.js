'use strict';


module.exports = function(context, name) {
	var tasks = context.config.tasks;

	context.gulp
		.task(
			name,
			'build all task',
			function(done) {
				context.sequence(
					tasks.clean_build,
					tasks.build_boot,
					tasks.build_server,
					tasks.build_client
				)(done);
			}
		);
};