'use strict';


module.exports = function(context, name) {
	context.config.tasks[name] = name;

	context.gulp.task(
		name, 'default task',
		function(done) {
			console.log('task ' + name + ' run!');
			done(null);
		});
};