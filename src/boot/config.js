'use strict';


module.exports = cas.inheritHelper.create(config);


function config() {
	this.webPort = 3000;
	this.clientDir = cas.joinRoot('./src/client');
	this.serverBoot = cas.joinRoot('./src/server/index.js');
};