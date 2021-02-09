webpackHotUpdate("main",{

/***/ "./src/Components/Messages/index.js":
/*!******************************************!*\
  !*** ./src/Components/Messages/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Message */ "./src/Components/Messages/Message.js");
var _jsxFileName = "/var/www/html/Apotheose/projet-histoire-de-rencontre/meetmypet/src/Components/Messages/index.js";




const Messages = ({
  messages
}) => {
  const messagesDivRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  console.log(messages);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    messagesDivRef.current.scrollTo(0, messagesDivRef.current.scrollHeight);
  }, [messages]);
  /* key={`message-${message.id}`} */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "messages",
    ref: messagesDivRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, messages.map(message => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Message__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({
    key: `message-${message.id}`
  }, message, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }))));
};

Messages.propTypes = {
  messages: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
  })).isRequired
}; // == Export

/* harmony default export */ __webpack_exports__["default"] = (Messages);

/***/ })

})
//# sourceMappingURL=main.9eaebda23687180906fa.hot-update.js.map