"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4047],{3905:function(e,t,r){r.d(t,{kt:function(){return h}});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),h=i(r),f=l,d=h["".concat(c,".").concat(f)]||h[f]||u[f]||o;return r?n.createElement(d,s(s({ref:t},p),{},{components:r})):n.createElement(d,s({ref:t},p))}));function h(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,s=new Array(o);s[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:l,s[1]=a;for(var i=2;i<o;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4670:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(5861),l=r(7757),o=r.n(l),s=r(7294);function a(e){var t=e.url,r=e.lang,l=e.urlDescription,a=(0,s.useState)("fetching file ..."),c=a[0],i=a[1];(0,s.useEffect)((0,n.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=i,e.next=3,u();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)}))),[]);var u=function(){var e=(0,n.Z)(o().mark((function e(){var r,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return r=e.sent,e.next=5,r.text();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return s.createElement(s.Fragment,null,s.createElement("pre",{style:{maxHeight:"25vh",overflow:"scroll"}},s.createElement("code",{lang:r},c)),s.createElement("a",{href:t,target:"_blank"},l),s.createElement("br",null))}},1225:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return h}});var n=r(7462),l=r(3366),o=(r(7294),r(3905)),s=r(4670),a=["components"],c={title:"Some scripts",slug:"some-scripts",tags:["bash","powershell"],authors:["sneakykoder"]},i="Some scripts",u={permalink:"/some-scripts",source:"@site/blog/2022-01-24-some-scripts.mdx",title:"Some scripts",description:"Here is a set of (useful in some way) scripts in different languages such as bash, powershell, etc.",date:"2022-01-24T00:00:00.000Z",formattedDate:"January 24, 2022",tags:[{label:"bash",permalink:"/tags/bash"},{label:"powershell",permalink:"/tags/powershell"}],truncated:!1,authors:[{name:"Sneaky Koder",title:"Software Developer",url:"https://github.com/sneakykoder",imageURL:"https://github.com/sneakykoder.png",key:"sneakykoder"}],frontMatter:{title:"Some scripts",slug:"some-scripts",tags:["bash","powershell"],authors:["sneakykoder"]},prevItem:{title:"Linux Shell snippets",permalink:"/linux-shell-snippets"},nextItem:{title:"Git snippets",permalink:"/git-snippets"}},p={authorsImageUrls:[void 0]},h=[{value:"Docker",id:"docker",level:2},{value:"Clean up docker",id:"clean-up-docker",level:3},{value:"Shell",id:"shell",level:4},{value:"Powershell",id:"powershell",level:4},{value:"Purge docker",id:"purge-docker",level:3},{value:"Shell",id:"shell-1",level:4},{value:"Powershell",id:"powershell-1",level:4}],f={toc:h};function d(e){var t=e.components,r=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Here is a set of (useful in some way) scripts in different languages such as bash, powershell, etc.")),(0,o.kt)("h2",{id:"docker"},"Docker"),(0,o.kt)("h3",{id:"clean-up-docker"},"Clean up docker"),(0,o.kt)("h4",{id:"shell"},"Shell"),(0,o.kt)(s.Z,{url:"https://raw.githubusercontent.com/sneakykoder/scripts-labs/master/docker_clean_up.sh",urlDescription:"Download",lang:"shell",mdxType:"CodeFilePreview"}),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"powershell"},"Powershell"),(0,o.kt)(s.Z,{url:"https://raw.githubusercontent.com/sneakykoder/scripts-labs/master/docker_clean_up.ps1",urlDescription:"Download",lang:"shell",mdxType:"CodeFilePreview"}),(0,o.kt)("h3",{id:"purge-docker"},"Purge docker"),(0,o.kt)("h4",{id:"shell-1"},"Shell"),(0,o.kt)(s.Z,{url:"https://raw.githubusercontent.com/sneakykoder/scripts-labs/master/docker_purge_all.sh",urlDescription:"Download",lang:"shell",mdxType:"CodeFilePreview"}),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"powershell-1"},"Powershell"),(0,o.kt)(s.Z,{url:"https://raw.githubusercontent.com/sneakykoder/scripts-labs/master/docker_purge_all.ps1",urlDescription:"Download",lang:"shell",mdxType:"CodeFilePreview"}))}d.isMDXComponent=!0}}]);