'use strict';


var context = require('./context.js');
var TaskLoader = require('./taskLoader.js');

new TaskLoader(context)
	.loadTasks();