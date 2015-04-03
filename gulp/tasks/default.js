'use strict';


module.exports = function(context, name) {
	var tasks = context.config.tasks;
	tasks[name] = name;

	context.gulp
		.task(
			name,
			'default task',
			context.sequence(
				tasks.clean_build,
				tasks.build_boot,
				tasks.build_server,
				tasks.watch_server
			),
			function(done) {
				console.log('task %s run!', name);
				done(null);
			});
};