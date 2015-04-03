'use strict';


var watchCache = {};

module.exports = {
	cacheWatch: cacheWatch
};

function cacheWatch(name) {
	if (watchCache[name]) {
		return false;
	} else {
		watchCache[name] = true;
		return true;
	}
}