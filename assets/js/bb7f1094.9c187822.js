"use strict";
(self["webpackChunkblog"] = self["webpackChunkblog"] || []).push([[9783],{

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

/***/ 839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "assets": () => (/* binding */ assets),
  "contentTitle": () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  "frontMatter": () => (/* binding */ frontMatter),
  "metadata": () => (/* binding */ metadata),
  "toc": () => (/* binding */ toc)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(3905);
;// CONCATENATED MODULE: ./src/components/CodingProblemList.jsx
function CodingProblemList(_ref){let{items}=_ref;const wrapperStyle={display:'flex',flexDirection:'row',flexWrap:'wrap',alignContent:'center',alignItems:'center',justifyItems:'center'};function itemStyle(solved){return{flexShrink:1,flexBasis:'175px',marginTop:'0.75rem',marginBottom:'0.75rem',overflowWrap:'break-word',flexWrap:'wrap',whiteSpace:'break-spaces'};}function linkStyle(solved){return{color:'var(--ifm-link-color)',textDecoration:'var(--ifm-link-decoration)',background:'none',border:'1px solid transparent',cursor:'pointer',fontSize:'unset',fontWeight:solved?'100':'400',fontStyle:solved?'italic':'unset'};};return/*#__PURE__*/react.createElement("div",{className:"container"},/*#__PURE__*/react.createElement("ul",{className:"row",style:wrapperStyle},items.map((value,index)=>{return/*#__PURE__*/react.createElement("li",{style:itemStyle(value.solved)},/*#__PURE__*/react.createElement("a",{style:linkStyle(value.solved),href:value.link},value.text),value.solved?/*#__PURE__*/react.createElement(react.Fragment,null,"\xA0[\xA0\u2714\xA0]"):/*#__PURE__*/react.createElement(react.Fragment,null));})));}
;// CONCATENATED MODULE: ./docs/coding-problems/index.md
/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */const frontMatter={title:'Coding Problems',pagination_prev:'index',pagination_next:null};const contentTitle=undefined;const metadata={"unversionedId":"coding-problems/index","id":"coding-problems/index","title":"Coding Problems","description":"dailycodingproblem.com","source":"@site/docs/coding-problems/index.md","sourceDirName":"coding-problems","slug":"/coding-problems/","permalink":"/docs/coding-problems/","draft":false,"tags":[],"version":"current","frontMatter":{"title":"Coding Problems","pagination_prev":"index","pagination_next":null},"sidebar":"tutorialSidebar","previous":{"title":"Docs","permalink":"/docs/"}};const assets={};const toc=[{value:'dailycodingproblem.com',id:'dailycodingproblemcom',level:2},{value:'Easy',id:'easy',level:3},{value:'Medium',id:'medium',level:3},{value:'Hard',id:'hard',level:3},{value:'codingbat.com',id:'codingbatcom',level:2},{value:'Logic',id:'logic',level:3}];const layoutProps={toc};const MDXLayout="wrapper";function MDXContent(_ref){let{components,...props}=_ref;return (0,esm/* mdx */.kt)(MDXLayout,(0,esm_extends/* default */.Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,esm/* mdx */.kt)("h2",{"id":"dailycodingproblemcom"},(0,esm/* mdx */.kt)("a",{parentName:"h2","href":"https://www.dailycodingproblem.com/"},`dailycodingproblem.com`)),(0,esm/* mdx */.kt)("h3",{"id":"easy"},`Easy`),(0,esm/* mdx */.kt)(CodingProblemList,{items:[{text:'2022-09-08',link:'/docs/coding-problems/easy/2022-09-08-easy',solved:true},{text:'2022-09-15',link:'/docs/coding-problems/easy/2022-09-15-easy'},{text:'2022-09-23',link:'/docs/coding-problems/easy/2022-09-23-easy'},{text:'2022-09-27',link:'/docs/coding-problems/easy/2022-09-27-easy'},{text:'2022-09-28',link:'/docs/coding-problems/easy/2022-09-28-easy'}],mdxType:"CodingProblemList"}),(0,esm/* mdx */.kt)("h3",{"id":"medium"},`Medium`),(0,esm/* mdx */.kt)(CodingProblemList,{items:[{text:'2022-09-10',link:'/docs/coding-problems/medium/2022-09-10-medium',solved:true},{text:'2022-09-12',link:'/docs/coding-problems/medium/2022-09-12-medium'},{text:'2022-09-14',link:'/docs/coding-problems/medium/2022-09-14-medium'},{text:'2022-09-17',link:'/docs/coding-problems/medium/2022-09-17-medium'},{text:'2022-09-18',link:'/docs/coding-problems/medium/2022-09-18-medium'},{text:'2022-09-21',link:'/docs/coding-problems/medium/2022-09-21-medium'},{text:'2022-09-22',link:'/docs/coding-problems/medium/2022-09-22-medium'},{text:'2022-09-26',link:'/docs/coding-problems/medium/2022-09-26-medium'}],mdxType:"CodingProblemList"}),(0,esm/* mdx */.kt)("h3",{"id":"hard"},`Hard`),(0,esm/* mdx */.kt)(CodingProblemList,{items:[{text:'2022-09-09',link:'/docs/coding-problems/hard/2022-09-09-hard',solved:true},{text:'2022-09-11',link:'/docs/coding-problems/hard/2022-09-11-hard'},{text:'2022-09-13',link:'/docs/coding-problems/hard/2022-09-13-hard'},{text:'2022-09-16',link:'/docs/coding-problems/hard/2022-09-16-hard'},{text:'2022-09-19',link:'/docs/coding-problems/hard/2022-09-19-hard'},{text:'2022-09-20',link:'/docs/coding-problems/hard/2022-09-20-hard'},{text:'2022-09-24',link:'/docs/coding-problems/hard/2022-09-24-hard'},{text:'2022-09-25',link:'/docs/coding-problems/hard/2022-09-25-hard'}],mdxType:"CodingProblemList"}),(0,esm/* mdx */.kt)("h2",{"id":"codingbatcom"},(0,esm/* mdx */.kt)("a",{parentName:"h2","href":"https://codingbat.com/prob/p190859"},`codingbat.com`)),(0,esm/* mdx */.kt)("h3",{"id":"logic"},`Logic`),(0,esm/* mdx */.kt)(CodingProblemList,{items:[{text:'Make chocolate',link:'/docs/coding-problems/codingbat.com/codingbat-make_chocolate',solved:true}],mdxType:"CodingProblemList"}));};MDXContent.isMDXComponent=true;

/***/ })

}]);