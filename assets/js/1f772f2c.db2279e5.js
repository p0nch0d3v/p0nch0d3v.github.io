"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[531],{3819:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return k},toc:function(){return p},default:function(){return d}});var s=r(7462),o=r(3366),n=(r(7294),r(3905)),a=["components"],l={title:"Some scripts",slug:"some-scripts",tags:["bash","powershell"],authors:["sneakykoder"]},c="Some scripts",u={permalink:"/some-scripts",source:"@site/blog/2022-01-24-some-scripts.md",title:"Some scripts",description:"Here is a set of (useful in some way) scripts in different languages such as bash, powershell, etc.",date:"2022-01-24T00:00:00.000Z",formattedDate:"January 24, 2022",tags:[{label:"bash",permalink:"/tags/bash"},{label:"powershell",permalink:"/tags/powershell"}],truncated:!1,authors:[{name:"Sneaky Koder",title:"Software Developer",url:"https://github.com/sneakykoder",imageURL:"https://github.com/sneakykoder.png",key:"sneakykoder"}],nextItem:{title:"Git snippets",permalink:"/git-snippets"}},k={authorsImageUrls:[void 0]},p=[{value:"Docker",id:"docker",children:[{value:"Clean up docker",id:"clean-up-docker",children:[],level:3}],level:2}],i={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,n.kt)("wrapper",(0,s.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Here is a set of (useful in some way) scripts in different languages such as bash, powershell, etc.")),(0,n.kt)("h2",{id:"docker"},"Docker"),(0,n.kt)("h3",{id:"clean-up-docker"},"Clean up docker"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'docker rm $(docker ps -a -q -f="status=exited")\ndocker rm $(docker ps -a -q -f="status=dead")\ndocker rmi $(docker images -a -q -f="dangling=true")\ndocker volume rm $(docker volume ls -q)\ndocker network rm $(docker network ls -q)\n\ndocker ps -a\ndocker images -a\ndocker volume ls\ndocker network ls\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/sneakykoder/scripts-labs/master/docker_clean_up.sh"},"Download bash"),"\n|\n",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/sneakykoder/scripts-labs/master/docker_clean_up.ps1"},"Download powershell"))))}d.isMDXComponent=!0}}]);