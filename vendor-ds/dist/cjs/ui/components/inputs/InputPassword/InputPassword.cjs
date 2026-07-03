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
    InputPassword: ()=>InputPassword
});
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/ __webpack_require__.n(external_react_namespaceObject);
const external_styled_components_namespaceObject = require("styled-components");
var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(external_styled_components_namespaceObject);
const index_cjs_namespaceObject = require("../components/InputWrap/index.cjs");
const Eye_16_cjs_namespaceObject = require("../../../atoms/icons/Eye-16.cjs");
var Eye_16_cjs_default = /*#__PURE__*/ __webpack_require__.n(Eye_16_cjs_namespaceObject);
const Eye_crossed_16_cjs_namespaceObject = require("../../../atoms/icons/Eye-crossed-16.cjs");
var Eye_crossed_16_cjs_default = /*#__PURE__*/ __webpack_require__.n(Eye_crossed_16_cjs_namespaceObject);
const domId_cjs_namespaceObject = require("../../../utils/domId.cjs");
const external_Tooltip_index_cjs_namespaceObject = require("../../Tooltip/index.cjs");
const external_FieldText_index_cjs_namespaceObject = require("../FieldText/index.cjs");
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
function InputPassword_ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = null != source ? source : {};
    if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    else InputPassword_ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
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
const eyeIconStyle = (0, external_styled_components_namespaceObject.css)`
  cursor: pointer;
  path {
    transition: fill 0.2s;
  }

  &:hover {
    path {
      fill: ${({ theme })=>theme.color.iconHover};
    }
  }
`;
const EyeIcon = external_styled_components_default()(Eye_16_cjs_default())`
  ${eyeIconStyle}
`;
const EyeIconCrossed = external_styled_components_default()(Eye_crossed_16_cjs_default())`
  ${eyeIconStyle}
`;
const InputPassword = /*#__PURE__*/ (0, external_react_namespaceObject.forwardRef)((_0, _1)=>{
    let _ref = [
        _0,
        _1
    ], [_ref1, ..._rest] = _ref, { className, id: domId, label, message, required, status, tooltip, onFocus, onBlur } = _ref1, restFieldTextProps = _object_without_properties(_ref1, [
        "className",
        "id",
        "label",
        "message",
        "required",
        "status",
        "tooltip",
        "onFocus",
        "onBlur"
    ]), [forwardedRef] = _rest;
    const id = (0, domId_cjs_namespaceObject.useDomId)(domId);
    const [isPasswordShown, setIsPasswordShown] = (0, external_react_namespaceObject.useState)(false);
    const describedbyDomId = (0, domId_cjs_namespaceObject.generateDescribeDomId)(id, !!message);
    const labelDomId = (0, domId_cjs_namespaceObject.generateLabelDomId)(id, !!label);
    const tooltipRef = (0, external_react_namespaceObject.useRef)(null);
    const onFocusProxy = (e)=>{
        var _tooltipRef_current_open, _tooltipRef_current;
        null == (_tooltipRef_current = tooltipRef.current) || null == (_tooltipRef_current_open = _tooltipRef_current.open) || _tooltipRef_current_open.call(_tooltipRef_current);
        null == onFocus || onFocus(e);
    };
    const onBlurProxy = (e)=>{
        var _tooltipRef_current_close, _tooltipRef_current;
        null == (_tooltipRef_current = tooltipRef.current) || null == (_tooltipRef_current_close = _tooltipRef_current.close) || _tooltipRef_current_close.call(_tooltipRef_current);
        null == onBlur || onBlur(e);
        setIsPasswordShown(false);
    };
    (0, external_react_namespaceObject.useEffect)(()=>{
        if (restFieldTextProps.value) {
            var _tooltipRef_current_open, _tooltipRef_current;
            null == (_tooltipRef_current = tooltipRef.current) || null == (_tooltipRef_current_open = _tooltipRef_current.open) || _tooltipRef_current_open.call(_tooltipRef_current);
        }
    }, [
        restFieldTextProps.value
    ]);
    return /*#__PURE__*/ external_react_default().createElement(index_cjs_namespaceObject.InputWrap, {
        className: className,
        label: /*#__PURE__*/ external_react_default().createElement(external_react_default().Fragment, null, label, tooltip && /*#__PURE__*/ external_react_default().createElement(external_Tooltip_index_cjs_namespaceObject.TooltipIcon, {
            ref: tooltipRef
        }, tooltip)),
        labelDomId: labelDomId,
        message: message,
        messageDomId: describedbyDomId,
        required: required,
        status: status
    }, /*#__PURE__*/ external_react_default().createElement(external_FieldText_index_cjs_namespaceObject.FieldText, _object_spread_props(_object_spread({}, restFieldTextProps), {
        "aria-describedby": describedbyDomId,
        "aria-labelledby": labelDomId,
        onBlur: onBlurProxy,
        onFocus: onFocusProxy,
        id: id,
        ref: forwardedRef,
        required: required,
        status: status,
        type: isPasswordShown ? 'text' : 'password',
        iconRight: isPasswordShown ? /*#__PURE__*/ external_react_default().createElement(EyeIconCrossed, {
            tabIndex: 0,
            role: "switch",
            onClick: ()=>setIsPasswordShown(false),
            onKeyDown: (e)=>{
                if ('Enter' === e.key) setIsPasswordShown(false);
            }
        }) : /*#__PURE__*/ external_react_default().createElement(EyeIcon, {
            tabIndex: 0,
            role: "switch",
            onClick: ()=>setIsPasswordShown(true),
            onKeyDown: (e)=>{
                if ('Enter' === e.key) setIsPasswordShown(true);
            }
        })
    })));
});
exports.InputPassword = __webpack_exports__.InputPassword;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "InputPassword"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
