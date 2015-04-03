'use strict';


module.exports = function(context, name) {
	var config = context.config;
	config.tasks[name] = name;

	context.gulp.task(
		name, 'default task', [
			config.tasks.build_boot,
			config.tasks.build_server
		],
		function(done) {
			console.log('task ' + name + ' run!');
			done(null);
		});
};