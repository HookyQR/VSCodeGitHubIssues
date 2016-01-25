Options:

```json
{
	"authToken":"",
	"statusPos":["left","right"],
	"countInAllLabels":[true,false],
	"showLabelAs":{
		"_ANY":"_ANY_OCTICON"
	},
	"showPullRequests":["all",true,false],
	"assignee":["all","_ANY_LOGIN",null],//Or an array of these (except all)
	"runEvery":"number of minutes",
	"showForkParent":[true,false],
	"otherRepos":["_USER/_REPO","_USER"],
	"otterReposAsOne":[true,false]
	}
}
```
Example:
```json
{
	"GitHubIssues.authToken": "abcde1234567890",
	"GitHubIssues.showLabelAs": {
		"bug":"bug",
		"Unlabelled":"info"
	},
	"GitHubIssues.showForkParent":{
		"icon":"repo-forked",
		"collectIssues":true,
		"labels":{
			"question":1
		}
	},
	"GitHubIssues.showRepos":{
		"HookyQR":{
			"labels":{
				
			}
		},
		"Microsoft/vscode":{
			"text":"VSC",
			"labels":{
				"build":"file-binary",
				"css-less-sass":"code"
			},
			"assignee":[null,"aeschli"]
		}
	}	
	"GitHubIssues.assignee": [null,"HookyQR"]
}
