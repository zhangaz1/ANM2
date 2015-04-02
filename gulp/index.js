'use strict';


var gulp = require('gulp');

var config = require('./config.js');

require('./tasks/index.js')
	.createTasks(gulp, config);