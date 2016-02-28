"use strict";
const vscode = require('vscode');
const GitHubIssue = require('gitHubIssue');

function activate(context) {
	if (!vscode.workspace.rootPath) return;
    
	const ghi = new GitHubIssue(vscode, context, true);
	const docProvider = {
		provideTextDocumentContent: () => ghi.createHTML()
	};
	vscode.workspace.registerTextDocumentContentProvider('git-issues', docProvider);

	vscode.commands.registerCommand("HookyQR.GitHubIssues", () => {
		ghi.markViewed();
		vscode.commands.executeCommand("vscode.previewHtml",
				vscode.Uri.parse("git-issues://base"), vscode.ViewColumn
				.One)
			.then(() => 1, error => console.log(error));
	});
	ghi.begin();
}

exports.activate = activate;
