"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3277],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>s});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(n),s=o,f=d["".concat(p,".").concat(s)]||d[s]||u[s]||a;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7090:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={title:"Coding Problem 2022-09-09",slug:"coding-problem-2022-09-09",tags:["coding-problem","hard"],authors:["p0nch0d3v"]},i=void 0,l={permalink:"/coding-problem-2022-09-09",source:"@site/blog/2022-09-09-daily-coding-problem.md",title:"Coding Problem 2022-09-09",description:"Problem (hard):",date:"2022-09-09T00:00:00.000Z",formattedDate:"September 9, 2022",tags:[{label:"coding-problem",permalink:"/tags/coding-problem"},{label:"hard",permalink:"/tags/hard"}],hasTruncateMarker:!1,authors:[{name:"p0nch0 d3v",title:"Software Developer",url:"https://github.com/p0nch0d3v",imageURL:"https://github.com/p0nch0d3v.png",key:"p0nch0d3v"}],frontMatter:{title:"Coding Problem 2022-09-09",slug:"coding-problem-2022-09-09",tags:["coding-problem","hard"],authors:["p0nch0d3v"]},prevItem:{title:"Coding Problem 2022-09-10",permalink:"/coding-problem-2022-09-10"},nextItem:{title:"Coding Problem 2022-09-08",permalink:"/coding-problem-2022-09-08"}},p={authorsImageUrls:[void 0]},c=[{value:"Problem (hard):",id:"problem-hard",level:3},{value:"Proposed solution (Python):",id:"proposed-solution-python",level:3}],m={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"problem-hard"},"Problem (hard):"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Given an array of integers, return a new array such that each element at index ",(0,o.kt)("inlineCode",{parentName:"em"},"i")," of the new array is the product of all the numbers in the original array except the one at ",(0,o.kt)("inlineCode",{parentName:"em"},"i"),".")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"For example, if our input was ",(0,o.kt)("inlineCode",{parentName:"em"},"[1, 2, 3, 4, 5]"),", the expected output would be ",(0,o.kt)("inlineCode",{parentName:"em"},"[120, 60, 40, 30, 24]"),". If our input was ",(0,o.kt)("inlineCode",{parentName:"em"},"[3, 2, 1]"),", the expected output would be ",(0,o.kt)("inlineCode",{parentName:"em"},"[2, 3, 6]"),".")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Follow-up: what if you can't use division?")),(0,o.kt)("h3",{id:"proposed-solution-python"},"Proposed solution (Python):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def main(the_list, expected):\n    print('List: ', the_list)\n    print('Expected:', expected)\n\n    factor = 1\n    for item in the_list:\n        factor = factor * item\n    print('Factor:', factor)    \n    \n    result = []\n    for item in the_list:\n        i = 0\n        while (i < factor):\n            i = i + 1\n            if (i * item == factor):\n                result.append(i)\n                \n    print('Result:', result)\n\n    return 0\n\nif __name__ == \"__main__\":\n    main([1, 2, 3, 4, 5], [120, 60, 40, 30, 24])\n    main([3, 2, 1], [2, 3, 6])\n")))}u.isMDXComponent=!0}}]);