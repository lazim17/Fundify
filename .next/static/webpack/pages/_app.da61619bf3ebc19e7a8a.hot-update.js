webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_arjunv_Documents_Work_Fundify_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var use_wallet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! use-wallet */ \"./node_modules/use-wallet/dist/index.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _fontsource_poppins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fontsource/poppins */ \"./node_modules/@fontsource/poppins/index.css\");\n/* harmony import */ var _fontsource_poppins__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fontsource_poppins__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _fontsource_inter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fontsource/inter */ \"./node_modules/@fontsource/inter/index.css\");\n/* harmony import */ var _fontsource_inter__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fontsource_inter__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\nvar _jsxFileName = \"/home/arjunv/Documents/Work/Fundify/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_arjunv_Documents_Work_Fundify_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar theme = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"extendTheme\"])({\n  fonts: {\n    heading: \"Poppins\",\n    body: \"Inter\"\n  }\n});\n\nfunction MyApp(_ref) {\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [\" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"ChakraProvider\"], {\n      theme: theme,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(use_wallet__WEBPACK_IMPORTED_MODULE_4__[\"UseWalletProvider\"], {\n        chainId: 11155111,\n        connectors: {\n          walletconnect: {\n            rpcUrl: \"https://sepolia.infura.io/v3/c935c9936531469d9a345c7b4eae2302\"\n          }\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Navbar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }, this), \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbInRoZW1lIiwiZXh0ZW5kVGhlbWUiLCJmb250cyIsImhlYWRpbmciLCJib2R5IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ3YWxsZXRjb25uZWN0IiwicnBjVXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHQyxvRUFBVyxDQUFDO0FBQ3hCQyxPQUFLLEVBQUU7QUFDTEMsV0FBTyxFQUFFLFNBREo7QUFFTEMsUUFBSSxFQUFFO0FBRkQ7QUFEaUIsQ0FBRCxDQUF6Qjs7QUFPQSxTQUFTQyxLQUFULE9BQXlDO0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTtBQUN2QyxzQkFDRTtBQUFBLGVBQ0csR0FESCxlQUVFLHFFQUFDLCtEQUFEO0FBQWdCLFdBQUssRUFBRVAsS0FBdkI7QUFBQSw2QkFDRSxxRUFBQyw0REFBRDtBQUNFLGVBQU8sRUFBRSxRQURYO0FBRUUsa0JBQVUsRUFBRTtBQUNWUSx1QkFBYSxFQUFFO0FBQ2JDLGtCQUFNLEVBQ0o7QUFGVztBQURMLFNBRmQ7QUFBQSxnQ0FTRSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRGLGVBVUUscUVBQUMsU0FBRCxvQkFBZUYsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZGLGVBV0UscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYRixFQVdhLEdBWGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUEsa0JBREY7QUFvQkQ7O0tBckJRRixLO0FBdUJNQSxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB7IENoYWtyYVByb3ZpZGVyLCBleHRlbmRUaGVtZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBVc2VXYWxsZXRQcm92aWRlciB9IGZyb20gXCJ1c2Utd2FsbGV0XCI7XG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmJhclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcbmltcG9ydCAnQGZvbnRzb3VyY2UvcG9wcGlucyc7XG5pbXBvcnQgJ0Bmb250c291cmNlL2ludGVyJztcblxuY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7XG4gIGZvbnRzOiB7XG4gICAgaGVhZGluZzogXCJQb3BwaW5zXCIsXG4gICAgYm9keTogXCJJbnRlclwiLFxuICB9LFxufSlcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtcIiBcIn1cbiAgICAgIDxDaGFrcmFQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8VXNlV2FsbGV0UHJvdmlkZXJcbiAgICAgICAgICBjaGFpbklkPXsxMTE1NTExMX1cbiAgICAgICAgICBjb25uZWN0b3JzPXt7XG4gICAgICAgICAgICB3YWxsZXRjb25uZWN0OiB7XG4gICAgICAgICAgICAgIHJwY1VybDpcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vc2Vwb2xpYS5pbmZ1cmEuaW8vdjMvYzkzNWM5OTM2NTMxNDY5ZDlhMzQ1YzdiNGVhZTIzMDJcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxOYXZCYXIgLz5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgPEZvb3RlciAvPntcIiBcIn1cbiAgICAgICAgPC9Vc2VXYWxsZXRQcm92aWRlcj5cbiAgICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

})