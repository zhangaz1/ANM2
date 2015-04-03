'use strict';


var gulp = require('gulp');
var help = require('gulp-help');

var config = require('./config.js');

gulp = help(gulp);

module.exports = {
	gulp: gulp,
	config: config
};