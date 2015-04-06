'use strict';


var gulp = require('gulp');
var help = require('gulp-help');
var debug = require('gulp-debug');
var sequence = require('gulp-sequence');
var watch = require('gulp-watch');
var liveReload = require('gulp-livereload');


var config = require('./config.js');
var cacheManager = require('./cacheManager.js');

gulp = help(gulp);

module.exports = {
	gulp: gulp,
	debug: debug,
	sequence: sequence,
	liveReload: liveReload,
	watch: watch,
	config: config,
	cacheManager: cacheManager
};