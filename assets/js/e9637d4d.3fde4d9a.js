"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9418],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>s});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=r.createContext({}),p=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(m.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,m=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),s=o,b=u["".concat(m,".").concat(s)]||u[s]||d[s]||i;return t?r.createElement(b,a(a({ref:n},c),{},{components:t})):r.createElement(b,a({ref:n},c))}));function s(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4584:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const i={title:"2022-09-12 (medium)",slug:"2022-09-12-medium",tags:["coding-problem","medium"],authors:["p0nch0d3v"],pagination_prev:"coding-problems/index",pagination_next:null},a=void 0,l={unversionedId:"coding-problems/medium/2022-09-12-medium",id:"coding-problems/medium/2022-09-12-medium",title:"2022-09-12 (medium)",description:"Problem:",source:"@site/docs/coding-problems/medium/2022-09-12-medium.md",sourceDirName:"coding-problems/medium",slug:"/coding-problems/medium/2022-09-12-medium",permalink:"/docs/coding-problems/medium/2022-09-12-medium",draft:!1,tags:[{label:"coding-problem",permalink:"/docs/tags/coding-problem"},{label:"medium",permalink:"/docs/tags/medium"}],version:"current",frontMatter:{title:"2022-09-12 (medium)",slug:"2022-09-12-medium",tags:["coding-problem","medium"],authors:["p0nch0d3v"],pagination_prev:"coding-problems/index",pagination_next:null},sidebar:"tutorialSidebar",previous:{title:"Coding Problems",permalink:"/docs/coding-problems/"}},m={},p=[{value:"Problem:",id:"problem",level:3},{value:"Proposed solution:",id:"proposed-solution",level:3}],c={toc:p};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"problem"},"Problem:"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"em"},"cons(a, b)")," constructs a pair, and ",(0,o.kt)("inlineCode",{parentName:"em"},"car(pair)")," and ",(0,o.kt)("inlineCode",{parentName:"em"},"cdr(pair)")," returns the first and last element of that pair. For example, ",(0,o.kt)("inlineCode",{parentName:"em"},"car(cons(3, 4))")," returns ",(0,o.kt)("inlineCode",{parentName:"em"},"3"),", and ",(0,o.kt)("inlineCode",{parentName:"em"},"cdr(cons(3, 4))")," returns ",(0,o.kt)("inlineCode",{parentName:"em"},"4"),".")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Given this implementation of cons:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"def cons(a, b):\n    def pair(f):\n        return f(a, b)\n    return pair\n")),(0,o.kt)("p",null,"Implement ",(0,o.kt)("inlineCode",{parentName:"p"},"car")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"cdr"),"."),(0,o.kt)("h3",{id:"proposed-solution"},"Proposed solution:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"TBD")))}d.isMDXComponent=!0}}]);