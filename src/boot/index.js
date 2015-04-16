'use strict';


require('./currentAppSys.js');

var context = require('./context.js')();

// console.dir(context);
require(context.config.serverBoot)
	(context);