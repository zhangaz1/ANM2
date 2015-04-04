'use strict';


var exec = require('exec');

module.exports = function(context, name) {
	var tasks = context.config.tasks;
	var cacheManager = context.cacheManager;

	context.gulp
		.task(
			name,
			'browser homepage task',
			function(done) {
				var browserProcess = cacheManager.get(name);
				if (browserProcess) {
					browserProcess.kill();
				}

				browserProcess = startWeb();
				cacheManager.set(name, browserProcess);

				setTimeout(function() {
					done(null);
				}, 300);
			}
		);
};

function startWeb(argument) {
	return exec(
		['chrome', 'http://localhost:3000'],
		function(err, out, code) {
			if (err instanceof Error) {
				// throw err;
				console.log(err);
			}
			process.stderr.write(err);
			process.stdout.write(out);
		}
	);
}