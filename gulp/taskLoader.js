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

	this.addTasks(tasks);
};

lpt.addTasks = function(tasks, prefix) {
	if (!tasks) {
		return;
	}

	prefix = prefix ? prefix + '_' : '';


	for (var name in tasks) {
		var task = tasks[name];
		var taskName = prefix + name;

		if (typeof(task) === 'function') {
			this.addTask(taskName, tasks[name]);
		} else {
			this.addTasks(task, taskName)
		}
	}
};

lpt.addTask = function(name, createTask) {
	createTask(this.context, name);
};