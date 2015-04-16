'use strict';


var path = require('path');

var root = path.join(__dirname, './..'); // path.resolve('./'); // process.cwd();

var config = {
	tasks: {}
};

config.files = {
	allJs: [
		joinRoot('./src/**/*.js')
	],
	boot: [
		'!' + joinRoot('./node_modules/**/*.*'),
		joinRoot('./**/src/boot/currentAppSys.js'),
		joinRoot('./**/src/boot/config.js'),
		joinRoot('./**/src/boot/context.js'),
		joinRoot('./**/src/boot/index.js'),
		joinRoot('./**/src/index.js'),
		joinRoot('./index.js'),
		joinRoot('./run.cmd')
	],
	server: [
		'!' + joinRoot('./build/**/*.*'),
		'!' + joinRoot('./release/**/*.*'),
		joinRoot('./**/src/server/**/*.*')
	],
	client: [
		'!' + joinRoot('./build/**/*.*'),
		'!' + joinRoot('./release/**/*.*'),
		joinRoot('./**/src/client/**/*.*')
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