'use strict';


var path = require('path');

var staticServer = require('koa-static');

module.exports = function(context) {
	var clientDir = path.join(__dirname, './../../../client');
	var publicFiles = staticServer(clientDir);
	publicFiles._name = 'static/client';

	context.app.use(publicFiles);
};