'use strict';


module.exports = function(context, name) {
	var tasks = context.config.tasks;
	tasks[name] = name;

	context.gulp
		.task(
			name,
			'run web server task',
			function(done) {
				done(null);
			}
		);
};