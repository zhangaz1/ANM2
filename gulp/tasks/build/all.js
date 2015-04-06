'use strict';


module.exports = function(context, name) {
	var tasks = context.config.tasks;

	context.gulp
		.task(
			name,
			'build all task',
			function(done) {
				context.sequence(
					tasks.build_boot,
					tasks.build_server,
					done
				);
			}
		);
};