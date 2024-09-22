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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [companyId, setCompanyId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [vectorizeResponse, setVectorizeResponse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [chatInput, setChatInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [chatResponse, setChatResponse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleFileChange = (e)=>{\n        setFile(e.target.files[0]);\n    };\n    const handleVectorize = async ()=>{\n        if (!companyId || !file) {\n            alert(\"Please provide company ID and a text file.\");\n            return;\n        }\n        const formData = new FormData();\n        formData.append(\"file\", file);\n        formData.append(\"companyId\", companyId);\n        formData.append(\"modelName\", \"bge-m3\");\n        const response = await fetch(\"/api/vectorize\", {\n            method: \"POST\",\n            body: formData\n        });\n        const data = await response.json();\n        setVectorizeResponse(data);\n    };\n    const handleChat = async ()=>{\n        const response = await fetch(\"/api/chat\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                companyId,\n                model: \"llama3.1\",\n                chatInput\n            })\n        });\n        const data = await response.json();\n        setChatResponse(data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Chat with Text File\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Enes\\\\Desktop\\\\nextjs-txt-llm\\\\pages\\\\index.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Enter your Company ID\",\n                value: companyId,\n                onChange: (e)=>setCompanyId(e.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Enes\\\\Desktop\\\\nextjs-txt-llm\\\\pages\\\\index.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"file\",\n                onChange: handleFileChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Enes\\\\Desktop\\\\nextjs-txt-llm\\\\pages\\\\index.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleVectorize,\n                children: \"Vectorize\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Enes\\\\Desktop\\\\nextjs-txt-llm\\\\pages\\\\index.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            vectorizeResponse && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                children: JSON.stringify(vectorizeResponse, null, 2)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Enes\\\\Desktop\\\\nextjs-txt-llm\\\\pages\\\\index.js\",\n                lineNumber: 71,\n                columnNumber: 29\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Ask a question\",\n                value: chatInput,\n                onChange: (e)=>setChatInput(e.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Enes\\\\Desktop\\\\nextjs-txt-llm\\\\pages\\\\index.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleChat,\n                children: \"Ask\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Enes\\\\Desktop\\\\nextjs-txt-llm\\\\pages\\\\index.js\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this),\n            chatResponse && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                children: JSON.stringify(chatResponse, null, 2)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Enes\\\\Desktop\\\\nextjs-txt-llm\\\\pages\\\\index.js\",\n                lineNumber: 83,\n                columnNumber: 24\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Enes\\\\Desktop\\\\nextjs-txt-llm\\\\pages\\\\index.js\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"jUQArkx24oauieZSSm05yxdXi0g=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlDO0FBRWxCLFNBQVNDOztJQUN0QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0gsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDSSxNQUFNQyxRQUFRLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ00sbUJBQW1CQyxxQkFBcUIsR0FBR1AsK0NBQVFBLENBQUM7SUFDM0QsTUFBTSxDQUFDUSxXQUFXQyxhQUFhLEdBQUdULCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1UsY0FBY0MsZ0JBQWdCLEdBQUdYLCtDQUFRQSxDQUFDO0lBRWpELE1BQU1ZLG1CQUFtQixDQUFDQztRQUN4QlIsUUFBUVEsRUFBRUMsTUFBTSxDQUFDQyxLQUFLLENBQUMsRUFBRTtJQUMzQjtJQUVBLE1BQU1DLGtCQUFrQjtRQUN0QixJQUFJLENBQUNkLGFBQWEsQ0FBQ0UsTUFBTTtZQUN2QmEsTUFBTTtZQUNOO1FBQ0Y7UUFFQSxNQUFNQyxXQUFXLElBQUlDO1FBQ3JCRCxTQUFTRSxNQUFNLENBQUMsUUFBUWhCO1FBQ3hCYyxTQUFTRSxNQUFNLENBQUMsYUFBYWxCO1FBQzdCZ0IsU0FBU0UsTUFBTSxDQUFDLGFBQWE7UUFFN0IsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLGtCQUFrQjtZQUM3Q0MsUUFBUTtZQUNSQyxNQUFNTjtRQUNSO1FBRUEsTUFBTU8sT0FBTyxNQUFNSixTQUFTSyxJQUFJO1FBQ2hDbkIscUJBQXFCa0I7SUFDdkI7SUFFQSxNQUFNRSxhQUFhO1FBQ2pCLE1BQU1OLFdBQVcsTUFBTUMsTUFBTSxhQUFhO1lBQ3hDQyxRQUFRO1lBQ1JLLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0FKLE1BQU1LLEtBQUtDLFNBQVMsQ0FBQztnQkFDbkI1QjtnQkFDQTZCLE9BQU87Z0JBQ1B2QjtZQUNGO1FBQ0Y7UUFFQSxNQUFNaUIsT0FBTyxNQUFNSixTQUFTSyxJQUFJO1FBQ2hDZixnQkFBZ0JjO0lBQ2xCO0lBR0EscUJBQ0UsOERBQUNPOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFHSiw4REFBQ0M7Z0JBQ0NDLE1BQUs7Z0JBQ0xDLGFBQVk7Z0JBQ1pDLE9BQU9uQztnQkFDUG9DLFVBQVUsQ0FBQ3pCLElBQU1WLGFBQWFVLEVBQUVDLE1BQU0sQ0FBQ3VCLEtBQUs7Ozs7OzswQkFJOUMsOERBQUNIO2dCQUFNQyxNQUFLO2dCQUFPRyxVQUFVMUI7Ozs7OzswQkFHN0IsOERBQUMyQjtnQkFBT0MsU0FBU3hCOzBCQUFpQjs7Ozs7O1lBR2pDVixtQ0FBcUIsOERBQUNtQzswQkFBS1osS0FBS0MsU0FBUyxDQUFDeEIsbUJBQW1CLE1BQU07Ozs7OzswQkFHcEUsOERBQUM0QjtnQkFDQ0MsTUFBSztnQkFDTEMsYUFBWTtnQkFDWkMsT0FBTzdCO2dCQUNQOEIsVUFBVSxDQUFDekIsSUFBTUosYUFBYUksRUFBRUMsTUFBTSxDQUFDdUIsS0FBSzs7Ozs7OzBCQUU5Qyw4REFBQ0U7Z0JBQU9DLFNBQVNiOzBCQUFZOzs7Ozs7WUFHNUJqQiw4QkFBZ0IsOERBQUMrQjswQkFBS1osS0FBS0MsU0FBUyxDQUFDcEIsY0FBYyxNQUFNOzs7Ozs7Ozs7Ozs7QUFHaEU7R0FuRndCVDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbY29tcGFueUlkLCBzZXRDb21wYW55SWRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtmaWxlLCBzZXRGaWxlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFt2ZWN0b3JpemVSZXNwb25zZSwgc2V0VmVjdG9yaXplUmVzcG9uc2VdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2NoYXRJbnB1dCwgc2V0Q2hhdElucHV0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbY2hhdFJlc3BvbnNlLCBzZXRDaGF0UmVzcG9uc2VdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZpbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0RmlsZShlLnRhcmdldC5maWxlc1swXSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVmVjdG9yaXplID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKCFjb21wYW55SWQgfHwgIWZpbGUpIHtcclxuICAgICAgYWxlcnQoJ1BsZWFzZSBwcm92aWRlIGNvbXBhbnkgSUQgYW5kIGEgdGV4dCBmaWxlLicpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdjb21wYW55SWQnLCBjb21wYW55SWQpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdtb2RlbE5hbWUnLCAnYmdlLW0zJyk7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS92ZWN0b3JpemUnLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBib2R5OiBmb3JtRGF0YSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBzZXRWZWN0b3JpemVSZXNwb25zZShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGF0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9jaGF0Jywge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBjb21wYW55SWQsXHJcbiAgICAgICAgbW9kZWw6ICdsbGFtYTMuMScsXHJcbiAgICAgICAgY2hhdElucHV0LCAgLy8gTWFrZSBzdXJlIHRoaXMgY29udGFpbnMgdGhlIHVzZXIncyBxdWVzdGlvblxyXG4gICAgICB9KSxcclxuICAgIH0pO1xyXG4gIFxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHNldENoYXRSZXNwb25zZShkYXRhKTtcclxuICB9O1xyXG4gIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPkNoYXQgd2l0aCBUZXh0IEZpbGU8L2gxPlxyXG5cclxuICAgICAgey8qIENvbXBhbnkgSUQgSW5wdXQgKi99XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgQ29tcGFueSBJRFwiXHJcbiAgICAgICAgdmFsdWU9e2NvbXBhbnlJZH1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENvbXBhbnlJZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICB7LyogRmlsZSBVcGxvYWQgKi99XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtoYW5kbGVGaWxlQ2hhbmdlfSAvPlxyXG5cclxuICAgICAgey8qIFZlY3Rvcml6ZSBCdXR0b24gKi99XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlVmVjdG9yaXplfT5WZWN0b3JpemU8L2J1dHRvbj5cclxuXHJcbiAgICAgIHsvKiBTaG93IFZlY3Rvcml6YXRpb24gUmVzcG9uc2UgKi99XHJcbiAgICAgIHt2ZWN0b3JpemVSZXNwb25zZSAmJiA8cHJlPntKU09OLnN0cmluZ2lmeSh2ZWN0b3JpemVSZXNwb25zZSwgbnVsbCwgMil9PC9wcmU+fVxyXG5cclxuICAgICAgey8qIENoYXQgSW5wdXQgKi99XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIkFzayBhIHF1ZXN0aW9uXCJcclxuICAgICAgICB2YWx1ZT17Y2hhdElucHV0fVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q2hhdElucHV0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgLz5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDaGF0fT5Bc2s8L2J1dHRvbj5cclxuXHJcbiAgICAgIHsvKiBTaG93IENoYXQgUmVzcG9uc2UgKi99XHJcbiAgICAgIHtjaGF0UmVzcG9uc2UgJiYgPHByZT57SlNPTi5zdHJpbmdpZnkoY2hhdFJlc3BvbnNlLCBudWxsLCAyKX08L3ByZT59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkhvbWUiLCJjb21wYW55SWQiLCJzZXRDb21wYW55SWQiLCJmaWxlIiwic2V0RmlsZSIsInZlY3Rvcml6ZVJlc3BvbnNlIiwic2V0VmVjdG9yaXplUmVzcG9uc2UiLCJjaGF0SW5wdXQiLCJzZXRDaGF0SW5wdXQiLCJjaGF0UmVzcG9uc2UiLCJzZXRDaGF0UmVzcG9uc2UiLCJoYW5kbGVGaWxlQ2hhbmdlIiwiZSIsInRhcmdldCIsImZpbGVzIiwiaGFuZGxlVmVjdG9yaXplIiwiYWxlcnQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJkYXRhIiwianNvbiIsImhhbmRsZUNoYXQiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1vZGVsIiwiZGl2IiwiaDEiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIiwicHJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});