'use strict';


module.exports = function(context, name) {
	var tasks = context.config.tasks;

	context.gulp
		.task(
			name,
			'clean all task',
			function(done) {
				context.sequence(
					tasks.clean_build,
					tasks.clean_release
				)(done);
			}
		);
};