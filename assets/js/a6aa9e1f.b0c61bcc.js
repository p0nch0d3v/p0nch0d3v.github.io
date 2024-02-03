"use strict";
(self["webpackChunkblog"] = self["webpackChunkblog"] || []).push([[4976],{

/***/ 4328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlogListPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1504);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4971);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8264);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5756);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5864);
/* harmony import */ var _theme_BlogLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9496);
/* harmony import */ var _theme_BlogListPaginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2687);
/* harmony import */ var _theme_SearchMetadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8712);
/* harmony import */ var _theme_BlogPostItems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(992);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogListPageMetadata(props){const{metadata}=props;const{siteConfig:{title:siteTitle}}=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c)();const{blogDescription,blogTitle,permalink}=metadata;const isBlogOnlyMode=permalink==='/';const title=isBlogOnlyMode?siteTitle:blogTitle;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_6__/* .PageMetadata */ .U7,{title:title,description:blogDescription}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_SearchMetadata__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .c,{tag:"blog_posts_list"}));}function BlogListPageContent(props){const{metadata,items,sidebar}=props;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_BlogLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .c,{sidebar:sidebar},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_BlogPostItems__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .c,{items:items}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_BlogListPaginator__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .c,{metadata:metadata}));}function BlogListPage(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_6__/* .HtmlClassNameProvider */ .cr,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .c)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__/* .ThemeClassNames */ .W.wrapper.blogPages,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__/* .ThemeClassNames */ .W.page.blogListPage)},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BlogListPageMetadata,props),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BlogListPageContent,props));}

/***/ }),

/***/ 2687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ BlogListPaginator)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1504);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4357);
/* harmony import */ var _theme_PaginatorNavLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(308);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogListPaginator(props){const{metadata}=props;const{previousPage,nextPage}=metadata;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav",{className:"pagination-nav","aria-label":(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .G)({id:'theme.blog.paginator.navAriaLabel',message:'Blog list page navigation',description:'The ARIA label for the blog pagination'})},previousPage&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_PaginatorNavLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .c,{permalink:previousPage,title:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),nextPage&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_PaginatorNavLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .c,{permalink:nextPage,title:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:true}));}

/***/ }),

/***/ 992:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ BlogPostItems)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1504);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3152);
/* harmony import */ var _theme_BlogPostItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7792);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostItems(_ref){let{items,component:BlogPostItemComponent=_theme_BlogPostItem__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c}=_ref;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,items.map(_ref2=>{let{content:BlogPostContent}=_ref2;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__/* .BlogPostProvider */ .E,{key:BlogPostContent.metadata.permalink,content:BlogPostContent},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BlogPostItemComponent,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BlogPostContent,null)));}));}

/***/ })

}]);