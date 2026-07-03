"use strict";
var __webpack_require__ = {};
(()=>{
    __webpack_require__.n = (module)=>{
        var getter = module && module.__esModule ? ()=>module['default'] : ()=>module;
        __webpack_require__.d(getter, {
            a: getter
        });
        return getter;
    };
})();
(()=>{
    __webpack_require__.d = (exports1, definition)=>{
        for(var key in definition)if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports1, key)) Object.defineProperty(exports1, key, {
            enumerable: true,
            get: definition[key]
        });
    };
})();
(()=>{
    __webpack_require__.o = (obj, prop)=>Object.prototype.hasOwnProperty.call(obj, prop);
})();
(()=>{
    __webpack_require__.r = (exports1)=>{
        if ("u" > typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports1, Symbol.toStringTag, {
            value: 'Module'
        });
        Object.defineProperty(exports1, '__esModule', {
            value: true
        });
    };
})();
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
    Header: ()=>Header
});
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/ __webpack_require__.n(external_react_namespaceObject);
const ChevronRight_16_cjs_namespaceObject = require("../../../atoms/icons/ChevronRight-16.cjs");
var ChevronRight_16_cjs_default = /*#__PURE__*/ __webpack_require__.n(ChevronRight_16_cjs_namespaceObject);
const ChevronLeft_16_cjs_namespaceObject = require("../../../atoms/icons/ChevronLeft-16.cjs");
var ChevronLeft_16_cjs_default = /*#__PURE__*/ __webpack_require__.n(ChevronLeft_16_cjs_namespaceObject);
const index_cjs_namespaceObject = require("../../buttons/ButtonMinimal/index.cjs");
const external_styles_cjs_namespaceObject = require("./styles.cjs");
const Header = ({ children, onPrevClick, onNextClick, onTextClick, calendarNavigationLabel = 'Calendar navigation', previousLabel = 'Previous', nextLabel = 'Next' })=>/*#__PURE__*/ external_react_default().createElement(external_styles_cjs_namespaceObject.CalendarStyles.HeaderWrapper, {
        role: "group",
        "aria-label": calendarNavigationLabel
    }, /*#__PURE__*/ external_react_default().createElement(index_cjs_namespaceObject.ButtonMinimal, {
        size: "small",
        iconOnly: /*#__PURE__*/ external_react_default().createElement(ChevronLeft_16_cjs_default(), null),
        onClick: onPrevClick,
        "aria-label": previousLabel
    }), 'function' == typeof onTextClick ? /*#__PURE__*/ external_react_default().createElement(index_cjs_namespaceObject.ButtonMinimal, {
        onClick: onTextClick,
        "aria-label": nextLabel
    }, children) : /*#__PURE__*/ external_react_default().createElement(external_styles_cjs_namespaceObject.CalendarStyles.HeaderText, {
        "aria-live": "polite",
        "aria-atomic": "true"
    }, children), /*#__PURE__*/ external_react_default().createElement(index_cjs_namespaceObject.ButtonMinimal, {
        size: "small",
        iconOnly: /*#__PURE__*/ external_react_default().createElement(ChevronRight_16_cjs_default(), null),
        onClick: onNextClick,
        "aria-label": nextLabel
    }));
exports.Header = __webpack_exports__.Header;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "Header"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
