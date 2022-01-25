webpackHotUpdate_N_E("pages/purchase",{

/***/ "./pages/purchase.js":
/*!***************************!*\
  !*** ./pages/purchase.js ***!
  \***************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return purchase; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Link */ \"./node_modules/next/Link.js\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/guillermosotelo/Documents/Proyectos/twigoh/nextjs_proyect/pages/purchase.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar __N_SSP = true;\nfunction purchase(_ref) {\n  var poke = _ref.poke;\n  var price = Number(Math.random().toString().substring(0, 4));\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: poke.name,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    id: \"title\",\n    className: \"text-5xl mb-8 text-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }\n  }, \"Poke NFT\"), __jsx(\"div\", {\n    className: \" border-gray-800 shadow-xl py-8 bg-gray-200 rounded-md\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"flex flex-row my-20 mx-20 w-fit\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"w-auto\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 17\n    }\n  }, __jsx(\"h1\", {\n    className: \"text-4xl mb-2 text-center capitalize\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 21\n    }\n  }, poke.name), __jsx(\"img\", {\n    className: \"mx-auto w-40\",\n    src: poke.image,\n    alt: poke.name,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 21\n    }\n  })), __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 17\n    }\n  }, \"PURCHASE\")), __jsx(\"div\", {\n    className: \"text-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }, __jsx(\"h1\", {\n    className: \"text-3xl mt-6 mb-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 17\n    }\n  }, price, \" ETH\")), __jsx(\"div\", {\n    className: \"my-10 flex flex-col\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }\n  }, __jsx(\"button\", {\n    className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold mx-20 py-2 my-4 px-6 rounded\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 17\n    }\n  }, \"Purchase\"), __jsx(\"button\", {\n    className: \"bg-gray-500 hover:bg-gray-700 text-white font-bold mx-20 py-2 px-4 rounded\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 17\n    }\n  }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 21\n    }\n  }, \"Go Back\")))));\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHVyY2hhc2UuanM/MTQ5NCJdLCJuYW1lcyI6WyJwdXJjaGFzZSIsInBva2UiLCJwcmljZSIsIk51bWJlciIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsIm5hbWUiLCJpbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTQSxRQUFULE9BQTZCO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQ3hDLE1BQU1DLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLE1BQUwsR0FBY0MsUUFBZCxHQUF5QkMsU0FBekIsQ0FBbUMsQ0FBbkMsRUFBcUMsQ0FBckMsQ0FBRCxDQUFwQjtBQUVBLFNBQ0EsTUFBQywwREFBRDtBQUFRLFNBQUssRUFBRU4sSUFBSSxDQUFDTyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ1E7QUFBSSxNQUFFLEVBQUMsT0FBUDtBQUFlLGFBQVMsRUFBQywyQkFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEUixFQUVRO0FBQUssYUFBUyxFQUFDLHdEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFLLGFBQVMsRUFBQyxpQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxhQUFTLEVBQUMsc0NBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLUCxJQUFJLENBQUNPLElBRFYsQ0FESixFQUlJO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBOEIsT0FBRyxFQUFFUCxJQUFJLENBQUNRLEtBQXhDO0FBQStDLE9BQUcsRUFBRVIsSUFBSSxDQUFDTyxJQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosQ0FESixFQU9JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEosQ0FEQSxFQVdBO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksYUFBUyxFQUFDLG9CQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBb0NOLEtBQXBDLFNBREosQ0FYQSxFQWNBO0FBQUssYUFBUyxFQUFDLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFRLGFBQVMsRUFBQyxpRkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixFQUlJO0FBQVEsYUFBUyxFQUFDLDRFQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixDQUpKLENBZEEsQ0FGUixDQURBO0FBOEJIIiwiZmlsZSI6Ii4vcGFnZXMvcHVyY2hhc2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvTGluayc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHB1cmNoYXNlICh7IHBva2UgfSkge1xuICAgIGNvbnN0IHByaWNlID0gTnVtYmVyKE1hdGgucmFuZG9tKCkudG9TdHJpbmcoKS5zdWJzdHJpbmcoMCw0KSlcbiAgICBcbiAgICByZXR1cm4gKFxuICAgIDxMYXlvdXQgdGl0bGU9e3Bva2UubmFtZX0+XG4gICAgICAgICAgICA8aDEgaWQ9J3RpdGxlJyBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBtYi04IHRleHQtY2VudGVyXCI+UG9rZSBORlQ8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9JyBib3JkZXItZ3JheS04MDAgc2hhZG93LXhsIHB5LTggYmctZ3JheS0yMDAgcm91bmRlZC1tZCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBteS0yMCBteC0yMCB3LWZpdCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctYXV0byc+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBtYi0yIHRleHQtY2VudGVyIGNhcGl0YWxpemVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwb2tlLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibXgtYXV0byB3LTQwXCIgc3JjPXtwb2tlLmltYWdlfSBhbHQ9e3Bva2UubmFtZX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDE+UFVSQ0hBU0U8L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgbXQtNiBtYi0yXCI+e3ByaWNlfSBFVEg8L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXktMTAgZmxleCBmbGV4LWNvbCc+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2JnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIG14LTIwIHB5LTIgbXktNCBweC02IHJvdW5kZWQnPlxuICAgICAgICAgICAgICAgICAgICBQdXJjaGFzZVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdiZy1ncmF5LTUwMCBob3ZlcjpiZy1ncmF5LTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBteC0yMCBweS0yIHB4LTQgcm91bmRlZCc+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBHbyBCYWNrXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHF1ZXJ5IH0pIHtcbiAgICBjb25zdCBpZCA9IHF1ZXJ5LmlkO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vJHtpZH1gKTtcbiAgICAgICAgY29uc3QgcG9rZSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgIGNvbnN0IHBhZGRlZElkID0gKCcwMCcgKyBpZCkuc2xpY2UoLTMpO1xuICAgICAgICBwb2tlLmltYWdlID0gYGh0dHBzOi8vYXNzZXRzLnBva2Vtb24uY29tL2Fzc2V0cy9jbXMyL2ltZy9wb2tlZGV4L2RldGFpbC8ke3BhZGRlZElkfS5wbmdgO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJvcHM6IHsgcG9rZSB9LFxuICAgICAgICB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/purchase.js\n");

/***/ })

})