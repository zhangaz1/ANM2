'use strict';


exports.createTasks = function(context) {
	context.gulp.task(
		context.config.tasks.default,
		function(done) {
			console.log('default task run!');
			done(null);
		});
};