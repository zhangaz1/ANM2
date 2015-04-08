'use strict';


var cache = {};

module.exports = {
	get: get,
	set: set
};

function get(name) {
	return cache[name];
}

function set(name, value) {
	cache[name] = value;
}