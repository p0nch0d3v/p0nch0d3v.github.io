"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2057],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),m=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=m(r),u=o,f=d["".concat(p,".").concat(u)]||d[u]||s[u]||l;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,i=new Array(l);i[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var m=2;m<l;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},964:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>a,toc:()=>m});var n=r(7462),o=(r(7294),r(3905));const l={title:"Coding Problem 2022-09-10 (medium)",slug:"coding-problem-2022-09-10",tags:["coding-problem","medium"],authors:["p0nch0d3v"]},i=void 0,a={permalink:"/coding-problem-2022-09-10",source:"@site/blog/2022-09-10-daily-coding-problem.md",title:"Coding Problem 2022-09-10 (medium)",description:"Problem:",date:"2022-09-10T00:00:00.000Z",formattedDate:"September 10, 2022",tags:[{label:"coding-problem",permalink:"/tags/coding-problem"},{label:"medium",permalink:"/tags/medium"}],hasTruncateMarker:!1,authors:[{name:"p0nch0 d3v",title:"Software Developer",url:"https://github.com/p0nch0d3v",imageURL:"https://github.com/p0nch0d3v.png",key:"p0nch0d3v"}],frontMatter:{title:"Coding Problem 2022-09-10 (medium)",slug:"coding-problem-2022-09-10",tags:["coding-problem","medium"],authors:["p0nch0d3v"]},prevItem:{title:"Coding Problem 2022-09-11 (hard)",permalink:"/coding-problem-2022-09-11"},nextItem:{title:"Coding Problem 2022-09-09 (hard)",permalink:"/coding-problem-2022-09-09"}},p={authorsImageUrls:[void 0]},m=[{value:"Problem:",id:"problem",level:3},{value:"Proposed solution:",id:"proposed-solution",level:3}],c={toc:m};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"problem"},"Problem:"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Given the root to a binary tree, implement ",(0,o.kt)("inlineCode",{parentName:"em"},"serialize(root)"),", which serializes the tree into a string, and ",(0,o.kt)("inlineCode",{parentName:"em"},"deserialize(s)"),", which deserializes the string back into the tree.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"For example, given the following ",(0,o.kt)("inlineCode",{parentName:"em"},"Node")," class")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"class Node:\n    def __init__(self, val, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"The following test should pass:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"node = Node('root', Node('left', Node('left.left')), Node('right'))\nassert deserialize(serialize(node)).left.left.val == 'left.left'\n")),(0,o.kt)("h3",{id:"proposed-solution"},"Proposed solution:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"TBD")))}s.isMDXComponent=!0}}]);