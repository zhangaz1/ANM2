'use strict';


var exec = require('exec');

module.exports = function(context, name) {
    var tasks = context.config.tasks;
    var cacheManager = context.cacheManager;

    context.gulp
        .task(
            name,
            'run web server task',
            function(done) {
                console.log('web server restarting...');

                var webProcess = cacheManager.get(name);
                if (webProcess) {
                    webProcess.kill();
                }

                webProcess = startWeb();
                cacheManager.set(name, webProcess);

                console.log('web server restarted');

                process.nextTick(done);
            }
        );
};

function startWeb(argument) {
    return exec(
        ['node', '-harmony', './build/index.js'],
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