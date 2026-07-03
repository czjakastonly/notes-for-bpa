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
    ChipElement: ()=>ChipElement,
    ChipTruncatableElement: ()=>ChipTruncatableElement
});
const external_styled_components_namespaceObject = require("styled-components");
var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(external_styled_components_namespaceObject);
function resolveBackground($background, $borderColor, fallback) {
    if ($background) return $background;
    if ($borderColor) return `color-mix(in srgb, ${$borderColor} 12%, white)`;
    return fallback || 'transparent';
}
const ChipElement = external_styled_components_default().span`
  ${({ theme })=>theme.typography.uiElementStrong};
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 4px;
  color: ${({ theme })=>theme.color.textSubtle};
  background: ${({ $background, $borderColor, theme })=>resolveBackground($background, $borderColor, theme.color.backgroundGraySubtlest)};
  border: 1px solid
    ${({ $borderColor })=>$borderColor ? `oklch(from ${$borderColor} min(l, 0.9) c h)` : 'transparent'};
  word-break: break-word;
`;
const ChipTruncatableElement = external_styled_components_default()(ChipElement)`
  display: inline-block;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ $maxWidth })=>null != $maxWidth && (0, external_styled_components_namespaceObject.css)`
      max-width: ${'number' == typeof $maxWidth ? `${$maxWidth}px` : $maxWidth};
    `}
`;
exports.ChipElement = __webpack_exports__.ChipElement;
exports.ChipTruncatableElement = __webpack_exports__.ChipTruncatableElement;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "ChipElement",
    "ChipTruncatableElement"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
