'use strict';


var koa = require('koa');
var app = koa();

app.use(function*() {
	this.body = 'hi, welcome to ANM2!';
})

app.listen(3000);