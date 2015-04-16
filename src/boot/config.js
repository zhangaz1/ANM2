'use strict';


module.exports = cas.inheritHelper.create(config);


function config() {
	this.webPort = 3000;
	this.clientDir = cas.joinRoot('./client');
	this.serverBoot = cas.joinRoot('./server/index.js');
};