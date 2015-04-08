'use strict';


var path = require('path');

var staticServer = require('koa-static');

module.exports = function(app) {
	var clientDir = path.join(__dirname, './../../../client');
	var publicFiles = staticServer(clientDir);
	publicFiles._name = 'static/client';

	app.use(publicFiles);
};