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
    default: ()=>Tooltip_styles
});
const external_styled_components_namespaceObject = require("styled-components");
var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(external_styled_components_namespaceObject);
const external_framer_motion_namespaceObject = require("framer-motion");
const TriggerWrap = external_styled_components_default().span``;
const BalloonWrap = external_styled_components_default()(external_framer_motion_namespaceObject.motion.div).attrs({
    initial: {
        x: 0,
        y: 8,
        opacity: 0
    },
    animate: {
        y: 0,
        x: 0,
        opacity: 1
    },
    exit: {
        x: 0,
        y: 0,
        opacity: 0
    },
    transition: {
        duration: 0.2
    }
})`
  position: absolute;
  opacity: 0;
`;
const BalloonArrow = external_styled_components_default().div`
  z-index: -1;
  background: ${({ theme })=>theme.color.textDark};

  visibility: hidden;
  position: absolute;
  width: 6px;
  height: 6px;

  &::before {
    position: absolute;
    width: 6px;
    height: 6px;
    background: inherit;
    visibility: visible;
    content: '';
    transform: rotate(45deg);
  }
`;
const BalloonBody = external_styled_components_default()(external_framer_motion_namespaceObject.motion.div)`
  background: ${({ theme })=>theme.color.backgroundGrayBoldest};
  text-align: left;
  padding: 8px 12px;
  color: ${({ theme })=>theme.color.textDefaultInverse};
  border-radius: 6px;
  font-size: 11px;
  line-height: 16px;
  font-weight: 700;
  max-width: ${({ maxWidthPx })=>maxWidthPx || 240}px;
  width: max-content;
  word-break: break-word;

  ${({ fitWidth })=>fitWidth && (0, external_styled_components_namespaceObject.css)`
      max-width: 100%;
      width: auto;
    `}
`;
const TriggerIconWrapper = external_styled_components_default().span`
  cursor: default;
  padding: 0;
  margin: 0 0 0 4px;
  width: 16px;
  height: 16px;
  line-height: 16px;
  display: inline-block;
  vertical-align: bottom;
  border-radius: 8px;
  color: ${({ theme })=>theme.color.textPlaceholder};

  &:focus-visible {
    outline: 2px solid ${({ theme })=>theme.color.borderFocus};
    outline-offset: 2px;
  }

  & svg {
    width: 100%;
    height: 100%;
  }

  & svg path {
    fill: ${({ theme })=>theme.color.iconSubtle};
    transition: fill 0.2s;
  }
  &:hover svg path,
  &:focus svg path {
    fill: ${(props)=>props.theme.color.iconDefault};
    transition: fill 0.2s;
  }
`;
const Tooltip_styles = {
    TriggerWrap,
    BalloonWrap,
    BalloonArrow,
    BalloonBody,
    TriggerIconWrapper
};
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
