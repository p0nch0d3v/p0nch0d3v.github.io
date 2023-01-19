"use strict";
(self["webpackChunkblog"] = self["webpackChunkblog"] || []).push([[4047],{

/***/ 4670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CodeFilePreview)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9324);
/* harmony import */ var react_syntax_highlighter_dist_esm_styles_hljs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7158);
function CodeFilePreview(_ref){let{url,lang,urlDescription}=_ref;const[content,set_content]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('fetching file ...');(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(async()=>{set_content(await getContent());},[]);const getContent=async()=>{const response=await fetch(url);const content=await response.text();return content;};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{language:lang,style:react_syntax_highlighter_dist_esm_styles_hljs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,showLineNumbers:true,wrapLines:true},content),urlDescription?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:url,target:"_blank"},urlDescription):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null));};

/***/ }),

/***/ 1225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assets": () => (/* binding */ assets),
/* harmony export */   "contentTitle": () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   "frontMatter": () => (/* binding */ frontMatter),
/* harmony export */   "metadata": () => (/* binding */ metadata),
/* harmony export */   "toc": () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _home_runner_work_blog_blog_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7462);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);
/* harmony import */ var _site_src_components_CodeFilePreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4670);
/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */const frontMatter={title:'Some scripts',slug:'some-scripts',tags:['bash','powershell'],authors:['p0nch0d3v']};const contentTitle='Some scripts';const metadata={"permalink":"/some-scripts","source":"@site/blog/2022-01-24-some-scripts.mdx","title":"Some scripts","description":"Here is a set of (useful in some way) scripts in different languages such as bash, powershell, etc.","date":"2022-01-24T00:00:00.000Z","formattedDate":"January 24, 2022","tags":[{"label":"bash","permalink":"/tags/bash"},{"label":"powershell","permalink":"/tags/powershell"}],"hasTruncateMarker":false,"authors":[{"name":"p0nch0 d3v","title":"Software Engineer","url":"https://github.com/p0nch0d3v","imageURL":"https://github.com/p0nch0d3v.png","key":"p0nch0d3v"}],"frontMatter":{"title":"Some scripts","slug":"some-scripts","tags":["bash","powershell"],"authors":["p0nch0d3v"]},"prevItem":{"title":"Linux Shell snippets","permalink":"/linux-shell-snippets"},"nextItem":{"title":"Git snippets","permalink":"/git-snippets"}};const assets={"authorsImageUrls":[undefined]};const toc=[{value:'Docker',id:'docker',level:2},{value:'Clean up docker',id:'clean-up-docker',level:3},{value:'Shell',id:'shell',level:4},{value:'Powershell',id:'powershell',level:4},{value:'Purge docker',id:'purge-docker',level:3},{value:'Shell',id:'shell-1',level:4},{value:'Powershell',id:'powershell-1',level:4}];const layoutProps={toc};const MDXLayout="wrapper";function MDXContent(_ref){let{components,...props}=_ref;return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_blog_blog_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"blockquote"},`Here is a set of (useful in some way) scripts in different languages such as bash, powershell, etc.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"docker"},`Docker`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"clean-up-docker"},`Clean up docker`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"shell"},`Shell`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_components_CodeFilePreview__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{url:"https://raw.githubusercontent.com/p0nch0d3v/scripts-labs/master/docker_clean_up.sh",urlDescription:"Download",lang:"bash",mdxType:"CodeFilePreview"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr",null),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"powershell"},`Powershell`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_components_CodeFilePreview__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{url:"https://raw.githubusercontent.com/p0nch0d3v/scripts-labs/master/docker_clean_up.ps1",urlDescription:"Download",lang:"powershell",mdxType:"CodeFilePreview"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"purge-docker"},`Purge docker`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"shell-1"},`Shell`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_components_CodeFilePreview__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{url:"https://raw.githubusercontent.com/p0nch0d3v/scripts-labs/master/docker_purge_all.sh",urlDescription:"Download",lang:"bash",mdxType:"CodeFilePreview"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr",null),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"powershell-1"},`Powershell`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_components_CodeFilePreview__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{url:"https://raw.githubusercontent.com/p0nch0d3v/scripts-labs/master/docker_purge_all.ps1",urlDescription:"Download",lang:"powershell",mdxType:"CodeFilePreview"}));};MDXContent.isMDXComponent=true;

/***/ })

}]);