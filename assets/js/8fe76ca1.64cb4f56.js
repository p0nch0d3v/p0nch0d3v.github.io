"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4130],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),p=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(t),u=o,h=m["".concat(d,".").concat(u)]||m[u]||c[u]||a;return t?r.createElement(h,i(i({ref:n},s),{},{components:t})):r.createElement(h,i({ref:n},s))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2362:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const a={title:"2022-09-13 (hard)",slug:"2022-09-13-hard",tags:["coding-problem","hard"],authors:["p0nch0d3v"],pagination_prev:"coding-problems/index",pagination_next:null},i=void 0,l={unversionedId:"coding-problems/hard/2022-09-13-hard",id:"coding-problems/hard/2022-09-13-hard",title:"2022-09-13 (hard)",description:"Problem:",source:"@site/docs/coding-problems/hard/2022-09-13-hard.md",sourceDirName:"coding-problems/hard",slug:"/coding-problems/hard/2022-09-13-hard",permalink:"/docs/coding-problems/hard/2022-09-13-hard",draft:!1,tags:[{label:"coding-problem",permalink:"/docs/tags/coding-problem"},{label:"hard",permalink:"/docs/tags/hard"}],version:"current",frontMatter:{title:"2022-09-13 (hard)",slug:"2022-09-13-hard",tags:["coding-problem","hard"],authors:["p0nch0d3v"],pagination_prev:"coding-problems/index",pagination_next:null},sidebar:"tutorialSidebar",previous:{title:"Coding Problems",permalink:"/docs/coding-problems/"}},d={},p=[{value:"Problem:",id:"problem",level:3},{value:"Proposed solution:",id:"proposed-solution",level:3}],s={toc:p};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"problem"},"Problem:"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"An XOR linked list is a more memory efficient doubly linked list. Instead of each node holding ",(0,o.kt)("inlineCode",{parentName:"em"},"next")," and ",(0,o.kt)("inlineCode",{parentName:"em"},"prev")," fields, it holds a field named ",(0,o.kt)("inlineCode",{parentName:"em"},"both"),", which is an XOR of the next node and the previous node. Implement an XOR linked list; it has an ",(0,o.kt)("inlineCode",{parentName:"em"},"add(element)")," which adds the element to the end, and a ",(0,o.kt)("inlineCode",{parentName:"em"},"get(index)")," which returns the node at index.")),(0,o.kt)("p",null,"If using a language that has no pointers (such as ",(0,o.kt)("inlineCode",{parentName:"p"},"Python"),"), you can assume you have access to ",(0,o.kt)("inlineCode",{parentName:"p"},"get_pointer")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"dereference_pointer")," functions that converts between nodes and memory addresses."),(0,o.kt)("h3",{id:"proposed-solution"},"Proposed solution:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"TBD")))}c.isMDXComponent=!0}}]);