webpackHotUpdate_N_E("pages/purchase",{

/***/ "./pages/purchase.js":
/*!***************************!*\
  !*** ./pages/purchase.js ***!
  \***************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return purchase; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Link */ \"./node_modules/next/Link.js\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/guillermosotelo/Documents/Proyectos/twigoh/nextjs_proyect/pages/purchase.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar __N_SSP = true;\nfunction purchase(_ref) {\n  var poke = _ref.poke;\n  var price = Number(Math.random().toString().substring(0, 4));\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: poke.name,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    id: \"title\",\n    className: \"text-5xl mb-8 text-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }\n  }, \"Poke NFT\"), __jsx(\"div\", {\n    className: \" border-gray-800 shadow-xl py-8 bg-gray-200 rounded-md\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"flex flex-col mx-20 w-fit\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"w-auto\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 17\n    }\n  }, __jsx(\"h1\", {\n    className: \"text-3xl mb-2 text-center capitalize\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 21\n    }\n  }, poke.name), __jsx(\"img\", {\n    className: \"mx-auto w-40\",\n    src: poke.image,\n    alt: poke.name,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 21\n    }\n  }))), __jsx(\"div\", {\n    className: \"text-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }\n  }, __jsx(\"h1\", {\n    className: \"text-3xl mt-6 mb-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 17\n    }\n  }, price, \" ETH\")), __jsx(\"div\", {\n    className: \"my-10 flex flex-col\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    \"class\": \"mb-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 17\n    }\n  }, __jsx(\"label\", {\n    \"class\": \"block text-gray-700 text-sm font-bold mb-2\",\n    \"for\": \"username\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 21\n    }\n  }, \"Deposit into wallet:\"), __jsx(\"input\", {\n    \"class\": \"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\",\n    id: \"username\",\n    type: \"text\",\n    placeholder: \"Username\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 21\n    }\n  })), __jsx(\"button\", {\n    className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold mx-20 py-2 my-4 px-6 rounded\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 17\n    }\n  }, \"Purchase\"), __jsx(\"button\", {\n    className: \"bg-gray-500 hover:bg-gray-700 text-white font-bold mx-20 py-2 px-4 rounded\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 17\n    }\n  }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/pokemon?id=\".concat(poke.id),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 21\n    }\n  }, \"Go Back\")))));\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHVyY2hhc2UuanM/MTQ5NCJdLCJuYW1lcyI6WyJwdXJjaGFzZSIsInBva2UiLCJwcmljZSIsIk51bWJlciIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsIm5hbWUiLCJpbWFnZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVlLFNBQVNBLFFBQVQsT0FBNkI7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDeEMsTUFBTUMsS0FBSyxHQUFHQyxNQUFNLENBQUNDLElBQUksQ0FBQ0MsTUFBTCxHQUFjQyxRQUFkLEdBQXlCQyxTQUF6QixDQUFtQyxDQUFuQyxFQUFxQyxDQUFyQyxDQUFELENBQXBCO0FBRUEsU0FDQSxNQUFDLDBEQUFEO0FBQVEsU0FBSyxFQUFFTixJQUFJLENBQUNPLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDUTtBQUFJLE1BQUUsRUFBQyxPQUFQO0FBQWUsYUFBUyxFQUFDLDJCQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURSLEVBRVE7QUFBSyxhQUFTLEVBQUMsd0RBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUssYUFBUyxFQUFDLDJCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLGFBQVMsRUFBQyxzQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tQLElBQUksQ0FBQ08sSUFEVixDQURKLEVBSUk7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUE4QixPQUFHLEVBQUVQLElBQUksQ0FBQ1EsS0FBeEM7QUFBK0MsT0FBRyxFQUFFUixJQUFJLENBQUNPLElBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixDQURKLENBREEsRUFVQTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLGFBQVMsRUFBQyxvQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW9DTixLQUFwQyxTQURKLENBVkEsRUFhQTtBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFNLE1BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sYUFBTSw0Q0FBYjtBQUEwRCxXQUFJLFVBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREosRUFJSTtBQUFPLGFBQU0sNEhBQWI7QUFBMEksTUFBRSxFQUFDLFVBQTdJO0FBQXdKLFFBQUksRUFBQyxNQUE3SjtBQUFvSyxlQUFXLEVBQUMsVUFBaEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLENBREosRUFPSTtBQUFRLGFBQVMsRUFBQyxpRkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQSixFQVVJO0FBQVEsYUFBUyxFQUFDLDRFQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUksd0JBQWlCRCxJQUFJLENBQUNTLEVBQXRCLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLENBVkosQ0FiQSxDQUZSLENBREE7QUFtQ0giLCJmaWxlIjoiLi9wYWdlcy9wdXJjaGFzZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9MaW5rJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHVyY2hhc2UgKHsgcG9rZSB9KSB7XG4gICAgY29uc3QgcHJpY2UgPSBOdW1iZXIoTWF0aC5yYW5kb20oKS50b1N0cmluZygpLnN1YnN0cmluZygwLDQpKVxuICAgIFxuICAgIHJldHVybiAoXG4gICAgPExheW91dCB0aXRsZT17cG9rZS5uYW1lfT5cbiAgICAgICAgICAgIDxoMSBpZD0ndGl0bGUnIGNsYXNzTmFtZT1cInRleHQtNXhsIG1iLTggdGV4dC1jZW50ZXJcIj5Qb2tlIE5GVDwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIGJvcmRlci1ncmF5LTgwMCBzaGFkb3cteGwgcHktOCBiZy1ncmF5LTIwMCByb3VuZGVkLW1kJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIG14LTIwIHctZml0Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1hdXRvJz5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIG1iLTIgdGV4dC1jZW50ZXIgY2FwaXRhbGl6ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3Bva2UubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJteC1hdXRvIHctNDBcIiBzcmM9e3Bva2UuaW1hZ2V9IGFsdD17cG9rZS5uYW1lfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgbXQtNiBtYi0yXCI+e3ByaWNlfSBFVEg8L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXktMTAgZmxleCBmbGV4LWNvbCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCIgZm9yPVwidXNlcm5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIERlcG9zaXQgaW50byB3YWxsZXQ6XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCIgaWQ9XCJ1c2VybmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgbXgtMjAgcHktMiBteS00IHB4LTYgcm91bmRlZCc+XG4gICAgICAgICAgICAgICAgICAgIFB1cmNoYXNlXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2JnLWdyYXktNTAwIGhvdmVyOmJnLWdyYXktNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIG14LTIwIHB5LTIgcHgtNCByb3VuZGVkJz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wb2tlbW9uP2lkPSR7cG9rZS5pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEdvIEJhY2tcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcXVlcnkgfSkge1xuICAgIGNvbnN0IGlkID0gcXVlcnkuaWQ7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8ke2lkfWApO1xuICAgICAgICBjb25zdCBwb2tlID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgY29uc3QgcGFkZGVkSWQgPSAoJzAwJyArIGlkKS5zbGljZSgtMyk7XG4gICAgICAgIHBva2UuaW1hZ2UgPSBgaHR0cHM6Ly9hc3NldHMucG9rZW1vbi5jb20vYXNzZXRzL2NtczIvaW1nL3Bva2VkZXgvZGV0YWlsLyR7cGFkZGVkSWR9LnBuZ2A7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcm9wczogeyBwb2tlIH0sXG4gICAgICAgIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/purchase.js\n");

/***/ })

})