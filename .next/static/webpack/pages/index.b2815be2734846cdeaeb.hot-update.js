webpackHotUpdate_N_E("pages/index",{

/***/ "./smart-contract/web3.js":
/*!********************************!*\
  !*** ./smart-contract/web3.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);\n\nvar web3;\n\nif ( true && typeof window.web3 !== \"undefined\") {\n  // we are in the browser and meta mask is installed\n  web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(window.web3.currentProvider);\n} else {\n  // we are on the server *OR* meta mask is not running\n  // creating our own provider\n  var provider = new web3__WEBPACK_IMPORTED_MODULE_0___default.a.providers.HttpProvider(\"\");\n  web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(provider);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (web3);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc21hcnQtY29udHJhY3Qvd2ViMy5qcz84NWY3Il0sIm5hbWVzIjpbIndlYjMiLCJ3aW5kb3ciLCJXZWIzIiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsSUFBSUEsSUFBSjs7QUFFQSxJQUFJLFNBQWlDLE9BQU9DLE1BQU0sQ0FBQ0QsSUFBZCxLQUF1QixXQUE1RCxFQUF5RTtBQUN2RTtBQUNBQSxNQUFJLEdBQUcsSUFBSUUsMkNBQUosQ0FBU0QsTUFBTSxDQUFDRCxJQUFQLENBQVlHLGVBQXJCLENBQVA7QUFDRCxDQUhELE1BR087QUFDTDtBQUNBO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLElBQUlGLDJDQUFJLENBQUNHLFNBQUwsQ0FBZUMsWUFBbkIsQ0FDZixFQURlLENBQWpCO0FBSUFOLE1BQUksR0FBRyxJQUFJRSwyQ0FBSixDQUFTRSxRQUFULENBQVA7QUFDRDs7QUFFY0osbUVBQWYiLCJmaWxlIjoiLi9zbWFydC1jb250cmFjdC93ZWIzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdlYjMgZnJvbSBcIndlYjNcIjtcblxubGV0IHdlYjM7XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cud2ViMyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAvLyB3ZSBhcmUgaW4gdGhlIGJyb3dzZXIgYW5kIG1ldGEgbWFzayBpcyBpbnN0YWxsZWRcbiAgd2ViMyA9IG5ldyBXZWIzKHdpbmRvdy53ZWIzLmN1cnJlbnRQcm92aWRlcik7XG59IGVsc2Uge1xuICAvLyB3ZSBhcmUgb24gdGhlIHNlcnZlciAqT1IqIG1ldGEgbWFzayBpcyBub3QgcnVubmluZ1xuICAvLyBjcmVhdGluZyBvdXIgb3duIHByb3ZpZGVyXG4gIGNvbnN0IHByb3ZpZGVyID0gbmV3IFdlYjMucHJvdmlkZXJzLkh0dHBQcm92aWRlcihcbiAgICBcIlwiXG4gICk7XG5cbiAgd2ViMyA9IG5ldyBXZWIzKHByb3ZpZGVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2ViMztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./smart-contract/web3.js\n");

/***/ })

})