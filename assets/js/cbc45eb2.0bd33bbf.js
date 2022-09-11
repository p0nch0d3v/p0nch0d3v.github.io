"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8010],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8907:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={title:"Coding Problem 2022-09-08",slug:"coding-problem-2022-09-08",tags:["coding-problem"],authors:["p0nch0d3v"]},l=void 0,a={permalink:"/coding-problem-2022-09-08",source:"@site/blog/2022-09-08-daily-coding-problem.md",title:"Coding Problem 2022-09-08",description:"Problem:",date:"2022-09-08T00:00:00.000Z",formattedDate:"September 8, 2022",tags:[{label:"coding-problem",permalink:"/tags/coding-problem"}],hasTruncateMarker:!1,authors:[{name:"p0nch0 d3v",title:"Software Developer",url:"https://github.com/p0nch0d3v",imageURL:"https://github.com/p0nch0d3v.png",key:"p0nch0d3v"}],frontMatter:{title:"Coding Problem 2022-09-08",slug:"coding-problem-2022-09-08",tags:["coding-problem"],authors:["p0nch0d3v"]},nextItem:{title:"After Install Mint 21",permalink:"/after-install-mint-21"}},c={authorsImageUrls:[void 0]},p=[{value:"Problem:",id:"problem",level:3},{value:"Proposed solution (Python):",id:"proposed-solution-python",level:3}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"problem"},"Problem:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Given a list of numbers and a number k, return whether any two numbers from the list add up to k.\nFor example, given ","[10, 15, 3, 7]"," and k of 17, return true since 10 + 7 is 17.\nBonus: Can you do this in one pass?")),(0,o.kt)("h3",{id:"proposed-solution-python"},"Proposed solution (Python):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def main ():\n    my_list = [10, 15, 3, 7]\n    k = 17\n    i = 0\n    j = 0\n    success = False\n    while (i < len(my_list)):\n        while (j < len(my_list)):\n            if (i != j):\n                if (my_list[i] + my_list[j] == k):\n                    print(my_list[i])\n                    print(my_list[j])\n                    success = True\n            j = j + 1\n            if (success):\n                break\n        j = 0\n        i = i + 1\n        if (success):\n            break\n    print(success)\nmain()\n")))}u.isMDXComponent=!0}}]);