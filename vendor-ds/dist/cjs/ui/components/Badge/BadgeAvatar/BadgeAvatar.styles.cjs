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
    AvatarBadgeElement: ()=>AvatarBadgeElement
});
const external_styled_components_namespaceObject = require("styled-components");
var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(external_styled_components_namespaceObject);
const styles_cjs_namespaceObject = require("../_shared/styles.cjs");
const AvatarBadgeElement = external_styled_components_default()(styles_cjs_namespaceObject.BadgeBase)`
  border-radius: 50%;
  background-color: ${({ theme })=>theme.color.backgroundMagentaBold};
  color: ${({ theme })=>theme.color.textDefaultInverse};
  ${({ theme, $size })=>{
    if ('small' === $size) return (0, external_styled_components_namespaceObject.css)`
        width: 24px;
        height: 24px;
        ${theme.typography.uiElementLabelSmall};
      `;
    return (0, external_styled_components_namespaceObject.css)`
      width: 40px;
      height: 40px;
      ${theme.typography.uiElementStrong};
    `;
}};
`;
exports.AvatarBadgeElement = __webpack_exports__.AvatarBadgeElement;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "AvatarBadgeElement"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
