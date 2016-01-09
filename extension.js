"use strict";
const vscode = require('vscode');
const GitHubIssue = require('gitHubIssue');
const path = require('path');

function activate(context) {
	//we do nothing if there is no root.
	if (!vscode.workspace.rootPath) return;
	const tempDir = path.join(vscode.workspace.rootPath, ".vscode", "GitHubIssue");
	let ghi = new GitHubIssue(vscode, context);

	function run() {
		const tempDir = path.join(vscode.workspace.rootPath, ".vscode", "GitHubIssue");
		vscode.workspace.openTextDocument(path.join(tempDir, "issueList.md"))
			.then(doc => vscode.window.showTextDocument(doc, 1));
		ghi.markViewed();
	}

	vscode.window.onDidChangeActiveTextEditor(editor => {
		//if we're in our section, change the view
		if (!editor || !editor.document || !editor.document.fileName) return;
		const base = path.dirname(editor.document.fileName);
		if (base === tempDir) {
			vscode.commands.executeCommand('workbench.action.markdown.togglePreview');
		}
	});

	vscode.commands.registerCommand("HookyQR.GitHubIssues", run);
	ghi.begin();

}
exports.activate = activate;
