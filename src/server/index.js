'use strict';


var koa = require('koa');

var staticResource = require('./handlers/common/staticResource.js');

var app = koa();

staticResource(app);

app.use(function*() {
	this.body = 'hi!';
})

app.listen(3000);