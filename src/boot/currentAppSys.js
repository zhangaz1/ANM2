'use strict';


var path = require('path');
var inheritHelper = require('inherit-helper');


global.cas =
	global.currentAppSys = {
		inheritHelper: inheritHelper
	};


cas.root = path.resolve(__dirname);

cas.joinRoot = function(dir) {
	return path.join(cas.root, dir);
};

cas.root = cas.joinRoot('./../..');