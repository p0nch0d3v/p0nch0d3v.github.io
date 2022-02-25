"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[450],{6029:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"linux-shell-snippets","metadata":{"permalink":"/linux-shell-snippets","source":"@site/blog/2022-02-20-linux-shell-snippets.md","title":"Linux Shell snippets","description":"Here is a set of some git snippets, useful in some way.","date":"2022-02-20T00:00:00.000Z","formattedDate":"February 20, 2022","tags":[{"label":"linux","permalink":"/tags/linux"},{"label":"bash","permalink":"/tags/bash"},{"label":"sh","permalink":"/tags/sh"}],"truncated":false,"authors":[{"name":"Sneaky Koder","title":"Software Developer","url":"https://github.com/sneakykoder","imageURL":"https://github.com/sneakykoder.png","key":"sneakykoder"}],"frontMatter":{"title":"Linux Shell snippets","slug":"linux-shell-snippets","tags":["linux","bash","sh"],"authors":["sneakykoder"]},"nextItem":{"title":"Some scripts","permalink":"/some-scripts"}},"content":"> Here is a set of some git snippets, useful in some way.\\n\\n### List files/directories\\n```sh\\nls -a -l -h --color=always\\n```\\nWhere:\\n```sh\\n-a      = show all files included the dots(.)\\n-l      = show in long format\\n-h      = Show in units in humat readable format\\n--color = Output colored\\n```\\n\\n### Find forlders recursively\\n```\\nfind . -name \\"node_modules\\" -type d -prune | xargs du -chs\\n```"},{"id":"some-scripts","metadata":{"permalink":"/some-scripts","source":"@site/blog/2022-01-24-some-scripts.mdx","title":"Some scripts","description":"Here is a set of (useful in some way) scripts in different languages such as bash, powershell, etc.","date":"2022-01-24T00:00:00.000Z","formattedDate":"January 24, 2022","tags":[{"label":"bash","permalink":"/tags/bash"},{"label":"powershell","permalink":"/tags/powershell"}],"truncated":false,"authors":[{"name":"Sneaky Koder","title":"Software Developer","url":"https://github.com/sneakykoder","imageURL":"https://github.com/sneakykoder.png","key":"sneakykoder"}],"frontMatter":{"title":"Some scripts","slug":"some-scripts","tags":["bash","powershell"],"authors":["sneakykoder"]},"prevItem":{"title":"Linux Shell snippets","permalink":"/linux-shell-snippets"},"nextItem":{"title":"Git snippets","permalink":"/git-snippets"}},"content":"import CodeFilePreview from \'@site/src/components/CodeFilePreview\';\\n\\n> Here is a set of (useful in some way) scripts in different languages such as bash, powershell, etc.\\n\\n## Docker\\n\\n### Clean up docker\\n#### Shell\\n<CodeFilePreview url=\'https://raw.githubusercontent.com/sneakykoder/scripts-labs/master/docker_clean_up.sh\' urlDescription=\\"Download\\" lang=\\"shell\\" />\\n\\n---\\n#### Powershell\\n<CodeFilePreview url=\'https://raw.githubusercontent.com/sneakykoder/scripts-labs/master/docker_clean_up.ps1\' urlDescription=\\"Download\\" lang=\\"shell\\" />\\n\\n### Purge docker\\n#### Shell\\n<CodeFilePreview url=\'https://raw.githubusercontent.com/sneakykoder/scripts-labs/master/docker_purge_all.sh\' urlDescription=\\"Download\\" lang=\\"shell\\" />\\n\\n---\\n#### Powershell\\n<CodeFilePreview url=\'https://raw.githubusercontent.com/sneakykoder/scripts-labs/master/docker_purge_all.ps1\' urlDescription=\\"Download\\" lang=\\"shell\\" />"},{"id":"git-snippets","metadata":{"permalink":"/git-snippets","source":"@site/blog/2022-01-17-git-snippets.md","title":"Git snippets","description":"Here is a set of some git snippets, useful in some way.","date":"2022-01-17T00:00:00.000Z","formattedDate":"January 17, 2022","tags":[{"label":"git","permalink":"/tags/git"},{"label":"bash","permalink":"/tags/bash"},{"label":"sh","permalink":"/tags/sh"}],"truncated":false,"authors":[{"name":"Sneaky Koder","title":"Software Developer","url":"https://github.com/sneakykoder","imageURL":"https://github.com/sneakykoder.png","key":"sneakykoder"}],"frontMatter":{"title":"Git snippets","slug":"git-snippets","tags":["git","bash","sh"],"authors":["sneakykoder"]},"prevItem":{"title":"Some scripts","permalink":"/some-scripts"},"nextItem":{"title":"Docker CLI\'s","permalink":"/docker-clis"}},"content":"> Here is a set of some git snippets, useful in some way.\\n\\n### Git log\\n```bash\\ngit log --pretty=oneline --abbrev-commit --graph\\ngit log --pretty --oneline --graph --abbrev-commit --relative-date\\n```\\n#### Create alias \\n```bash\\ngit config --global alias.graph-log \'log --pretty=oneline --abbrev-commit --graph\'\\ngit config --global alias.graph-log \'git log --pretty --oneline --graph --abbrev-commit --relative-date\'\\n```\\n---\\n### Git config user\\n```bash\\ngit config --local user.email \\"\\"\\ngit config --local user.name \\"\\"\\n```\\n\\n### Git hook\\n#### Git hook to validate branch name\\n```bash\\n#!/bin/sh\\nremote=\\"$1\\"\\nurl=\\"$2\\"\\nLC_ALL=C\\nlocal_branch=\\"$(git rev-parse --abbrev-ref HEAD)\\"\\nvalid_branch_regex=\\"^(main|master|develop|development|((feature|bugfix|bug-fix|bug|fix|release|hotfix|hot-fix)+\\\\/{1,1}[a-zA-Z0-9_.-]+))$\\"\\nmessage=\\"The branch name \\\\\\"$local_branch\\\\\\" is not correct. Branch names must accomplish the following convention: \\\\\\"$valid_branch_regex\\\\\\". The branch should be renamed a valid name and try again.\\"\\nif [[ ! $local_branch =~ $valid_branch_regex ]]\\nthen\\n    echo \\"$message\\"\\n    exit 1\\nfi\\nexit 0\\n```"},{"id":"docker-clis","metadata":{"permalink":"/docker-clis","source":"@site/blog/2021-10-15-my-docker-clis.md","title":"Docker CLI\'s","description":"A collection of custom docker images as CLI\'s","date":"2021-10-15T00:00:00.000Z","formattedDate":"October 15, 2021","tags":[{"label":"docker","permalink":"/tags/docker"},{"label":"bash","permalink":"/tags/bash"},{"label":"python","permalink":"/tags/python"},{"label":"dotNetCore","permalink":"/tags/dot-net-core"},{"label":"node-js","permalink":"/tags/node-js"}],"truncated":true,"authors":[{"name":"Sneaky Koder","title":"Software Developer","url":"https://github.com/sneakykoder","imageURL":"https://github.com/sneakykoder.png","key":"sneakykoder"}],"frontMatter":{"title":"Docker CLI\'s","slug":"docker-clis","tags":["docker","bash","python","dotNetCore","node-js"],"authors":["sneakykoder"]},"prevItem":{"title":"Git snippets","permalink":"/git-snippets"}},"content":"## A collection of custom docker images as CLI\'s\\n\\nThere was a need to run different technologies in local dev environment, such as .net-core, node js, python, ruby, etc. without install them.\\n\\nA decision mas made to create a set of docker images with some pre-installed apps/plugins/extensions according to the technology to help with the development process.\\n\\n\x3c!--truncate--\x3e\\n\\n## python:3\\n### Docker image:\\n> [https://hub.docker.com/r/sneakykoder/python-cli](https://hub.docker.com/r/sneakykoder/python-cli).\\n### Repository: \\n> [https://github.com/sneakykoder/python-cli](https://github.com/sneakykoder/python-cli)\\n### How to use it:\\n```bash\\ndocker run --rm --interactive --tty --volume ${PWD}:/app sneakykoder/python-cli:3 bash\\n```\\n\\n## dotnet core with entity framework\\n### Docker image:\\n> [https://hub.docker.com/r/sneakykoder/dotnet-cli/tags](https://hub.docker.com/r/sneakykoder/dotnet-cli/tags)\\n### Repository:\\n> [https://github.com/sneakykoder/dotnet-cli](https://github.com/sneakykoder/dotnet-cli) \\n### How to use it\\n```bash\\ndocker run --rm --interactive --tty --volume ${PWD}:/app sneakykoder/dotnet-cli bash\\n```\\n\\n## dotnet core with entity framework and node-js\\n### Docker image:\\n> [https://hub.docker.com/r/sneakykoder/dotnet-node-cli](https://hub.docker.com/r/sneakykoder/dotnet-node-cli)\\n### Repository:\\n> [https://github.com/sneakykoder/dotnet-node-cli](https://github.com/sneakykoder/dotnet-node-cli)\\n### How to use it:\\n```bash\\ndocker run --rm --interactive --tty --volume ${PWD}:/app sneakykoder/dotnet-node-cli bash\\n```"}]}')}}]);