"use strict";
(self["webpackChunkblog"] = self["webpackChunkblog"] || []).push([[1501],{

/***/ 3905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Zo": () => (/* binding */ MDXProvider),
/* harmony export */   "kt": () => (/* binding */ createElement)
/* harmony export */ });
/* unused harmony exports MDXContext, useMDXComponents, withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, args);
}




/***/ }),

/***/ 2235:
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
/* harmony import */ var _home_runner_work_blog_blog_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7462);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);
/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */const frontMatter={title:'Make chocolate [✔️]',slug:'codingbat-make_chocolate',tags:['coding-problem','hard'],authors:['p0nch0d3v'],pagination_prev:'coding-problems/index',pagination_next:null};const contentTitle=undefined;const metadata={"unversionedId":"coding-problems/codingbat.com/make_chocolate","id":"coding-problems/codingbat.com/make_chocolate","title":"Make chocolate [✔️]","description":"We want make a package of goal kilos of chocolate. We have small bars (1 kilo each) and big bars (5 kilos each). Return the number of small bars to use, assuming we always use big bars before small bars. Return -1 if it can't be done.","source":"@site/docs/coding-problems/codingbat.com/make_chocolate.md","sourceDirName":"coding-problems/codingbat.com","slug":"/coding-problems/codingbat.com/codingbat-make_chocolate","permalink":"/docs/coding-problems/codingbat.com/codingbat-make_chocolate","draft":false,"tags":[{"label":"coding-problem","permalink":"/docs/tags/coding-problem"},{"label":"hard","permalink":"/docs/tags/hard"}],"version":"current","frontMatter":{"title":"Make chocolate [✔️]","slug":"codingbat-make_chocolate","tags":["coding-problem","hard"],"authors":["p0nch0d3v"],"pagination_prev":"coding-problems/index","pagination_next":null},"sidebar":"tutorialSidebar","previous":{"title":"Coding Problems","permalink":"/docs/coding-problems/"}};const assets={};const toc=[];const layoutProps={toc};const MDXLayout="wrapper";function MDXContent(_ref){let{components,...props}=_ref;return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_blog_blog_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"p"},`We want make a package of goal kilos of chocolate. We have small bars (1 kilo each) and big bars (5 kilos each). Return the number of small bars to use, assuming we always use big bars before small bars. Return -1 if it can't be done.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://codingbat.com/prob/p190859"},`Reference`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("details",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("summary",null,"Proposed solution # 1 - (Python)"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-python"},`def make_chocolate(small, big, goal):
    remain = goal - (big * 5)
    if (remain == 0):
        return 0
    while (remain < 0):
        remain = remain + 5
    remain = remain - small
    if (remain <= 0):
        return small + remain
    return -1

def main():
    assert make_chocolate(4, 1, 9) == 4
    assert make_chocolate(4, 1, 10) == -1
    assert make_chocolate(4, 1, 7) == 2
    assert make_chocolate(6, 2, 7) == 2
    assert make_chocolate(4, 1, 5) == 0
    assert make_chocolate(4, 1, 4) == 4
    assert make_chocolate(5, 4, 9) == 4
    assert make_chocolate(9, 3, 18) == 3
    assert make_chocolate(3, 1, 9) == -1
    assert make_chocolate(1, 2, 7) == -1
    assert make_chocolate(1, 2, 6) == 1
    assert make_chocolate(1, 2, 5) == 0
    assert make_chocolate(6, 1, 10) == 5
    assert make_chocolate(6, 1, 11) == 6
    assert make_chocolate(6, 1, 12) == -1
    assert make_chocolate(6, 1, 13) == -1
    assert make_chocolate(6, 2, 10) == 0
    assert make_chocolate(6, 2, 11) == 1
    assert make_chocolate(6, 2, 12) == 2
    assert make_chocolate(60, 100, 550) == 50
    assert make_chocolate(1000, 1000000, 5000006) == 6
    assert make_chocolate(7, 1, 12) == 7
    assert make_chocolate(7, 1, 13) == -1
    assert make_chocolate(7, 2, 13) == 3

if __name__ == "__main__":
    main()
`)))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("details",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("summary",null,"Proposed solution # 2 - (Python)"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-python"},`def make_chocolate(small, big, goal):
    remain = goal
    remain_big = big
    remain_small = small
    used_big = 0
    used_small = 0
    
    while (big > 0 and remain_big > 0 and remain >= 5):
        remain_big = remain_big - 1
        remain = remain - 5
        used_big = used_big + 1
    
    while (small > 0 and remain_small > 0 and remain > 0):
        remain_small = remain_small - 1
        remain = remain - 1
        used_small = used_small + 1
    
    return (used_small if remain == 0 else -1)

def main():
    assert make_chocolate(4, 1, 9) == 4
    assert make_chocolate(4, 1, 10) == -1
    assert make_chocolate(4, 1, 7) == 2
    assert make_chocolate(6, 2, 7) == 2
    assert make_chocolate(4, 1, 5) == 0
    assert make_chocolate(4, 1, 4) == 4
    assert make_chocolate(5, 4, 9) == 4
    assert make_chocolate(9, 3, 18) == 3
    assert make_chocolate(3, 1, 9) == -1
    assert make_chocolate(1, 2, 7) == -1
    assert make_chocolate(1, 2, 6) == 1
    assert make_chocolate(1, 2, 5) == 0
    assert make_chocolate(6, 1, 10) == 5
    assert make_chocolate(6, 1, 11) == 6
    assert make_chocolate(6, 1, 12) == -1
    assert make_chocolate(6, 1, 13) == -1
    assert make_chocolate(6, 2, 10) == 0
    assert make_chocolate(6, 2, 11) == 1
    assert make_chocolate(6, 2, 12) == 2
    assert make_chocolate(60, 100, 550) == 50
    assert make_chocolate(1000, 1000000, 5000006) == 6
    assert make_chocolate(7, 1, 12) == 7
    assert make_chocolate(7, 1, 13) == -1
    assert make_chocolate(7, 2, 13) == 3

if __name__ == "__main__":
    main()

`)))));};MDXContent.isMDXComponent=true;

/***/ })

}]);