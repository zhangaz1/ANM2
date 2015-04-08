'use strict';


var koa = require('koa');

var context = require('./../../context.js');
var staticResource = require('./handlers/common/staticResource.js');

var app = koa();
context.app = app;

staticResource(context);

app.use(function*() {
	this.body = 'hi!';
})

app.listen(context.config.webPort);