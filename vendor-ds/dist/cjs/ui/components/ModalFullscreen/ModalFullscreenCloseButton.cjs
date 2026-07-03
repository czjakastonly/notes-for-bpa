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
    ModalFullscreenCloseButton: ()=>ModalFullscreenCloseButton
});
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/ __webpack_require__.n(external_react_namespaceObject);
const external_styled_components_namespaceObject = require("styled-components");
var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(external_styled_components_namespaceObject);
const Cross_16_cjs_namespaceObject = require("../../atoms/icons/Cross-16.cjs");
var Cross_16_cjs_default = /*#__PURE__*/ __webpack_require__.n(Cross_16_cjs_namespaceObject);
const external_constants_cjs_namespaceObject = require("../../constants.cjs");
const mergeClassNames_cjs_namespaceObject = require("../../utils/mergeClassNames.cjs");
function _define_property(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if ("function" == typeof Object.getOwnPropertySymbols) ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (null == source) return {};
    var target = {}, sourceKeys, key, i;
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        sourceKeys = Reflect.ownKeys(Object(source));
        for(i = 0; i < sourceKeys.length; i++){
            key = sourceKeys[i];
            if (!(excluded.indexOf(key) >= 0)) {
                if (Object.prototype.propertyIsEnumerable.call(source, key)) target[key] = source[key];
            }
        }
        return target;
    }
    target = _object_without_properties_loose(source, excluded);
    if (Object.getOwnPropertySymbols) {
        sourceKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceKeys.length; i++){
            key = sourceKeys[i];
            if (!(excluded.indexOf(key) >= 0)) {
                if (Object.prototype.propertyIsEnumerable.call(source, key)) target[key] = source[key];
            }
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (null == source) return {};
    var target = {}, sourceKeys = Object.getOwnPropertyNames(source), key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (!(excluded.indexOf(key) >= 0)) {
            if (Object.prototype.propertyIsEnumerable.call(source, key)) target[key] = source[key];
        }
    }
    return target;
}
const CloseIcon = external_styled_components_default()(Cross_16_cjs_default())`
  display: block;
  margin: auto;
  path {
    fill: ${(props)=>props.theme.color.iconDefaultInverse};
  }
`;
const CloseButton = external_styled_components_default().button`
  padding: 0;
  margin: 0;
  position: absolute;
  z-index: 1;
  top: ${(props)=>props.top};
  right: ${(props)=>props.right};
  display: flex;
  background-color: ${(props)=>props.theme.color.backgroundGrayDefault};
  border-radius: 50%;
  border-color: transparent;
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: background-color 0.2s;
  outline: 0;
  &:focus-visible {
    outline: 2px solid ${({ theme })=>theme.color.borderFocus};
    outline-offset: 2px;
  }

  &:hover {
    background-color: ${(props)=>props.theme.color.backgroundGrayBold};
  }
`;
const ModalFullscreenCloseButton = (_0)=>{
    let { tabIndex = 0, top = '24px', right = '24px', className } = _0, rest = _object_without_properties(_0, [
        "tabIndex",
        "top",
        "right",
        "className"
    ]);
    return /*#__PURE__*/ external_react_default().createElement(CloseButton, _object_spread({
        tabIndex: tabIndex,
        top: top,
        right: right,
        className: (0, mergeClassNames_cjs_namespaceObject.mergeClassNames)(external_constants_cjs_namespaceObject.STATIC_CLASS_NAME.modalClose, className)
    }, rest), /*#__PURE__*/ external_react_default().createElement(CloseIcon, null));
};
exports.ModalFullscreenCloseButton = __webpack_exports__.ModalFullscreenCloseButton;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "ModalFullscreenCloseButton"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
