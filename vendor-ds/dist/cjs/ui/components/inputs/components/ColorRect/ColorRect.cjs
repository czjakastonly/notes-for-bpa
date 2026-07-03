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
    ColorRect: ()=>ColorRect
});
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/ __webpack_require__.n(external_react_namespaceObject);
const external_styled_components_namespaceObject = require("styled-components");
var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(external_styled_components_namespaceObject);
const Svg = external_styled_components_default().svg`
  transform: scale(1.25); // 16px has to be changed to 20px
  transform-origin: center;
`;
const ColorRect = ({ colorValue = '', disabled })=>{
    const theme = (0, external_styled_components_namespaceObject.useTheme)();
    const backgroundStrokeColor = disabled ? theme.color.backgroundGraySubtle : theme.color.backgroundGrayDefault;
    const backgroundStrokeDasharray = disabled || !colorValue ? '4 4' : void 0;
    const foregroundPreviewColor = disabled ? theme.color.backgroundGraySubtle : colorValue;
    return /*#__PURE__*/ external_react_default().createElement(Svg, {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none"
    }, /*#__PURE__*/ external_react_default().createElement("rect", {
        x: "0.5",
        y: "0.5",
        width: "19",
        height: "19",
        rx: "1.5",
        fill: "none",
        stroke: backgroundStrokeColor,
        strokeWidth: "1",
        strokeDasharray: backgroundStrokeDasharray
    }), /*#__PURE__*/ external_react_default().createElement("rect", {
        x: "0.5",
        y: "0.5",
        width: "19",
        height: "19",
        rx: "1.5",
        fill: foregroundPreviewColor,
        stroke: foregroundPreviewColor,
        strokeOpacity: "0.5",
        strokeWidth: "1"
    }));
};
exports.ColorRect = __webpack_exports__.ColorRect;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "ColorRect"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
