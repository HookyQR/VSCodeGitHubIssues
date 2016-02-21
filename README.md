# Git Hub Issues
[![Build Status](https://api.travis-ci.org/HookyQR/VSCodeGitHubIssues.svg?branch=master)](https://travis-ci.org/HookyQR/VSCodeGitHubIssues)

Monitor Git Hub issues in VS Code while you work.

![Status Bar](image/snap.png)

By default, the status is updated every 5 minutes. If an authentication token is included in your settings, this can be reduced to 1 minute. Without one, the minimum is set to 3 minutes.

The elements displayed can be set according to the **label**(s) the issue is tagged with in GitHub. Any label can be added to the status bar in the User or Workspace settings.

Items selected can also be filtered by **assignee**, including unassigned issues.

A seperate indicator is available for **pull requests**. A setting for pull requests allows you to see all pull requests, just those that meet other filters, or don't indicate them at all. (They will still show in other Issues if they match the filter. There just won't be a dedicated icon for them.)

Clicking the status bar element will open a generated page (stored in `.vscode/GitHubIssue`) with the overview elements of the GitHub Issue. Clicking the title of any listed issue will take you to the GitHub site, landing at the issue page. Updated issues, since you last opened the overview, will be marked with a `*`.

**Git Hub Issue** identifies your GitHub project via the `.git/config` file. Any config with a `https://github.com/{user}/{repo}(.git)` remote url set will be considered as a GitHub project. Now also accepts SSH URLs of the form `git@github.com:{user}/{repo}(.git)`

It is a good idea to seperate your settings between your user settings and workspace settings. Especially if you're working on large projects. With your user settings describing the assignee filtering, and the workspace settings defining the tags you want to track:

```javascript
//user settings
"GitHubIssues.authToken": "abcde1234567890",
"GitHubIssues.showLabelAs": {
	"bug":"bug",
	"Unlabelled":"info"
},
"GitHubIssues.assignee": [null,"HookyQR"]

//workspace settings (Project 1)
"GitHubIssues.showLabelAs": {
	"install-update": "cloud-download"
}

//workspace settings (Project 2)
"GitHubIssues.showPullRequests": false
```
Workspace settings in the assignee element override user settings. Workspace settings in the showLabelAs element are merged with those in user settings, with workspace settings taking precedence.

## TODO:
- Improve overview display.
- Enable viewing of issue elements in VS Code.
- Perhaps allow manipulation of issues within VS Code.
- Improve initial load time.

Please submit an issue if there are any improvements/enhancements you would like to see in future releases. (Or vote up the ones above)

## Changes:
### 0.0.7: 21 Feb 2016
* Uses `vscode.previewHtml` command instead of saving to `.vscode/GitHubIssues` on vscode 0.10.7+.
* Still uses old method for pre 0.10.7.

### 0.0.6: 16 Feb 2016
* Support SSH remotes. Fixes: [Issue #5](https://github.com/HookyQR/VSCodeGitHubIssues/issues/5)

### 0.0.5: 25 Jan 2016
* Repeat run wasn't working. Function removed by accident in cleanup.
* Added file rebuild on view if not present.

### 0.0.4: 10 Jan 2016
* Was matching (with empty) when no gitHub repo present.

### 0.0.3: 04 Jan 2016
* Utilise workspaceState to avoid full read on workspace start. Partially fixes: [Issue #4](https://github.com/HookyQR/VSCodeGitHubIssues/issues/4)
* Tag items that have updates/new elements. 


### 0.0.2: 02 Jan 2016
* Fix positioning of status element.
