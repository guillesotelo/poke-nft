webpackHotUpdate_N_E("pages/pokemon",{

/***/ "./pages/pokemon.js":
/*!**************************!*\
  !*** ./pages/pokemon.js ***!
  \**************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return pokemon; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Link */ \"./node_modules/next/Link.js\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/guillermosotelo/Documents/Proyectos/twigoh/nextjs_proyect/pages/pokemon.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar __N_SSP = true;\nfunction pokemon(_ref) {\n  _s();\n\n  var _this = this;\n\n  var poke = _ref.poke;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(1),\n      amount = _useState[0],\n      setAmount = _useState[1];\n\n  var price = Number(Math.random().toString().substring(0, 4));\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: poke.name,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    id: \"title\",\n    className: \"text-5xl mb-8 text-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }\n  }, \"Poke NFT\"), __jsx(\"div\", {\n    className: \" border-gray-800 shadow-xl py-8 bg-gray-200 rounded-md\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"flex flex-row my-20 mx-20 w-fit border\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"w-auto\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 17\n    }\n  }, __jsx(\"h1\", {\n    className: \"text-4xl mb-2 text-center capitalize\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 21\n    }\n  }, poke.name), __jsx(\"img\", {\n    className: \"mx-auto w-40\",\n    src: poke.image,\n    alt: poke.name,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 21\n    }\n  })), __jsx(\"div\", {\n    className: \"mx-40\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 21\n    }\n  }, __jsx(\"span\", {\n    className: \"font-bold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 25\n    }\n  }, \"Weight:\"), \" \", poke.weight), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 21\n    }\n  }, __jsx(\"span\", {\n    className: \"font-bold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 25\n    }\n  }, \"Experience:\"), \" \", poke.base_experience), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 21\n    }\n  }, __jsx(\"span\", {\n    className: \"font-bold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 25\n    }\n  }, \"Height:\"), poke.height), __jsx(\"h2\", {\n    className: \"text-2xl mt-6\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 21\n    }\n  }, \"Types\"), poke.types.map(function (type, index) {\n    return __jsx(\"p\", {\n      key: \"index\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 25\n      }\n    }, type.type.name);\n  }))), __jsx(\"span\", {\n    className: \"flex flex-row justify-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, __jsx(\"button\", {\n    onClick: function onClick() {\n      amount >= 1 && setAmount(amount--);\n    },\n    className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold mx-20 py-2 px-6 rounded\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 17\n    }\n  }, \"-\"), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 17\n    }\n  }, amount), __jsx(\"button\", {\n    onClick: function onClick() {\n      amount <= 10 && setAmount(amount++);\n    },\n    className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold mx-20 py-2 px-6 rounded\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 17\n    }\n  }, \"+\")), __jsx(\"div\", {\n    className: \"my-7 text-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }\n  }, __jsx(\"h1\", {\n    className: \"text-3xl mt-6 mb-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 17\n    }\n  }, price * amount, \" ETH\")), __jsx(\"div\", {\n    className: \"my-10 flex flex-row\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }\n  }, __jsx(\"button\", {\n    className: \"bg-gray-500 hover:bg-gray-700 text-white font-bold mx-20 py-2 px-4 rounded\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 17\n    }\n  }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 21\n    }\n  }, \"Go Back\")), __jsx(\"button\", {\n    className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold mx-20 py-2 px-6 rounded\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 17\n    }\n  }, \"Purchase\")))));\n}\n\n_s(pokemon, \"pb83c0ei2UNI+SKCxAC3PRIzrh4=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9rZW1vbi5qcz9mNmJiIl0sIm5hbWVzIjpbInBva2Vtb24iLCJwb2tlIiwidXNlU3RhdGUiLCJhbW91bnQiLCJzZXRBbW91bnQiLCJwcmljZSIsIk51bWJlciIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsIm5hbWUiLCJpbWFnZSIsIndlaWdodCIsImJhc2VfZXhwZXJpZW5jZSIsImhlaWdodCIsInR5cGVzIiwibWFwIiwidHlwZSIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0EsT0FBVCxPQUEyQjtBQUFBOztBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFBQSxrQkFDWkMsc0RBQVEsQ0FBQyxDQUFELENBREk7QUFBQSxNQUNqQ0MsTUFEaUM7QUFBQSxNQUN6QkMsU0FEeUI7O0FBRXRDLE1BQU1DLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLE1BQUwsR0FBY0MsUUFBZCxHQUF5QkMsU0FBekIsQ0FBbUMsQ0FBbkMsRUFBcUMsQ0FBckMsQ0FBRCxDQUFwQjtBQUVBLFNBQ0ksbUVBQ0EsTUFBQywwREFBRDtBQUFRLFNBQUssRUFBRVQsSUFBSSxDQUFDVSxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxNQUFFLEVBQUMsT0FBUDtBQUFlLGFBQVMsRUFBQywyQkFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixFQUVJO0FBQUssYUFBUyxFQUFDLHdEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFLLGFBQVMsRUFBQyx3Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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QTtBQUFBO0FBQUEsZ0JBTkosQ0FqQ0EsQ0FGSixDQURBLENBREo7QUFtREg7O0dBdkR1QkgsTyIsImZpbGUiOiIuL3BhZ2VzL3Bva2Vtb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvTGluayc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBva2Vtb24oeyBwb2tlIH0pIHtcbiAgICBsZXQgW2Ftb3VudCwgc2V0QW1vdW50XSA9IHVzZVN0YXRlKDEpXG4gICAgY29uc3QgcHJpY2UgPSBOdW1iZXIoTWF0aC5yYW5kb20oKS50b1N0cmluZygpLnN1YnN0cmluZygwLDQpKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPExheW91dCB0aXRsZT17cG9rZS5uYW1lfT5cbiAgICAgICAgICAgIDxoMSBpZD0ndGl0bGUnIGNsYXNzTmFtZT1cInRleHQtNXhsIG1iLTggdGV4dC1jZW50ZXJcIj5Qb2tlIE5GVDwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIGJvcmRlci1ncmF5LTgwMCBzaGFkb3cteGwgcHktOCBiZy1ncmF5LTIwMCByb3VuZGVkLW1kJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IG15LTIwIG14LTIwIHctZml0IGJvcmRlcic+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctYXV0byc+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBtYi0yIHRleHQtY2VudGVyIGNhcGl0YWxpemVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwb2tlLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibXgtYXV0byB3LTQwXCIgc3JjPXtwb2tlLmltYWdlfSBhbHQ9e3Bva2UubmFtZX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXgtNDAnPlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPldlaWdodDo8L3NwYW4+IHtwb2tlLndlaWdodH1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkV4cGVyaWVuY2U6PC9zcGFuPiB7cG9rZS5iYXNlX2V4cGVyaWVuY2V9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5IZWlnaHQ6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAge3Bva2UuaGVpZ2h0fVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtdC02XCI+VHlwZXM8L2gyPlxuICAgICAgICAgICAgICAgICAgICB7cG9rZS50eXBlcy5tYXAoKHR5cGUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9XCJpbmRleFwiPnt0eXBlLnR5cGUubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT57IGFtb3VudD49MSAmJiBzZXRBbW91bnQoYW1vdW50LS0pfX1jbGFzc05hbWU9J2JnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIG14LTIwIHB5LTIgcHgtNiByb3VuZGVkJz4tPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGgyPnthbW91bnR9PC9oMj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT57IGFtb3VudDw9MTAgJiYgc2V0QW1vdW50KGFtb3VudCsrKX19Y2xhc3NOYW1lPSdiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBteC0yMCBweS0yIHB4LTYgcm91bmRlZCc+KzwvYnV0dG9uPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J215LTcgdGV4dC1jZW50ZXInPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtdC02IG1iLTJcIj57cHJpY2UqYW1vdW50fSBFVEg8L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXktMTAgZmxleCBmbGV4LXJvdyc+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2JnLWdyYXktNTAwIGhvdmVyOmJnLWdyYXktNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIG14LTIwIHB5LTIgcHgtNCByb3VuZGVkJz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEdvIEJhY2tcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBteC0yMCBweS0yIHB4LTYgcm91bmRlZCc+XG4gICAgICAgICAgICAgICAgICAgIFB1cmNoYXNlXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xheW91dD5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHF1ZXJ5IH0pIHtcbiAgICBjb25zdCBpZCA9IHF1ZXJ5LmlkO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vJHtpZH1gKTtcbiAgICAgICAgY29uc3QgcG9rZSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgIGNvbnN0IHBhZGRlZElkID0gKCcwMCcgKyBpZCkuc2xpY2UoLTMpO1xuICAgICAgICBwb2tlLmltYWdlID0gYGh0dHBzOi8vYXNzZXRzLnBva2Vtb24uY29tL2Fzc2V0cy9jbXMyL2ltZy9wb2tlZGV4L2RldGFpbC8ke3BhZGRlZElkfS5wbmdgO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJvcHM6IHsgcG9rZSB9LFxuICAgICAgICB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/pokemon.js\n");

/***/ })

})