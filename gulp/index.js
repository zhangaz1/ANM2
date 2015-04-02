'use strict';


var gulp = require('gulp');

var config = require('./config.js');

gulp.task(
	config.tasks.default,
	function(done) {
		console.log('default task run!');
		done(null);
	});