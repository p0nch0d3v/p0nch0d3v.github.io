"use strict";
(self["webpackChunkblog"] = self["webpackChunkblog"] || []).push([[1511],{

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

/***/ 8615:
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
/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */const frontMatter={title:'2022-09-20 (hard) [✔️]',slug:'2022-09-20-hard',tags:['coding-problem','hard'],authors:['p0nch0d3v'],pagination_prev:'coding-problems/index',pagination_next:null};const contentTitle=undefined;const metadata={"unversionedId":"coding-problems/hard/2022-09-20-hard","id":"coding-problems/hard/2022-09-20-hard","title":"2022-09-20 (hard) [✔️]","description":"Problem:","source":"@site/docs/coding-problems/hard/2022-09-20-hard.md","sourceDirName":"coding-problems/hard","slug":"/coding-problems/hard/2022-09-20-hard","permalink":"/docs/coding-problems/hard/2022-09-20-hard","draft":false,"tags":[{"label":"coding-problem","permalink":"/docs/tags/coding-problem"},{"label":"hard","permalink":"/docs/tags/hard"}],"version":"current","frontMatter":{"title":"2022-09-20 (hard) [✔️]","slug":"2022-09-20-hard","tags":["coding-problem","hard"],"authors":["p0nch0d3v"],"pagination_prev":"coding-problems/index","pagination_next":null},"sidebar":"tutorialSidebar","previous":{"title":"Coding Problems","permalink":"/docs/coding-problems/"}};const assets={};const toc=[{value:'Problem:',id:'problem',level:3},{value:'Sketch:',id:'sketch',level:3}];const layoutProps={toc};const MDXLayout="wrapper";function MDXContent(_ref){let{components,...props}=_ref;return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_blog_blog_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"problem"},`Problem:`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"p"},`Given an integer `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"em"},`k`),` and a string `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"em"},`s`),`, find the length of the longest substring that contains at most `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"em"},`k`),` distinct characters.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"p"},`For example, given `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"em"},`s`),` = "abcba" and `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"em"},`k`),` = `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"em"},`2`),`, the longest substring with k distinct characters is "bcb".`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"sketch"},`Sketch:`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:"/coding-problems/2022-09-20-hard-1.png"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("details",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("summary",null,"Proposed solution # 1 - (Python)"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_components_CodeFilePreview__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{url:"/coding-problems/2022-09-20-hard-1.py",lang:"python",mdxType:"CodeFilePreview"}))));};MDXContent.isMDXComponent=true;

/***/ })

}]);