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
    Container: ()=>Container
});
const external_styled_components_namespaceObject = require("styled-components");
var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(external_styled_components_namespaceObject);
const styles_cjs_namespaceObject = require("../_shared/styles.cjs");
const Container = external_styled_components_default().div`
  display: inline-flex;
  width: 100%;

  & > *:focus-visible {
    z-index: 1;
  }

  & > ${styles_cjs_namespaceObject.ButtonStyles.OutlineButtonElement} {
    height: 40px;
    border-radius: 0;
    border-color: ${({ theme })=>theme.color.borderSuccess};

    &:hover,
    &:active,
    &:focus-visible {
      border-color: ${({ theme })=>theme.color.borderSuccess};
    }

    &:first-child {
      flex: 1;
      min-width: 0;
      justify-content: flex-start;

      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;

      /* IconWrapLoader is absolutely positioned without offsets, so it
         normally lands at the flex child's static position. Overriding
         justify-content to flex-start would pin it to the left — recenter
         it explicitly so the loading spinner stays in the middle. */
      ${styles_cjs_namespaceObject.ButtonStyles.IconWrapLoader} {
        left: 50%;
        transform: translateX(-50%);
      }
    }

    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    &:not(:first-child) {
      margin-left: -1px;
    }
  }
`;
exports.Container = __webpack_exports__.Container;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "Container"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
