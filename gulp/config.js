'use strict';


var path = require('path');

var root = path.resolve('./'); // process.cwd();

var config = {
	tasks: {}
};

config.files = {
	allJs: [
		joinRoot('./src/**/*.js')
	],
	boot: [
		joinRoot('./run.cmd'),
		joinRoot('./index.js')
	],
	server: [
		'!' + joinRoot('./build/**/*.*'),
		'!' + joinRoot('./release/**/*.*'),
		joinRoot('./**/src/server/**/*.*')
	],
	buildJs: [
		'!' + joinRoot('./gulp/**/*.js'),
		'!' + joinRoot('./node_modules/**/*.js'),
		joinRoot('./build/**/*.js')
	]
};

config.directories = {
	build: joinRoot('./build'),
	release: joinRoot('./release')
};

function joinRoot(subPath) {
	return path.join(root, subPath);
}

module.exports = config;