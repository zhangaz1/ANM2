'use strict';


var context = require('./context.js');

require('./tasks/index.js')
	.createTasks(context);