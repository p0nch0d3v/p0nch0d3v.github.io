"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4623],{3905:function(e,t,n){n.d(t,{kt:function(){return f}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=u(n),m=l,d=f["".concat(i,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2550:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(7462),l=n(3366),o=(n(7294),n(3905)),a=["components"],s={title:"Linux Shell snippets",slug:"linux-shell-snippets",tags:["linux","bash","sh"],authors:["sneakykoder"]},i="Linux shell snippets",u={permalink:"/linux-shell-snippets",source:"@site/blog/2022-02-20-linux-shell-snippets.md",title:"Linux Shell snippets",description:"Here is a set of some git snippets, useful in some way.",date:"2022-02-20T00:00:00.000Z",formattedDate:"February 20, 2022",tags:[{label:"linux",permalink:"/tags/linux"},{label:"bash",permalink:"/tags/bash"},{label:"sh",permalink:"/tags/sh"}],truncated:!1,authors:[{name:"Sneaky Koder",title:"Software Developer",url:"https://github.com/sneakykoder",imageURL:"https://github.com/sneakykoder.png",key:"sneakykoder"}],frontMatter:{title:"Linux Shell snippets",slug:"linux-shell-snippets",tags:["linux","bash","sh"],authors:["sneakykoder"]},prevItem:{title:"Host domain on local network",permalink:"/host-domain-local-net"},nextItem:{title:"Some scripts",permalink:"/some-scripts"}},p={authorsImageUrls:[void 0]},c=[{value:"List files/directories",id:"list-filesdirectories",level:3},{value:"Find forlders recursively",id:"find-forlders-recursively",level:3}],f={toc:c};function m(e){var t=e.components,n=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Here is a set of some git snippets, useful in some way.")),(0,o.kt)("h3",{id:"list-filesdirectories"},"List files/directories"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ls -a -l -h --color=always\n")),(0,o.kt)("p",null,"Where:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"-a      = show all files included the dots(.)\n-l      = show in long format\n-h      = Show in units in humat readable format\n--color = Output colored\n")),(0,o.kt)("h3",{id:"find-forlders-recursively"},"Find forlders recursively"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'find . -name "node_modules" -type d -prune | xargs du -chs\n')))}m.isMDXComponent=!0}}]);