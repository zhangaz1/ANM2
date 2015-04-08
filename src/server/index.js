'use strict';


var path = require('path');

var koa = require('koa');
var staticServer = require('koa-static');

var app = koa();

var clientDir = path.join(__dirname, './../client');
var publicFiles = staticServer(clientDir);
publicFiles._name = 'static/client';

app.use(publicFiles);

app.use(function*() {
	this.body = 'hi!';
})

app.listen(3000);