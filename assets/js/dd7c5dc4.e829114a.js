"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8970],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),k=s(n),d=a,m=k["".concat(i,".").concat(d)]||k[d]||u[d]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=k;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8180:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"Use Jenkins on Dokku",slug:"use-jenkins-on-dokku",tags:["jenkins","dokku"],authors:["p0nch0d3v"]},l=void 0,p={permalink:"/use-jenkins-on-dokku",source:"@site/blog/2022-05-05-deploy-jenkins-in-dokku.md",title:"Use Jenkins on Dokku",description:"Create the app on dokku.",date:"2022-05-05T00:00:00.000Z",formattedDate:"May 5, 2022",tags:[{label:"jenkins",permalink:"/tags/jenkins"},{label:"dokku",permalink:"/tags/dokku"}],hasTruncateMarker:!1,authors:[{name:"p0nch0 d3v",title:"Software Engineer",url:"https://github.com/p0nch0d3v",imageURL:"https://github.com/p0nch0d3v.png",key:"p0nch0d3v"}],frontMatter:{title:"Use Jenkins on Dokku",slug:"use-jenkins-on-dokku",tags:["jenkins","dokku"],authors:["p0nch0d3v"]},prevItem:{title:"Change Docker storage location",permalink:"/change-docker-storage-location"},nextItem:{title:"Host domain on local network",permalink:"/host-domain-local-net"}},i={authorsImageUrls:[void 0]},s=[],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Create the app on dokku."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dokku apps:create j\n")),(0,a.kt)("p",null,"Get ",(0,a.kt)("inlineCode",{parentName:"p"},"Jenkins")," docker image"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull jenkins/jenkins:lts-jdk11\n")),(0,a.kt)("p",null,"Tag the pulled image as the current application image"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker tag jenkins/jenkins:lts-jdk11 dokku/j:latest\n")),(0,a.kt)("p",null,"Deploy the tagged image to the application"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dokku tags:deploy j latest\n")),(0,a.kt)("p",null,"Map the exposed port ",(0,a.kt)("inlineCode",{parentName:"p"},"8080")," from Jenkins to ",(0,a.kt)("inlineCode",{parentName:"p"},"80")," port"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dokku proxy:set j http:80:8080\ndokku proxy:ports-add j 80:8080\n")),(0,a.kt)("p",null,"Optional, create a mount point for the whole jenkins configurations."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dokku storage:mount j /home/sneakykoder/jenkins_home:/var/jenkins_home\n")))}u.isMDXComponent=!0}}]);