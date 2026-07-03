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
    ButtonSplit: ()=>ButtonSplit
});
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/ __webpack_require__.n(external_react_namespaceObject);
const external_styled_components_namespaceObject = require("styled-components");
var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(external_styled_components_namespaceObject);
const styles_cjs_namespaceObject = require("../_shared/styles.cjs");
const Container = external_styled_components_default().div`
  margin: 0;
  padding: 0;
  display: inline-flex;
  gap: 1px;

  & > *:focus-visible {
    z-index: 1; // for the focus-visible outline to go up
  }

  // in the middle
  & > *:not(:first-child):not(:last-child) {
    border-radius: 0;
  }

  // edges icon-only
  & > *:first-child ${styles_cjs_namespaceObject.ButtonStyles.IconWrapOnly}, & > *:last-child ${styles_cjs_namespaceObject.ButtonStyles.IconWrapOnly} {
    margin-right: 2px;
  }

  // left edge
  & > *:first-child:not(:last-child) {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }

  // right edge
  & > *:last-child:not(:first-child) {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }

  // all but first
  & > ${styles_cjs_namespaceObject.ButtonStyles.OutlineButtonElement}:not(:first-child) {
    margin-left: -2px;
  }
`;
const ButtonSplit = ({ children })=>/*#__PURE__*/ external_react_default().createElement(Container, null, children);
exports.ButtonSplit = __webpack_exports__.ButtonSplit;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "ButtonSplit"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
