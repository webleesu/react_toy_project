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

/***/ "./components/MsgList.js":
/*!*******************************!*\
  !*** ./components/MsgList.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst UserIds = [\n    \"roy\",\n    \"jay\"\n];\nconst getRandomUserId = ()=>UserIds[Math.round(Math.random())];\nconst originalMsgs = Array(50).fill(0).map((_, i)=>({\n        id: 50 - i,\n        userId: getRandomUserId(),\n        timestamp: 1234567890123 + (50 - i) * 1000 * 60,\n        text: \"\".concat(50 - i, \" mock text\")\n    }));\nconst MsgList = ()=>{\n    _s();\n    const [msgs, setMsgs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(originalMsgs);\n    const [editingId, setEditingId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const onCreate = (text)=>{\n        const newMsg = {\n            id: msgs.length + 1,\n            userId: getRandomUserId(),\n            timestamp: Date.now(),\n            text: \"\".concat(msgs.length + 1, \" \").concat(text)\n        };\n        setMsgs((msgs)=>[\n                newMsg,\n                ...msgs\n            ]);\n    };\n    const onUpdate = (text, id)=>{\n        setMsgs((msgs)=>{\n            const targetIndex = msgs.findIndex((msg)=>msg.id === id);\n            if (targetIndex < 0) return msgs;\n            const newMsgs = [\n                ...msgs\n            ];\n            newMsgs.splice(targetIndex, 1, {\n                ...msgs[targetIndex],\n                text\n            });\n            return newMsgs;\n        });\n        doneEdit();\n    };\n    const onDelete = (id)=>{\n        setMsgs((msgs)=>{\n            const targetIndex = msgs.findIndex((msg)=>msg.id === id);\n            if (targetIndex < 0) return msgs;\n            const newMsgs = [\n                ...msgs\n            ];\n            newMsgs.splice(targetIndex, 1);\n            return newMsgs;\n        });\n    };\n    const doneEdit = ()=>setEditingId(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                mutate: onCreate\n            }, void 0, false, {\n                fileName: \"D:\\\\work\\\\react_toy_project\\\\client\\\\components\\\\MsgList.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs.map((x)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        ...x,\n                        onUpdate: onUpdate,\n                        onDelete: ()=>onDelete(x.id),\n                        startEdit: ()=>setEditingId(x.id),\n                        isEditing: editingId === x.id\n                    }, x.id, false, {\n                        fileName: \"D:\\\\work\\\\react_toy_project\\\\client\\\\components\\\\MsgList.js\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\work\\\\react_toy_project\\\\client\\\\components\\\\MsgList.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(MsgList, \"01fMYNZrB/VzC7UxNBW1xkTAcyg=\");\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWlDO0FBQ0Q7QUFDRTtBQUVsQyxNQUFNRyxVQUFVO0lBQUM7SUFBTztDQUFNO0FBQzlCLE1BQU1DLGtCQUFrQixJQUFNRCxPQUFPLENBQUNFLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxJQUFJO0FBRWhFLE1BQU1DLGVBQWVDLE1BQU0sSUFDeEJDLElBQUksQ0FBQyxHQUNMQyxHQUFHLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTztRQUNkQyxJQUFJLEtBQUtEO1FBQ1RFLFFBQVFYO1FBQ1JZLFdBQVcsZ0JBQWdCLENBQUMsS0FBS0gsQ0FBQUEsSUFBSyxPQUFPO1FBQzdDSSxNQUFNLEdBQVUsT0FBUCxLQUFLSixHQUFFO0lBQ2xCO0FBRUYsTUFBTUssVUFBVSxJQUFNOztJQUNwQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR3BCLCtDQUFRQSxDQUFDUTtJQUNqQyxNQUFNLENBQUNhLFdBQVdDLGFBQWEsR0FBR3RCLCtDQUFRQSxDQUFDLElBQUk7SUFFL0MsTUFBTXVCLFdBQVcsQ0FBQ04sT0FBUztRQUN6QixNQUFNTyxTQUFTO1lBQ2JWLElBQUlLLEtBQUtNLE1BQU0sR0FBRztZQUNsQlYsUUFBUVg7WUFDUlksV0FBV1UsS0FBS0MsR0FBRztZQUNuQlYsTUFBTSxHQUFzQkEsT0FBbkJFLEtBQUtNLE1BQU0sR0FBRyxHQUFFLEtBQVEsT0FBTFI7UUFDOUI7UUFDQUcsUUFBUSxDQUFDRCxPQUFTO2dCQUFDSzttQkFBV0w7YUFBSztJQUNyQztJQUVBLE1BQU1TLFdBQVcsQ0FBQ1gsTUFBTUgsS0FBTztRQUM3Qk0sUUFBUSxDQUFDRCxPQUFTO1lBQ2hCLE1BQU1VLGNBQWNWLEtBQUtXLFNBQVMsQ0FBQyxDQUFDQyxNQUFRQSxJQUFJakIsRUFBRSxLQUFLQTtZQUN2RCxJQUFJZSxjQUFjLEdBQUcsT0FBT1Y7WUFDNUIsTUFBTWEsVUFBVTttQkFBSWI7YUFBSztZQUN6QmEsUUFBUUMsTUFBTSxDQUFDSixhQUFhLEdBQUc7Z0JBQzdCLEdBQUdWLElBQUksQ0FBQ1UsWUFBWTtnQkFDcEJaO1lBQ0Y7WUFDQSxPQUFPZTtRQUNUO1FBQ0FFO0lBQ0Y7SUFFQSxNQUFNQyxXQUFXLENBQUNyQixLQUFPO1FBQ3ZCTSxRQUFRLENBQUNELE9BQVM7WUFDaEIsTUFBTVUsY0FBY1YsS0FBS1csU0FBUyxDQUFDLENBQUNDLE1BQVFBLElBQUlqQixFQUFFLEtBQUtBO1lBQ3ZELElBQUllLGNBQWMsR0FBRyxPQUFPVjtZQUM1QixNQUFNYSxVQUFVO21CQUFJYjthQUFLO1lBQ3pCYSxRQUFRQyxNQUFNLENBQUNKLGFBQWE7WUFDNUIsT0FBT0c7UUFDVDtJQUNGO0lBRUEsTUFBTUUsV0FBVyxJQUFNWixhQUFhLElBQUk7SUFFeEMscUJBQ0U7OzBCQUNFLDhEQUFDcEIsaURBQVFBO2dCQUFDa0MsUUFBUWI7Ozs7OzswQkFDbEIsOERBQUNjO2dCQUFHQyxXQUFVOzBCQUNYbkIsS0FBS1IsR0FBRyxDQUFDLENBQUM0QixrQkFDVCw4REFBQ3RDLGdEQUFPQTt3QkFFTCxHQUFHc0MsQ0FBQzt3QkFDTFgsVUFBVUE7d0JBQ1ZPLFVBQVUsSUFBTUEsU0FBU0ksRUFBRXpCLEVBQUU7d0JBQzdCMEIsV0FBVyxJQUFNbEIsYUFBYWlCLEVBQUV6QixFQUFFO3dCQUNsQzJCLFdBQVdwQixjQUFja0IsRUFBRXpCLEVBQUU7dUJBTHhCeUIsRUFBRXpCLEVBQUU7Ozs7Ozs7Ozs7OztBQVdyQjtHQXpETUk7S0FBQUE7QUEyRE4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dMaXN0LmpzPzFhZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1zZ0l0ZW0gZnJvbSBcIi4vTXNnSXRlbVwiO1xyXG5pbXBvcnQgTXNnSW5wdXQgZnJvbSBcIi4vTXNnSW5wdXRcIjtcclxuXHJcbmNvbnN0IFVzZXJJZHMgPSBbXCJyb3lcIiwgXCJqYXlcIl07XHJcbmNvbnN0IGdldFJhbmRvbVVzZXJJZCA9ICgpID0+IFVzZXJJZHNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV07XHJcblxyXG5jb25zdCBvcmlnaW5hbE1zZ3MgPSBBcnJheSg1MClcclxuICAuZmlsbCgwKVxyXG4gIC5tYXAoKF8sIGkpID0+ICh7XHJcbiAgICBpZDogNTAgLSBpLFxyXG4gICAgdXNlcklkOiBnZXRSYW5kb21Vc2VySWQoKSxcclxuICAgIHRpbWVzdGFtcDogMTIzNDU2Nzg5MDEyMyArICg1MCAtIGkpICogMTAwMCAqIDYwLFxyXG4gICAgdGV4dDogYCR7NTAgLSBpfSBtb2NrIHRleHRgLFxyXG4gIH0pKTtcclxuXHJcbmNvbnN0IE1zZ0xpc3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgW21zZ3MsIHNldE1zZ3NdID0gdXNlU3RhdGUob3JpZ2luYWxNc2dzKTtcclxuICBjb25zdCBbZWRpdGluZ0lkLCBzZXRFZGl0aW5nSWRdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IG9uQ3JlYXRlID0gKHRleHQpID0+IHtcclxuICAgIGNvbnN0IG5ld01zZyA9IHtcclxuICAgICAgaWQ6IG1zZ3MubGVuZ3RoICsgMSxcclxuICAgICAgdXNlcklkOiBnZXRSYW5kb21Vc2VySWQoKSxcclxuICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICB0ZXh0OiBgJHttc2dzLmxlbmd0aCArIDF9ICR7dGV4dH1gLFxyXG4gICAgfTtcclxuICAgIHNldE1zZ3MoKG1zZ3MpID0+IFtuZXdNc2csIC4uLm1zZ3NdKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvblVwZGF0ZSA9ICh0ZXh0LCBpZCkgPT4ge1xyXG4gICAgc2V0TXNncygobXNncykgPT4ge1xyXG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KChtc2cpID0+IG1zZy5pZCA9PT0gaWQpO1xyXG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNncztcclxuICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXTtcclxuICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEsIHtcclxuICAgICAgICAuLi5tc2dzW3RhcmdldEluZGV4XSxcclxuICAgICAgICB0ZXh0LFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIG5ld01zZ3M7XHJcbiAgICB9KTtcclxuICAgIGRvbmVFZGl0KCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EZWxldGUgPSAoaWQpID0+IHtcclxuICAgIHNldE1zZ3MoKG1zZ3MpID0+IHtcclxuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleCgobXNnKSA9PiBtc2cuaWQgPT09IGlkKTtcclxuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3M7XHJcbiAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc107XHJcbiAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxKTtcclxuICAgICAgcmV0dXJuIG5ld01zZ3M7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkb25lRWRpdCA9ICgpID0+IHNldEVkaXRpbmdJZChudWxsKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxNc2dJbnB1dCBtdXRhdGU9e29uQ3JlYXRlfSAvPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWVzc2FnZXNcIj5cclxuICAgICAgICB7bXNncy5tYXAoKHgpID0+IChcclxuICAgICAgICAgIDxNc2dJdGVtXHJcbiAgICAgICAgICAgIGtleT17eC5pZH1cclxuICAgICAgICAgICAgey4uLnh9XHJcbiAgICAgICAgICAgIG9uVXBkYXRlPXtvblVwZGF0ZX1cclxuICAgICAgICAgICAgb25EZWxldGU9eygpID0+IG9uRGVsZXRlKHguaWQpfVxyXG4gICAgICAgICAgICBzdGFydEVkaXQ9eygpID0+IHNldEVkaXRpbmdJZCh4LmlkKX1cclxuICAgICAgICAgICAgaXNFZGl0aW5nPXtlZGl0aW5nSWQgPT09IHguaWR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0xpc3Q7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIk1zZ0l0ZW0iLCJNc2dJbnB1dCIsIlVzZXJJZHMiLCJnZXRSYW5kb21Vc2VySWQiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJvcmlnaW5hbE1zZ3MiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSIsImlkIiwidXNlcklkIiwidGltZXN0YW1wIiwidGV4dCIsIk1zZ0xpc3QiLCJtc2dzIiwic2V0TXNncyIsImVkaXRpbmdJZCIsInNldEVkaXRpbmdJZCIsIm9uQ3JlYXRlIiwibmV3TXNnIiwibGVuZ3RoIiwiRGF0ZSIsIm5vdyIsIm9uVXBkYXRlIiwidGFyZ2V0SW5kZXgiLCJmaW5kSW5kZXgiLCJtc2ciLCJuZXdNc2dzIiwic3BsaWNlIiwiZG9uZUVkaXQiLCJvbkRlbGV0ZSIsIm11dGF0ZSIsInVsIiwiY2xhc3NOYW1lIiwieCIsInN0YXJ0RWRpdCIsImlzRWRpdGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MsgList.js\n"));

/***/ })

});