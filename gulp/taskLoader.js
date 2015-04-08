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
	var dirObj = getDirObj('./tasks');
	var tasks = parseTasks(dirObj);

	addTasks(tasks);
};


//----------------------------------
// privates
//----------------------------------

function getDirObj(dir) {
	return requireDir(dir, {
		recurse: true
	});
}

function parseTasks(dirObj, prefix, tasks) {
	if (!dirObj) {
		return;
	}

	prefix = prefix ? prefix + '_' : '';
	tasks = tasks || {};

	for (var name in dirObj) {
		var task = dirObj[name];
		var taskName = prefix + name;

		if (typeof(task) === 'function') {
			tasks[taskName] = task;
		} else {
			parseTasks(task, taskName, tasks)
		}
	}

	return tasks;
}

function addTasks(tasksHash) {
	var tasks = _context.config.tasks;
	for (var p in tasksHash) {
		tasks[p] = p;
	}

	for (var p in tasksHash) {
		tasksHash[p](_context, p);
	}
}