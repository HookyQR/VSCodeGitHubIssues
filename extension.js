"use strict";

const vscode = require('vscode');
const version = vscode.version.split('.')
	.map(str => parseInt(str));

if (version[0] === 0 &&
	(version[1] < 10 ||
		(version[1] === 10 && version[2] < 7)
	))
	exports.activate = require('./pre10.7')
	.activate;
else
	exports.activate = require('./post10.7')
	.activate;
