'use strict';


var exec = require('exec');

module.exports = function(context, name) {
	var tasks = context.config.tasks;

	context.gulp
		.task(
			name,
			'run web server task',
			function(done) {
				var p = exec(['node', './build/index.js'],
					function(err, out, code) {
						if (err instanceof Error) {
							// throw err;
							console.log(err);
						}
						process.stderr.write(err);
						process.stdout.write(out);
						process.exit(code);
					});

				setTimeout(function() {
					done(null);
				}, 300);
			}
		);
};