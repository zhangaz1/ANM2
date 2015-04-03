'use strict';


var debug = require('debug');
var gulp = require('gulp');
var help = require('gulp-help');

var config = require('./config.js');

debug = debug('gulp');
gulp = help(gulp);

module.exports = {
	debug: debug,
	gulp: gulp,
	config: config
};