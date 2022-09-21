"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9413],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>s});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),s=o,b=u["".concat(p,".").concat(s)]||u[s]||m[s]||a;return t?r.createElement(b,i(i({ref:n},d),{},{components:t})):r.createElement(b,i({ref:n},d))}));function s(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8309:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const a={title:"2022-09-16 (hard)",slug:"2022-09-16-hard",tags:["coding-problem","hard"],authors:["p0nch0d3v"],pagination_prev:"coding-problem/index",pagination_next:null},i=void 0,l={unversionedId:"coding-problem/2022-09-16-hard",id:"coding-problem/2022-09-16-hard",title:"2022-09-16 (hard)",description:"Problem:",source:"@site/docs/coding-problem/2022-09-16-hard.md",sourceDirName:"coding-problem",slug:"/coding-problem/2022-09-16-hard",permalink:"/docs/coding-problem/2022-09-16-hard",draft:!1,tags:[{label:"coding-problem",permalink:"/docs/tags/coding-problem"},{label:"hard",permalink:"/docs/tags/hard"}],version:"current",frontMatter:{title:"2022-09-16 (hard)",slug:"2022-09-16-hard",tags:["coding-problem","hard"],authors:["p0nch0d3v"],pagination_prev:"coding-problem/index",pagination_next:null},sidebar:"tutorialSidebar",previous:{title:"Coding Problems",permalink:"/docs/coding-problem/"}},p={},c=[{value:"Problem:",id:"problem",level:3},{value:"Proposed solution:",id:"proposed-solution",level:3}],d={toc:c};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"problem"},"Problem:"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be ",(0,o.kt)("inlineCode",{parentName:"em"},"0")," or negative.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"For example, ",(0,o.kt)("inlineCode",{parentName:"em"},"[2, 4, 6, 2, 5]")," should return ",(0,o.kt)("inlineCode",{parentName:"em"},"13"),", since we pick ",(0,o.kt)("inlineCode",{parentName:"em"},"2"),", ",(0,o.kt)("inlineCode",{parentName:"em"},"6"),", and ",(0,o.kt)("inlineCode",{parentName:"em"},"5"),". ",(0,o.kt)("inlineCode",{parentName:"em"},"[5, 1, 1, 5]")," should return ",(0,o.kt)("inlineCode",{parentName:"em"},"10"),", since we pick ",(0,o.kt)("inlineCode",{parentName:"em"},"5")," and ",(0,o.kt)("inlineCode",{parentName:"em"},"5"),".")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Follow-up: Can you do this in O(N) time and constant space?")),(0,o.kt)("h3",{id:"proposed-solution"},"Proposed solution:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"TBD")))}m.isMDXComponent=!0}}]);