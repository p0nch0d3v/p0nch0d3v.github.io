"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2354],{3905:function(e,t,n){n.d(t,{kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=s(n),m=a,h=g["".concat(c,".").concat(m)]||g[m]||p[m]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7050:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"Git snippets",slug:"git-snippets",tags:["git","bash","sh"],authors:["p0nch0d3v"]},c="Git snippets",s={permalink:"/git-snippets",source:"@site/blog/2022-01-17-git-snippets.md",title:"Git snippets",description:"Here is a set of some git snippets, useful in some way.",date:"2022-01-17T00:00:00.000Z",formattedDate:"January 17, 2022",tags:[{label:"git",permalink:"/tags/git"},{label:"bash",permalink:"/tags/bash"},{label:"sh",permalink:"/tags/sh"}],truncated:!1,authors:[{name:"Sneaky Koder",title:"Software Developer",url:"https://github.com/p0nch0d3v",imageURL:"https://github.com/p0nch0d3v.png",key:"p0nch0d3v"}],frontMatter:{title:"Git snippets",slug:"git-snippets",tags:["git","bash","sh"],authors:["p0nch0d3v"]},prevItem:{title:"Some scripts",permalink:"/some-scripts"},nextItem:{title:"Docker CLI's",permalink:"/docker-clis"}},p={authorsImageUrls:[void 0]},u=[{value:"Git log",id:"git-log",level:3},{value:"Create alias",id:"create-alias",level:4},{value:"Git config user",id:"git-config-user",level:3},{value:"Git hook",id:"git-hook",level:3},{value:"Git hook to validate branch name",id:"git-hook-to-validate-branch-name",level:4}],g={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Here is a set of some git snippets, useful in some way.")),(0,i.kt)("h3",{id:"git-log"},"Git log"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git log --pretty=oneline --abbrev-commit --graph\ngit log --pretty --oneline --graph --abbrev-commit --relative-date\n")),(0,i.kt)("h4",{id:"create-alias"},"Create alias"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git config --global alias.graph-log 'log --pretty=oneline --abbrev-commit --graph'\ngit config --global alias.graph-log 'git log --pretty --oneline --graph --abbrev-commit --relative-date'\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"git-config-user"},"Git config user"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'git config --local user.email ""\ngit config --local user.name ""\n')),(0,i.kt)("h3",{id:"git-hook"},"Git hook"),(0,i.kt)("h4",{id:"git-hook-to-validate-branch-name"},"Git hook to validate branch name"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/sh\nremote="$1"\nurl="$2"\nLC_ALL=C\nlocal_branch="$(git rev-parse --abbrev-ref HEAD)"\nvalid_branch_regex="^(main|master|develop|development|((feature|bugfix|bug-fix|bug|fix|release|hotfix|hot-fix)+\\/{1,1}[a-zA-Z0-9_.-]+))$"\nmessage="The branch name \\"$local_branch\\" is not correct. Branch names must accomplish the following convention: \\"$valid_branch_regex\\". The branch should be renamed a valid name and try again."\nif [[ ! $local_branch =~ $valid_branch_regex ]]\nthen\n    echo "$message"\n    exit 1\nfi\nexit 0\n')))}m.isMDXComponent=!0}}]);