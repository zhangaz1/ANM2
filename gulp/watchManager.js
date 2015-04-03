'use strict';


var watchCache = {};

module.exports = {
	addWatchOnlyOnce: addWatch
};

function addWatch(name, add) {
	if (!watchCache[name]) {
		watchCache[name] = true;
		add();
	}
}