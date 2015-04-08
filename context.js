'use strict';


var path = require('path');

var config = require('./config.js');

var context =
	module.exports = {
		path: path,
		pathJoin: path.join
	};

context.config = config(context);
context.joinRoot = config.joinRoot;