"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout_simple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/simple */ \"./components/layout/simple.jsx\");\n/* harmony import */ var _components_general_articles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/general/articles */ \"./components/general/articles.jsx\");\n\n\n\nvar __N_SSP = true;\nfunction Home(initialData) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_simple__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        preContainer: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_general_articles__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            menu: \"Home\"\n        }, void 0, false, void 0, void 0),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Overview\"\n                }, void 0, false, {\n                    fileName: \"/home/newuser/alex/bioniceyes/website/pages/index.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/newuser/alex/bioniceyes/website/pages/index.tsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-justify\",\n                    dangerouslySetInnerHTML: {\n                        __html: initialData.data.content.Home\n                    }\n                }, void 0, false, {\n                    fileName: \"/home/newuser/alex/bioniceyes/website/pages/index.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/newuser/alex/bioniceyes/website/pages/index.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/newuser/alex/bioniceyes/website/pages/index.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdzRDtBQUNJOztBQUUzQyxTQUFTRSxLQUFLQyxXQUFnQixFQUFFO0lBQzdDLHFCQUNFLDhEQUFDSCxpRUFBWUE7UUFBQ0ksNEJBQWMsOERBQUNILG9FQUFhQTtZQUFDSSxNQUFLOzs7MEJBQzVDLDhEQUFDQztnQkFBSUMsV0FBVTswQkFDZiw0RUFBQ0M7OEJBQUc7Ozs7Ozs7Ozs7OzBCQUVOLDhEQUFDRjtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7b0JBQWVFLHlCQUF5Qjt3QkFBRUMsUUFBUVAsWUFBWVEsSUFBSSxDQUFDQyxPQUFPLENBQUNWLElBQUk7b0JBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3ZHLENBQUM7S0FadUJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tICduZXh0L2ZvbnQvZ29vZ2xlJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFNpbXBsZUxheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9zaW1wbGUnXG5pbXBvcnQgQXJ0aWNsZXNKdW1ibyBmcm9tICcuLi9jb21wb25lbnRzL2dlbmVyYWwvYXJ0aWNsZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoaW5pdGlhbERhdGE6IGFueSkge1xuICByZXR1cm4gKFxuICAgIDxTaW1wbGVMYXlvdXQgcHJlQ29udGFpbmVyPXs8QXJ0aWNsZXNKdW1ibyBtZW51PVwiSG9tZVwiIC8+fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGgxPk92ZXJ2aWV3PC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWp1c3RpZnlcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGluaXRpYWxEYXRhLmRhdGEuY29udGVudC5Ib21lIH19PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvU2ltcGxlTGF5b3V0PlxuICApXG59XG5cbi8vIFRoaXMgZ2V0cyBjYWxsZWQgb24gZXZlcnkgcmVxdWVzdFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0OiBhbnkpIHtcbiAgY29uc3QgaG9zdCA9IGNvbnRleHQucmVxLmhlYWRlcnMuaG9zdFxuICAvLyBGZXRjaCBkYXRhIGZyb20gZXh0ZXJuYWwgQVBJXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vJHtob3N0fS9kYXRhLmpzb25gKVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gIC8vIFBhc3MgZGF0YSB0byB0aGUgcGFnZSB2aWEgcHJvcHNcbiAgcmV0dXJuIHsgcHJvcHM6IHsgZGF0YSB9IH1cbn1cblxuIl0sIm5hbWVzIjpbIlNpbXBsZUxheW91dCIsIkFydGljbGVzSnVtYm8iLCJIb21lIiwiaW5pdGlhbERhdGEiLCJwcmVDb250YWluZXIiLCJtZW51IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImRhdGEiLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});