'use strict';


module.exports = function(context, name) {
	context.config.tasks[name] = name;

	context.gulp.task(
		name,
		function(done) {
			console.log('default task run!');
			done(null);
		});
};