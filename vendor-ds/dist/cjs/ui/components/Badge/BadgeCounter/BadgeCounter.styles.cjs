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
    CounterBadgeElement: ()=>CounterBadgeElement
});
const external_styled_components_namespaceObject = require("styled-components");
var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(external_styled_components_namespaceObject);
const styles_cjs_namespaceObject = require("../_shared/styles.cjs");
const CounterBadgeElement = external_styled_components_default()(styles_cjs_namespaceObject.BadgeBase)`
  padding: 0 4px;
  border-radius: 16px;
  min-width: 16px;
  ${({ theme })=>theme.typography.paragraphSmall};
  ${({ theme, $variant })=>{
    if ('important' === $variant) return (0, external_styled_components_namespaceObject.css)`
        background-color: ${theme.color.backgroundPrimary};
        color: ${theme.color.textDefaultInverse};
      `;
    return (0, external_styled_components_namespaceObject.css)`
      background-color: ${theme.color.backgroundGraySubtle};
      color: ${theme.color.textDefault};
    `;
}};
`;
exports.CounterBadgeElement = __webpack_exports__.CounterBadgeElement;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "CounterBadgeElement"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
