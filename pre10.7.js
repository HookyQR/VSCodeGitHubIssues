"use strict";
const vscode = require('vscode');
const GitHubIssue = require('gitHubIssue');
const path = require('path');

function activate(context) {
	if (!vscode.workspace.rootPath) return;

	const tempDir = path.join(vscode.workspace.rootPath, ".vscode", "GitHubIssue");
	let ghi = new GitHubIssue(vscode, context);

	function run(ctxt) {
		const tempDir = path.join(vscode.workspace.rootPath, ".vscode", "GitHubIssue");
		vscode.workspace.openTextDocument(path.join(tempDir, "issueList.md"))
			.then(doc => vscode.window.showTextDocument(doc, 1)
				.then(() => ghi.markViewed()), () => {
					//re-build file
					if (ctxt) {
						return ghi.fillRootMarkdown()
							.then(run);
					}
				});
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