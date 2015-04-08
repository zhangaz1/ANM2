'use strict';


var path = require('path');

var staticServer = require('koa-static');

module.exports = function(context) {
	var clientDir = context.config.clientDir;
	var publicFiles = staticServer(clientDir);
	publicFiles._name = 'static/client';

	context.app.use(publicFiles);
};