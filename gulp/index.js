'use strict';


var context = require('./context.js'),
	TaskLoader = require('./taskLoader.js');

new TaskLoader(context).loadTasks();