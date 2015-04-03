'use strict';


var del = require('del');

module.exports = function(context, name) {
	context.config.tasks[name] = name;

	var debug = context.debug;
	var gulp = context.gulp;
	var config = context.config;

	gulp.task(
		name,
		'clean build task',
		function(done) {
			del([config.directories.build], function(err, deleteFiles) {
				console.log('deleted files: ' + deleteFiles)
				done(err);
			});
		});
};