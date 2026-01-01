"use strict";
(globalThis["webpackChunkblog"] = globalThis["webpackChunkblog"] || []).push([[1687],{

/***/ 5680
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   xA: () => (/* binding */ MDXProvider),
/* harmony export */   yg: () => (/* binding */ createElement)
/* harmony export */ });
/* unused harmony exports MDXContext, useMDXComponents, withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);


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




/***/ },

/***/ 7798
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* binding */ metadata),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _home_runner_work_blog_blog_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8168);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6540);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5680);
/* @jsxRuntime classic *//* @jsx mdx *//* @jsxFrag React.Fragment */const frontMatter={title:'Change Docker storage location',slug:'change-docker-storage-location',tags:['docker'],authors:['p0nch0d3v']};const contentTitle=undefined;const metadata={"permalink":"/change-docker-storage-location","source":"@site/blog/2022-08-29-change-docker-storage-location.md","title":"Change Docker storage location","description":"Stop docker service and socket","date":"2022-08-29T00:00:00.000Z","formattedDate":"August 29, 2022","tags":[{"label":"docker","permalink":"/tags/docker"}],"hasTruncateMarker":false,"authors":[{"name":"p0nch0 d3v","title":"Software Engineer","url":"https://github.com/p0nch0d3v","imageURL":"https://github.com/p0nch0d3v.png","key":"p0nch0d3v"}],"frontMatter":{"title":"Change Docker storage location","slug":"change-docker-storage-location","tags":["docker"],"authors":["p0nch0d3v"]},"prevItem":{"title":"After Install Mint 21","permalink":"/after-install-mint-21"},"nextItem":{"title":"Use Jenkins on Dokku","permalink":"/use-jenkins-on-dokku"}};const assets={"authorsImageUrls":[undefined]};const toc=[{value:'Stop docker service and socket',id:'stop-docker-service-and-socket',level:4},{value:'Edit the current configuration',id:'edit-the-current-configuration',level:4},{value:'Locate: <code>ExecStart</code>',id:'locate-execstart',level:4},{value:'and add the follwing line: <code>-g /some/other/location</code>',id:'and-add-the-follwing-line--g-someotherlocation',level:4},{value:'Ensure that the directory exits',id:'ensure-that-the-directory-exits',level:4},{value:'Sync pre-existing content',id:'sync-pre-existing-content',level:4},{value:'Start docker service and socket',id:'start-docker-service-and-socket',level:4}];const layoutProps={toc};const MDXLayout="wrapper";function MDXContent({components,...props}){return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .yg)(MDXLayout,(0,_home_runner_work_blog_blog_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .yg)("h4",{"id":"stop-docker-service-and-socket"},`Stop docker service and socket`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .yg)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .yg)("code",{parentName:"pre","className":"language-bash"},`sudo systemctl stop docker.service && \\
sudo systemctl stop docker.socket
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .yg)("h4",{"id":"edit-the-current-configuration"},`Edit the current configuration`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .yg)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .yg)("code",{parentName:"pre","className":"language-bash"},`sudo nano /lib/systemd/system/docker.service
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .yg)("h4",{"id":"locate-execstart"},`Locate: `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .yg)("inlineCode",{parentName:"h4"},`ExecStart`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .yg)("h4",{"id":"and-add-the-follwing-line--g-someotherlocation"},`and add the follwing line: `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .yg)("inlineCode",{parentName:"h4"},`-g /some/other/location`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .yg)("h4",{"id":"ensure-that-the-directory-exits"},`Ensure that the directory exits`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .yg)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .yg)("code",{parentName:"pre","className":"language-bash"},`sudo mkdir -p /some/other/location
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .yg)("h4",{"id":"sync-pre-existing-content"},`Sync pre-existing content`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .yg)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .yg)("code",{parentName:"pre","className":"language-bash"},`sudo rsync -aqxP /var/lib/docker/ /some/other/location
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .yg)("h4",{"id":"start-docker-service-and-socket"},`Start docker service and socket`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .yg)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .yg)("code",{parentName:"pre","className":"language-bash"},`sudo systemctl daemon-reload && \\
sudo systemctl start docker
`)));};MDXContent.isMDXComponent=true;

/***/ }

}]);