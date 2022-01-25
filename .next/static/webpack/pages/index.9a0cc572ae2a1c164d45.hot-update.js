webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ \"./node_modules/next/Link.js\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\nvar _jsxFileName = \"/Users/guillermosotelo/Documents/Proyectos/twigoh/nextjs_proyect/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar __N_SSG = true;\nfunction Home(_ref) {\n  var _this = this;\n\n  var pokemon = _ref.pokemon;\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Poke NFT\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    id: \"title\",\n    className: \"text-5xl mb-8 text-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }\n  }, \"Poke NFT\"), __jsx(\"div\", {\n    className: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }\n  }, pokemon.map(function (poke, index) {\n    return __jsx(\"div\", {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 21\n      }\n    }, __jsx(\"a\", {\n      className: \"border p-4 border-grey my-2 hover:shadow-md capitalize flex items-center text-lg bg-gray-200 rounded-md\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 29\n      }\n    }, __jsx(\"img\", {\n      src: poke.image,\n      alt: poke.name,\n      className: \"w-20 h-20 mr-3\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 33\n      }\n    }), __jsx(\"span\", {\n      className: \"mr-2 font-bold\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 33\n      }\n    }, index + 1, \".\"), __jsx(\"h3\", {\n      className: \"w-30\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 33\n      }\n    }, poke.name), __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 33\n      }\n    }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      href: \"/pokemon?id=\".concat(index + 1),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 37\n      }\n    }, __jsx(\"button\", {\n      className: \"right-0 bg-blue-500 hover:bg-blue-700 text-white font-bold mx-20 py-2 px-4 rounded\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 41\n      }\n    }, \"Buy\"))), __jsx(\"h3\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 33\n      }\n    }, Math.random().toString().substring(0, 4), \" ETH\")));\n  })));\n}\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwicG9rZW1vbiIsIm1hcCIsInBva2UiLCJpbmRleCIsImltYWdlIiwibmFtZSIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTQSxJQUFULE9BQTJCO0FBQUE7O0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXO0FBRXRDLFNBQ0ksTUFBQywwREFBRDtBQUFRLFNBQUssRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLE1BQUUsRUFBQyxPQUFQO0FBQWUsYUFBUyxFQUFDLDJCQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLEVBRUk7QUFBSyxhQUFTLEVBQUMsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLFdBQ1Q7QUFBSyxTQUFHLEVBQUVBLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNRO0FBQUcsZUFBUyxFQUFDLHlHQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUNJLFNBQUcsRUFBRUQsSUFBSSxDQUFDRSxLQURkO0FBRUksU0FBRyxFQUFFRixJQUFJLENBQUNHLElBRmQ7QUFHSSxlQUFTLEVBQUMsZ0JBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLEVBTUk7QUFBTSxlQUFTLEVBQUMsZ0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDS0YsS0FBSyxHQUFHLENBRGIsTUFOSixFQVNJO0FBQUksZUFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNLRCxJQUFJLENBQUNHLElBRFYsQ0FUSixFQVlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLGdEQUFEO0FBQU0sVUFBSSx3QkFBaUJGLEtBQUssR0FBQyxDQUF2QixDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFRLGVBQVMsRUFBQyxvRkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLENBREosQ0FaSixFQW1CSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtHLElBQUksQ0FBQ0MsTUFBTCxHQUFjQyxRQUFkLEdBQXlCQyxTQUF6QixDQUFtQyxDQUFuQyxFQUFxQyxDQUFyQyxDQUFMLFNBbkJKLENBRFIsQ0FEUztBQUFBLEdBQVosQ0FETCxDQUZKLENBREo7QUFnQ0g7S0FsQ3VCVixJIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvTGluayc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHBva2Vtb24gfSkge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dCB0aXRsZT1cIlBva2UgTkZUXCI+XG4gICAgICAgICAgICA8aDEgaWQ9J3RpdGxlJyBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBtYi04IHRleHQtY2VudGVyXCI+UG9rZSBORlQ8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9Jyc+XG4gICAgICAgICAgICAgICAge3Bva2Vtb24ubWFwKChwb2tlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJvcmRlciBwLTQgYm9yZGVyLWdyZXkgbXktMiBob3ZlcjpzaGFkb3ctbWQgY2FwaXRhbGl6ZSBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWxnIGJnLWdyYXktMjAwIHJvdW5kZWQtbWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwb2tlLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtwb2tlLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTIwIGgtMjAgbXItM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yLTIgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW5kZXggKyAxfS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSd3LTMwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb2tlLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wb2tlbW9uP2lkPSR7aW5kZXgrMX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ncmlnaHQtMCBiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBteC0yMCBweS0yIHB4LTQgcm91bmRlZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJ1eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57TWF0aC5yYW5kb20oKS50b1N0cmluZygpLnN1YnN0cmluZygwLDQpfSBFVEg8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uP2xpbWl0PTE1MCcpO1xuICAgICAgICBjb25zdCB7IHJlc3VsdHMgfSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgIGNvbnN0IHBva2Vtb24gPSByZXN1bHRzLm1hcCgocG9rZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhZGRlZElkID0gKCcwMCcgKyAoaW5kZXggKyAxKSkuc2xpY2UoLTMpO1xuXG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IGBodHRwczovL2Fzc2V0cy5wb2tlbW9uLmNvbS9hc3NldHMvY21zMi9pbWcvcG9rZWRleC9kZXRhaWwvJHtwYWRkZWRJZH0ucG5nYDtcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnBva2UsIGltYWdlIH07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJvcHM6IHsgcG9rZW1vbiB9LFxuICAgICAgICB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})