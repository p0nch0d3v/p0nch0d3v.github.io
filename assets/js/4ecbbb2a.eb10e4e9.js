"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2615],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=m(n),u=a,b=s["".concat(p,".").concat(u)]||s[u]||c[u]||o;return n?r.createElement(b,i(i({ref:t},d),{},{components:n})):r.createElement(b,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2062:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const o={title:"2022-09-19 (hard)",slug:"2022-09-19-hard",tags:["coding-problem","hard"],authors:["p0nch0d3v"],pagination_prev:"coding-problems/index",pagination_next:null},i=void 0,l={unversionedId:"coding-problems/hard/2022-09-19-hard",id:"coding-problems/hard/2022-09-19-hard",title:"2022-09-19 (hard)",description:"Problem:",source:"@site/docs/coding-problems/hard/2022-09-19-hard.md",sourceDirName:"coding-problems/hard",slug:"/coding-problems/hard/2022-09-19-hard",permalink:"/docs/coding-problems/hard/2022-09-19-hard",draft:!1,tags:[{label:"coding-problem",permalink:"/docs/tags/coding-problem"},{label:"hard",permalink:"/docs/tags/hard"}],version:"current",frontMatter:{title:"2022-09-19 (hard)",slug:"2022-09-19-hard",tags:["coding-problem","hard"],authors:["p0nch0d3v"],pagination_prev:"coding-problems/index",pagination_next:null},sidebar:"tutorialSidebar",previous:{title:"Coding Problems",permalink:"/docs/coding-problems/"}},p={},m=[{value:"Problem:",id:"problem",level:3},{value:"Proposed solution:",id:"proposed-solution",level:3}],d={toc:m};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"problem"},"Problem:"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"There exists a staircase with ",(0,a.kt)("inlineCode",{parentName:"em"},"N")," steps, and you can climb up either ",(0,a.kt)("inlineCode",{parentName:"em"},"1")," or ",(0,a.kt)("inlineCode",{parentName:"em"},"2")," steps at a time. Given ",(0,a.kt)("inlineCode",{parentName:"em"},"N"),", write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"For example, if ",(0,a.kt)("inlineCode",{parentName:"em"},"N")," is ",(0,a.kt)("inlineCode",{parentName:"em"},"4"),", then there are ",(0,a.kt)("inlineCode",{parentName:"em"},"5")," unique ways:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1, 1, 1, 1"),(0,a.kt)("li",{parentName:"ul"},"2, 1, 1"),(0,a.kt)("li",{parentName:"ul"},"1, 2, 1"),(0,a.kt)("li",{parentName:"ul"},"1, 1, 2"),(0,a.kt)("li",{parentName:"ul"},"2, 2")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"What if, instead of being able to climb ",(0,a.kt)("inlineCode",{parentName:"em"},"1")," or ",(0,a.kt)("inlineCode",{parentName:"em"},"2")," steps at a time, you could climb any number from a set of positive integers ",(0,a.kt)("inlineCode",{parentName:"em"},"X"),"? For example, if ",(0,a.kt)("inlineCode",{parentName:"em"},"X")," = {",(0,a.kt)("inlineCode",{parentName:"em"},"1"),", ",(0,a.kt)("inlineCode",{parentName:"em"},"3"),", ",(0,a.kt)("inlineCode",{parentName:"em"},"5"),"}, you could climb ",(0,a.kt)("inlineCode",{parentName:"em"},"1"),", ",(0,a.kt)("inlineCode",{parentName:"em"},"3"),", or ",(0,a.kt)("inlineCode",{parentName:"em"},"5")," steps at a time.")),(0,a.kt)("h3",{id:"proposed-solution"},"Proposed solution:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"TBD")))}c.isMDXComponent=!0}}]);