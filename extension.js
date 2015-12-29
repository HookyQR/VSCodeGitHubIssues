"use strict";
var vscode = require('vscode');
var GitHubIssue = require('gitHubIssue');
var path = require('path');

function run() {

	var tempDir = path.join(vscode.workspace.rootPath, ".vscode", "GitHubIssue");
	vscode.workspace.openTextDocument(path.join(tempDir, "issueList.md"))
		.then(doc => vscode.window.showTextDocument(doc, 1));
}

function activate(context) {
	//we do nothing if there is no root.
	if (!vscode.workspace.rootPath) return;

	var tempDir = path.join(vscode.workspace.rootPath, ".vscode", "GitHubIssue");

	vscode.window.onDidChangeActiveTextEditor(editor => {
		//if we're in our section, change the view
		if (!editor || !editor.document || !editor.document.fileName) return;
		var base = path.dirname(editor.document.fileName);
		if (base === tempDir) {
			vscode.commands.executeCommand('workbench.action.markdown.togglePreview');
		}
	});

	var ghi = new GitHubIssue(vscode, context);
	vscode.commands.registerCommand("HookyQR.GitHubIssues", run);
	ghi.begin();

}
exports.activate = activate;
