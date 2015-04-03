'use strict';


var path = require('path');

var root = path.resolve('./'); // process.cwd();

var config = {
	tasks: {}
};

config.files = {
	server: joinRoot('./**/src/server/**/*.*')
};

config.directories = {
	build: joinRoot('./build')
};

function joinRoot(subPath) {
	return path.join(root, subPath);
}

module.exports = config;