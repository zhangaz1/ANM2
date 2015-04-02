'use strict';


var requireDir = require('require-dir');

module.exports = Loader;


function Loader(context) {
	this.context = context;
}

var lpt = Loader.prototype;

lpt.loadTasks = function() {
	var tasks = requireDir('./tasks', {
		recurse: true
	});

	addTasks(this.context, tasks);
};


function addTasks(context, tasks, prefix) {
	if (!tasks) {
		return;
	}

	prefix = prefix ? prefix + '_' : '';


	for (var name in tasks) {
		var task = tasks[name];
		var taskName = prefix + name;

		if (typeof(task) === 'function') {
			addTask(context, taskName, tasks[name]);
		} else {
			addTasks(task, taskName)
		}
	}
}

function addTask(context, name, createTask) {
	createTask(context, name);
}