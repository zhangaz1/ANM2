'use strict';


var requireDir = require('require-dir');

var context = require('./context.js');

var tasks = requireDir('./tasks', {
	recurse: true
});

addTasks(tasks);


function addTasks(tasks, prefix) {
	if (!tasks) {
		return;
	}

	prefix = prefix ? prefix + '_' : '';


	for (var name in tasks) {
		var task = tasks[name];
		var taskName = prefix + name;

		if (typeof(task) === 'function') {
			addTask(taskName, tasks[name]);
		} else {
			addTasks(task, taskName)
		}
	}
}

function addTask(name, createTask) {
	createTask(context, name);
}