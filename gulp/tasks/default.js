'use strict';


module.exports = function(context, name) {
	var tasks = context.config;
	tasks[name] = name;

	context.gulp
		.task(
			name,
			'default task',
			context.sequence(
				tasks.build_boot,
				tasks.build_server,
				tasks.watch_server
			),
			function(done) {
				console.log('task ' + name + ' run!');
				done(null);
			});
};