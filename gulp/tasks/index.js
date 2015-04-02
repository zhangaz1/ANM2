'use strict';


exports.createTasks = function(gulp, config) {
	gulp.task(
		config.tasks.default,
		function(done) {
			console.log('default task run!');
			done(null);
		});
};