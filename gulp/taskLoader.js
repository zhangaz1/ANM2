'use strict';


//----------------------------------
// import & export
//----------------------------------

var requireDir = require('require-dir');

module.exports = Loader;


//----------------------------------
// constructor
//----------------------------------

var _context = null;

function Loader(context) {
	_context = context;
}

var lpt = Loader.prototype;

lpt.loadTasks = function() {
	var tasks = requireDir('./tasks', {
		recurse: true
	});

	addTasks(tasks);
};


//----------------------------------
// privates
//----------------------------------

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
	createTask(_context, name);
}