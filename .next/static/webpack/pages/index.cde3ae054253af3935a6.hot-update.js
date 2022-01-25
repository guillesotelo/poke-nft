webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Link */ \"./node_modules/next/Link.js\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n\n\nvar _jsxFileName = \"/Users/guillermosotelo/Documents/Proyectos/twigoh/nextjs_proyect/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar __N_SSG = true;\nfunction Home(_ref) {\n  _s();\n\n  var _this = this;\n\n  var pokemon = _ref.pokemon;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({}),\n      amount = _useState[0],\n      setAmount = _useState[1];\n\n  var handleAmount = function handleAmount(type, name, i) {\n    if (type === '+') {\n      if (amount[name] < 10) setAmount(_objectSpread(_objectSpread({}, amount), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, name, i++)));\n    }\n\n    if (type === '-') {\n      if (amount[i] > 0) setAmount(_objectSpread(_objectSpread({}, amount), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, name, i--)));\n    }\n  };\n\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    title: \"NextJS Pokedex\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    id: \"title\",\n    className: \"text-5xl mb-8 text-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }\n  }, \"Poke NFT\"), __jsx(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }, pokemon.map(function (poke, index) {\n    return console.log(\"poke data:\", poke), __jsx(\"li\", {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 21\n      }\n    }, __jsx(\"a\", {\n      className: \"border p-4 border-grey my-2 hover:shadow-md capitalize flex items-center text-lg bg-gray-200 rounded-md\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 29\n      }\n    }, __jsx(\"img\", {\n      src: poke.image,\n      alt: poke.name,\n      className: \"w-20 h-20 mr-3\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 33\n      }\n    }), __jsx(\"span\", {\n      className: \"mr-2 font-bold\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 33\n      }\n    }, index + 1, \".\"), poke.name, __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 33\n      }\n    }, __jsx(\"button\", {\n      onClick: function onClick() {\n        return handleAmount('+', poke.name, index);\n      },\n      className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold mx-20 py-2 px-4 rounded\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 37\n      }\n    }, \"-\"), __jsx(\"h4\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 37\n      }\n    }, amount[poke.name] || 0), __jsx(\"button\", {\n      onClick: function onClick() {\n        return handleAmount('+', poke.name, index);\n      },\n      className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold mx-20 py-2 px-4 rounded\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 37\n      }\n    }, \"+\"), __jsx(\"button\", {\n      className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold mx-20 py-2 px-4 rounded\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 37\n      }\n    }, \"Buy\"))));\n  })));\n}\n\n_s(Home, \"Bn0fVy9wjHZSkcLtssALYb1fYh8=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwicG9rZW1vbiIsInVzZVN0YXRlIiwiYW1vdW50Iiwic2V0QW1vdW50IiwiaGFuZGxlQW1vdW50IiwidHlwZSIsIm5hbWUiLCJpIiwibWFwIiwicG9rZSIsImluZGV4IiwiY29uc29sZSIsImxvZyIsImltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTQSxJQUFULE9BQTJCO0FBQUE7O0FBQUE7O0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXOztBQUFBLGtCQUNWQyxzREFBUSxDQUFDLEVBQUQsQ0FERTtBQUFBLE1BQy9CQyxNQUQrQjtBQUFBLE1BQ3ZCQyxTQUR1Qjs7QUFHdEMsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsSUFBRCxFQUFPQyxJQUFQLEVBQWFDLENBQWIsRUFBbUI7QUFDcEMsUUFBR0YsSUFBSSxLQUFLLEdBQVosRUFBZ0I7QUFDWixVQUFHSCxNQUFNLENBQUNJLElBQUQsQ0FBTixHQUFlLEVBQWxCLEVBQ0FILFNBQVMsaUNBQUtELE1BQUwscUdBQWNJLElBQWQsRUFBcUJDLENBQUMsRUFBdEIsR0FBVDtBQUNIOztBQUNELFFBQUdGLElBQUksS0FBSyxHQUFaLEVBQWlCO0FBQ2IsVUFBR0gsTUFBTSxDQUFDSyxDQUFELENBQU4sR0FBWSxDQUFmLEVBQ0FKLFNBQVMsaUNBQUtELE1BQUwscUdBQWNJLElBQWQsRUFBcUJDLENBQUMsRUFBdEIsR0FBVDtBQUNIO0FBQ0osR0FURDs7QUFXQSxTQUNJLE1BQUMsMERBQUQ7QUFBUSxTQUFLLEVBQUMsZ0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksTUFBRSxFQUFDLE9BQVA7QUFBZSxhQUFTLEVBQUMsMkJBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tQLE9BQU8sQ0FBQ1EsR0FBUixDQUFZLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLFdBQ1RDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJILElBQTFCLEdBQ0E7QUFBSSxTQUFHLEVBQUVDLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVRO0FBQUcsZUFBUyxFQUFDLHlHQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUNJLFNBQUcsRUFBRUQsSUFBSSxDQUFDSSxLQURkO0FBRUksU0FBRyxFQUFFSixJQUFJLENBQUNILElBRmQ7QUFHSSxlQUFTLEVBQUMsZ0JBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLEVBTUk7QUFBTSxlQUFTLEVBQUMsZ0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDS0ksS0FBSyxHQUFHLENBRGIsTUFOSixFQVNLRCxJQUFJLENBQUNILElBVFYsRUFVSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBUSxhQUFPLEVBQUU7QUFBQSxlQUFNRixZQUFZLENBQUMsR0FBRCxFQUFLSyxJQUFJLENBQUNILElBQVYsRUFBZ0JJLEtBQWhCLENBQWxCO0FBQUEsT0FBakI7QUFBMEQsZUFBUyxFQUFDLDRFQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREosRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtSLE1BQU0sQ0FBQ08sSUFBSSxDQUFDSCxJQUFOLENBQU4sSUFBcUIsQ0FBMUIsQ0FKSixFQUtJO0FBQVEsYUFBTyxFQUFFO0FBQUEsZUFBTUYsWUFBWSxDQUFDLEdBQUQsRUFBS0ssSUFBSSxDQUFDSCxJQUFWLEVBQWdCSSxLQUFoQixDQUFsQjtBQUFBLE9BQWpCO0FBQTJELGVBQVMsRUFBQyw0RUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUxKLEVBUUk7QUFBUSxlQUFTLEVBQUMsNEVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSSixDQVZKLENBRlIsQ0FGUztBQUFBLEdBQVosQ0FETCxDQUZKLENBREo7QUFxQ0g7O0dBbkR1QlgsSTs7S0FBQUEsSSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L0xpbmsnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBwb2tlbW9uIH0pIHtcbiAgICBjb25zdCBbYW1vdW50LCBzZXRBbW91bnRdID0gdXNlU3RhdGUoe30pXG5cbiAgICBjb25zdCBoYW5kbGVBbW91bnQgPSAodHlwZSwgbmFtZSwgaSkgPT4ge1xuICAgICAgICBpZih0eXBlID09PSAnKycpe1xuICAgICAgICAgICAgaWYoYW1vdW50W25hbWVdIDwgMTApXG4gICAgICAgICAgICBzZXRBbW91bnQoey4uLmFtb3VudCwgW25hbWVdOiBpKyt9KVxuICAgICAgICB9IFxuICAgICAgICBpZih0eXBlID09PSAnLScpIHtcbiAgICAgICAgICAgIGlmKGFtb3VudFtpXSA+IDApXG4gICAgICAgICAgICBzZXRBbW91bnQoey4uLmFtb3VudCwgW25hbWVdOiBpLS19KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dCB0aXRsZT1cIk5leHRKUyBQb2tlZGV4XCI+XG4gICAgICAgICAgICA8aDEgaWQ9J3RpdGxlJyBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBtYi04IHRleHQtY2VudGVyXCI+UG9rZSBORlQ8L2gxPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtwb2tlbW9uLm1hcCgocG9rZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwb2tlIGRhdGE6XCIsIHBva2UpLFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPExpbmsgaHJlZj17YC9wb2tlbW9uP2lkPSR7aW5kZXggKyAxfWB9PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJib3JkZXIgcC00IGJvcmRlci1ncmV5IG15LTIgaG92ZXI6c2hhZG93LW1kIGNhcGl0YWxpemUgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1sZyBiZy1ncmF5LTIwMCByb3VuZGVkLW1kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cG9rZS5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17cG9rZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0yMCBoLTIwIG1yLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci0yIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2luZGV4ICsgMX0uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bva2UubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFtb3VudCgnKycscG9rZS5uYW1lLCBpbmRleCl9Y2xhc3NOYW1lPSdiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBteC0yMCBweS0yIHB4LTQgcm91bmRlZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e2Ftb3VudFtwb2tlLm5hbWVdIHx8IDB9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQW1vdW50KCcrJyxwb2tlLm5hbWUsIGluZGV4KX0gY2xhc3NOYW1lPSdiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBteC0yMCBweS0yIHB4LTQgcm91bmRlZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgbXgtMjAgcHktMiBweC00IHJvdW5kZWQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJ1eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPC9MaW5rPiAqL31cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbj9saW1pdD0xNTAnKTtcbiAgICAgICAgY29uc3QgeyByZXN1bHRzIH0gPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICBjb25zdCBwb2tlbW9uID0gcmVzdWx0cy5tYXAoKHBva2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYWRkZWRJZCA9ICgnMDAnICsgKGluZGV4ICsgMSkpLnNsaWNlKC0zKTtcblxuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBgaHR0cHM6Ly9hc3NldHMucG9rZW1vbi5jb20vYXNzZXRzL2NtczIvaW1nL3Bva2VkZXgvZGV0YWlsLyR7cGFkZGVkSWR9LnBuZ2A7XG4gICAgICAgICAgICByZXR1cm4geyAuLi5wb2tlLCBpbWFnZSB9O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByb3BzOiB7IHBva2Vtb24gfSxcbiAgICAgICAgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})