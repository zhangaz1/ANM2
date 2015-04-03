'use strict';


var gulp = require('gulp');
var help = require('gulp-help');
var debug = require('gulp-debug');
var sequence = require('gulp-sequence');

var config = require('./config.js');

gulp = help(gulp);

module.exports = {
	debug: debug,
	gulp: gulp,
	config: config,
	sequence: sequence
};