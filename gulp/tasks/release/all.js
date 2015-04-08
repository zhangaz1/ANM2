'use strict';


module.exports = function(context, name) {
	var tasks = context.config.tasks;

	context.gulp
		.task(
			name,
			'release all task',
			function(done) {
				context.sequence(
					tasks.clean_release,
					tasks.release_js
				)(done);
			}
		);
};