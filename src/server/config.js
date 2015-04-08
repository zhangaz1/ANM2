'use strict';


var config = {
	webPort: 3000,
	clientDir: './src/client'
};

module.exports = function(context) {
	fillConfig(context);
	return config;
};

function fillConfig(context) {
	config.context = context;

	config.root = getRoot();

	config.clientDir = joinRoot(config.clientDir)
}

function joinRoot(dir) {
	return config.context.pathJoin(config.root, dir);
}

function getRoot() {
	return config.context.pathJoin(__dirname, './../..');
}