'use strict';


var config = require('./config.js')();


module.exports = cas.inheritHelper.create(context);


function context() {
	this.config = config;
};