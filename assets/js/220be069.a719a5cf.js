"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2187],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>k});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(o),k=n,u=m["".concat(s,".").concat(k)]||m[k]||d[k]||a;return o?r.createElement(u,c(c({ref:t},p),{},{components:o})):r.createElement(u,c({ref:t},p))}));function k(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=o[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},4165:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=o(7462),n=(o(7294),o(3905));const a={title:"Docker CLI's",slug:"docker-clis",tags:["docker","bash","python","dotNetCore","node-js"],authors:["p0nch0d3v"]},c="Docker CLI's",i={permalink:"/docker-clis",source:"@site/blog/2021-10-15-my-docker-clis.md",title:"Docker CLI's",description:"A collection of custom docker images as CLI's",date:"2021-10-15T00:00:00.000Z",formattedDate:"October 15, 2021",tags:[{label:"docker",permalink:"/tags/docker"},{label:"bash",permalink:"/tags/bash"},{label:"python",permalink:"/tags/python"},{label:"dotNetCore",permalink:"/tags/dot-net-core"},{label:"node-js",permalink:"/tags/node-js"}],hasTruncateMarker:!0,authors:[{name:"p0nch0 d3v",title:"Software Engineer",url:"https://github.com/p0nch0d3v",imageURL:"https://github.com/p0nch0d3v.png",key:"p0nch0d3v"}],frontMatter:{title:"Docker CLI's",slug:"docker-clis",tags:["docker","bash","python","dotNetCore","node-js"],authors:["p0nch0d3v"]},prevItem:{title:"Git snippets",permalink:"/git-snippets"}},s={authorsImageUrls:[void 0]},l=[{value:"A collection of custom docker images as CLI&#39;s",id:"a-collection-of-custom-docker-images-as-clis",level:2},{value:"dotnet core with entity framework",id:"dotnet-core-with-entity-framework",level:2},{value:"Docker image:",id:"docker-image",level:3},{value:"dotnet core with entity framework and node-js",id:"dotnet-core-with-entity-framework-and-node-js",level:2},{value:"Docker image:",id:"docker-image-1",level:3}],p={toc:l};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"a-collection-of-custom-docker-images-as-clis"},"A collection of custom docker images as CLI's"),(0,n.kt)("p",null,"There was a need to run different technologies in local dev environment, such as .net-core, node js, python, ruby, etc. without install them."),(0,n.kt)("p",null,"A decision mas made to create a set of docker images with some pre-installed apps/plugins/extensions according to the technology to help with the development process."),(0,n.kt)("h2",{id:"dotnet-core-with-entity-framework"},"dotnet core with entity framework"),(0,n.kt)("h3",{id:"docker-image"},"Docker image:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/p0nch0d3v/dotnet-sdk/tags"},"https://hub.docker.com/r/p0nch0d3v/dotnet-sdk/tags")),(0,n.kt)("h3",{parentName:"blockquote",id:"repository"},"Repository:"),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/p0nch0d3v/docker-images/blob/master/dotnet-sdk/Dockerfile"},"https://github.com/p0nch0d3v/docker-images/blob/master/dotnet-sdk/Dockerfile")),(0,n.kt)("h3",{parentName:"blockquote",id:"how-to-use-it"},"How to use it"),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm --interactive --tty --volume ${PWD}:/app p0nch0d3v/dotnet-sdk bash\n"))),(0,n.kt)("h2",{id:"dotnet-core-with-entity-framework-and-node-js"},"dotnet core with entity framework and node-js"),(0,n.kt)("h3",{id:"docker-image-1"},"Docker image:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/p0nch0d3v/dotnet-sdk-node/tags"},"https://hub.docker.com/r/p0nch0d3v/dotnet-sdk-node/tags")),(0,n.kt)("h3",{parentName:"blockquote",id:"repository-1"},"Repository:"),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/p0nch0d3v/docker-images/blob/master/dotnet-sdk-node/Dockerfile"},"https://github.com/p0nch0d3v/docker-images/blob/master/dotnet-sdk-node/Dockerfile")),(0,n.kt)("h3",{parentName:"blockquote",id:"how-to-use-it-1"},"How to use it:"),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm --interactive --tty --volume ${PWD}:/app p0nch0d3v/dotnet-sdk-node bash\n"))))}d.isMDXComponent=!0}}]);