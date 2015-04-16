'use strict';


var koa = require('koa');

var staticResource = require('./handlers/common/staticResource.js');


module.exports = function(context) {
	var app =
		context.app = createApp(context);

	addHandlers(context);

	runApp(context);
};


function createApp(context) {
	return koa();
}

function addHandlers(context) {
	staticResource(context);

	context.app.use(function*() {
		this.body = 'hi!';
	})
}

function runApp(context) {
	context.app.listen(context.config.webPort);
}