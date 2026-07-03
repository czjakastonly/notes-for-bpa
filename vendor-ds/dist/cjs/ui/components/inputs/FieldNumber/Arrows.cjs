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
    Arrows: ()=>Arrows
});
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/ __webpack_require__.n(external_react_namespaceObject);
const external_styled_components_namespaceObject = require("styled-components");
var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(external_styled_components_namespaceObject);
const TriangleArrowDown_12_cjs_namespaceObject = require("../../../atoms/icons/TriangleArrowDown-12.cjs");
var TriangleArrowDown_12_cjs_default = /*#__PURE__*/ __webpack_require__.n(TriangleArrowDown_12_cjs_namespaceObject);
const Container = external_styled_components_default().div`
  height: 36px;
  position: relative;
  padding: 0 6px;
`;
const Arrow = external_styled_components_default()(TriangleArrowDown_12_cjs_default())`
  position: absolute;
  cursor: pointer;
  outline: none;
  left: 0;
  path {
    transition: fill 0.2s;
    fill: ${({ theme })=>theme.color.iconDefault};
  }

  ${({ $active, theme })=>$active && (0, external_styled_components_namespaceObject.css)`
      background-color: ${theme.color.backgroundDefaultActive};
    `}

  &:hover {
    background-color: ${({ theme })=>theme.color.backgroundDefaultHover};
  }

  &:first-child {
    top: 4px;
    transform: rotate(180deg);
  }

  &:last-child {
    bottom: 4px;
  }
`;
const Arrows = ({ onDownClick, onUpClick, isDownActive, isUpActive, disabled })=>/*#__PURE__*/ external_react_default().createElement(Container, null, /*#__PURE__*/ external_react_default().createElement(Arrow, {
        $disabled: disabled,
        $active: isUpActive,
        onClick: onUpClick,
        onMouseDown: (e)=>e.preventDefault(),
        "aria-hidden": true
    }), /*#__PURE__*/ external_react_default().createElement(Arrow, {
        $disabled: disabled,
        $active: isDownActive,
        onClick: onDownClick,
        onMouseDown: (e)=>e.preventDefault(),
        "aria-hidden": true
    }));
exports.Arrows = __webpack_exports__.Arrows;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "Arrows"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
