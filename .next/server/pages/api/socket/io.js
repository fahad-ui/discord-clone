"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/socket/io";
exports.ids = ["pages/api/socket/io"];
exports.modules = {

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("socket.io");

/***/ }),

/***/ "(api)/./pages/api/socket/io.ts":
/*!********************************!*\
  !*** ./pages/api/socket/io.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io */ \"socket.io\");\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_0__);\n\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\nconst ioHandler = (req, res)=>{\n    if (!res.socket.server.io) {\n        const path = \"/api/socket/io\";\n        const httpServer = res.socket.server;\n        const io = new socket_io__WEBPACK_IMPORTED_MODULE_0__.Server(httpServer, {\n            path: path,\n            addTrailingSlash: false\n        });\n        res.socket.server.io = io;\n    }\n    res.end();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ioHandler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc29ja2V0L2lvLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFOEM7QUFLdkMsTUFBTUUsU0FBUztJQUNsQkMsS0FBSztRQUNEQyxZQUFZO0lBQ2hCO0FBQ0osRUFBRTtBQUVGLE1BQU1DLFlBQVksQ0FBQ0MsS0FBcUJDO0lBQ3BDLElBQUcsQ0FBQ0EsSUFBSUMsTUFBTSxDQUFDQyxNQUFNLENBQUNDLEVBQUUsRUFBQztRQUNyQixNQUFNQyxPQUFPO1FBQ2IsTUFBTUMsYUFBeUJMLElBQUlDLE1BQU0sQ0FBQ0MsTUFBTTtRQUNoRCxNQUFNQyxLQUFLLElBQUlULDZDQUFRQSxDQUFDVyxZQUFZO1lBQ2hDRCxNQUFNQTtZQUNORSxrQkFBa0I7UUFDdEI7UUFDQU4sSUFBSUMsTUFBTSxDQUFDQyxNQUFNLENBQUNDLEVBQUUsR0FBR0E7SUFDM0I7SUFFQUgsSUFBSU8sR0FBRztBQUNYO0FBRUEsaUVBQWVULFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kaXNjb3JkLWNsb25lLy4vcGFnZXMvYXBpL3NvY2tldC9pby50cz9kOTNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlcnZlciBhcyBOZXh0U2VydmVyIH0gZnJvbSBcImh0dHBcIlxyXG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCB9IGZyb20gXCJuZXh0XCJcclxuaW1wb3J0IHsgU2VydmVyIGFzIFNlcnZlcklPIH0gZnJvbSBcInNvY2tldC5pb1wiXHJcblxyXG5cclxuaW1wb3J0IHtOZXh0QXBpUmVzcG9uc2VTZXJ2ZXJJb30gZnJvbSAnQC90eXBlcydcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgICBhcGk6IHtcclxuICAgICAgICBib2R5UGFyc2VyOiBmYWxzZVxyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgaW9IYW5kbGVyID0gKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlU2VydmVySW8pID0+IHtcclxuICAgIGlmKCFyZXMuc29ja2V0LnNlcnZlci5pbyl7XHJcbiAgICAgICAgY29uc3QgcGF0aCA9ICcvYXBpL3NvY2tldC9pbyc7XHJcbiAgICAgICAgY29uc3QgaHR0cFNlcnZlcjogTmV4dFNlcnZlciA9IHJlcy5zb2NrZXQuc2VydmVyIGFzIGFueVxyXG4gICAgICAgIGNvbnN0IGlvID0gbmV3IFNlcnZlcklPKGh0dHBTZXJ2ZXIsIHtcclxuICAgICAgICAgICAgcGF0aDogcGF0aCxcclxuICAgICAgICAgICAgYWRkVHJhaWxpbmdTbGFzaDogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXMuc29ja2V0LnNlcnZlci5pbyA9IGlvXHJcbiAgICB9XHJcblxyXG4gICAgcmVzLmVuZCgpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlvSGFuZGxlcjtcclxuXHJcbiJdLCJuYW1lcyI6WyJTZXJ2ZXIiLCJTZXJ2ZXJJTyIsImNvbmZpZyIsImFwaSIsImJvZHlQYXJzZXIiLCJpb0hhbmRsZXIiLCJyZXEiLCJyZXMiLCJzb2NrZXQiLCJzZXJ2ZXIiLCJpbyIsInBhdGgiLCJodHRwU2VydmVyIiwiYWRkVHJhaWxpbmdTbGFzaCIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/socket/io.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/socket/io.ts"));
module.exports = __webpack_exports__;

})();