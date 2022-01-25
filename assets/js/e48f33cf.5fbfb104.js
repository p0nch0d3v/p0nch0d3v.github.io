"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[984],{5017:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return g},toc:function(){return u},default:function(){return p}});var n=a(7462),i=a(3366),o=(a(7294),a(3905)),r=["components"],l={title:"Git snippets",slug:"git-snippets",tags:["git","bash"],authors:["sneakykoder"]},s="Git snippets",c={permalink:"/git-snippets",source:"@site/blog/2022-01-17-git-snippets.md",title:"Git snippets",description:"Here is a set of some git snippets, useful in some way.",date:"2022-01-17T00:00:00.000Z",formattedDate:"January 17, 2022",tags:[{label:"git",permalink:"/tags/git"},{label:"bash",permalink:"/tags/bash"}],truncated:!1,authors:[{name:"Sneaky Koder",title:"Software Developer",url:"https://github.com/sneakykoder",imageURL:"https://github.com/sneakykoder.png",key:"sneakykoder"}],prevItem:{title:"Some scripts",permalink:"/some-scripts"},nextItem:{title:"Docker CLI's",permalink:"/docker-clis"}},g={authorsImageUrls:[void 0]},u=[{value:"Git log",id:"git-log",children:[{value:"Create alias",id:"create-alias",children:[],level:4}],level:3},{value:"Git config user",id:"git-config-user",children:[],level:3},{value:"Git hook",id:"git-hook",children:[{value:"Git hook to validate branch name",id:"git-hook-to-validate-branch-name",children:[],level:4}],level:3}],h={toc:u};function p(e){var t=e.components,a=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Here is a set of some git snippets, useful in some way.")),(0,o.kt)("h3",{id:"git-log"},"Git log"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git log --pretty=oneline --abbrev-commit --graph\n")),(0,o.kt)("h4",{id:"create-alias"},"Create alias"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git config --global alias.graph-log 'log --pretty=oneline --abbrev-commit --graph'\n")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"git-config-user"},"Git config user"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'git config --local user.email ""\ngit config --local user.name ""\n')),(0,o.kt)("h3",{id:"git-hook"},"Git hook"),(0,o.kt)("h4",{id:"git-hook-to-validate-branch-name"},"Git hook to validate branch name"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/sh\nremote="$1"\nurl="$2"\nLC_ALL=C\nlocal_branch="$(git rev-parse --abbrev-ref HEAD)"\nvalid_branch_regex="^(main|master|develop|development|((feature|bugfix|bug-fix|bug|fix|release|hotfix|hot-fix)+\\/{1,1}[a-zA-Z0-9_.-]+))$"\nmessage="The branch name \\"$local_branch\\" is not correct. Branch names must accomplish the following convention: \\"$valid_branch_regex\\". The branch should be renamed a valid name and try again."\nif [[ ! $local_branch =~ $valid_branch_regex ]]\nthen\n    echo "$message"\n    exit 1\nfi\nexit 0\n')))}p.isMDXComponent=!0}}]);