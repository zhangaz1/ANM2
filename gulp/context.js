'use strict';


var gulp = require('gulp');
var help = require('gulp-help');
var debug = require('gulp-debug');
var sequence = require('gulp-sequence');

var config = require('./config.js');
var watchManager = require('./watchManager.js');

gulp = help(gulp);

module.exports = {
	gulp: gulp,
	debug: debug,
	sequence: sequence,
	config: config,
	watchManager: watchManager
};