'use strict';


module.exports = function(context, name) {
	var tasks = context.config.tasks;

	context.gulp
		.task(
			name,
			'reload client task',
			function() {
				context.liveReload.reload();
			}
		);
};