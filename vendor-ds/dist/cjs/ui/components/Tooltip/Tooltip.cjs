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
    Tooltip: ()=>Tooltip
});
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/ __webpack_require__.n(external_react_namespaceObject);
const external_constants_cjs_namespaceObject = require("../../constants.cjs");
const domId_cjs_namespaceObject = require("../../utils/domId.cjs");
const Tooltip_styles_cjs_namespaceObject = require("./_shared/Tooltip.styles.cjs");
var Tooltip_styles_cjs_default = /*#__PURE__*/ __webpack_require__.n(Tooltip_styles_cjs_namespaceObject);
const external_useFloatingTooltip_cjs_namespaceObject = require("./useFloatingTooltip.cjs");
const TooltipBalloon_cjs_namespaceObject = require("./components/TooltipBalloon.cjs");
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
function Tooltip_ownKeys(object, enumerableOnly) {
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
    else Tooltip_ownKeys(Object(source)).forEach(function(key) {
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
const Tooltip = (_0)=>{
    let { children, content, placement, isInitialOpen, isFlipDisabled, isFocusListenerEnabled, isHoverListenerEnabled, strategy, offset, id } = _0, tooltipBalloonProps = _object_without_properties(_0, [
        "children",
        "content",
        "placement",
        "isInitialOpen",
        "isFlipDisabled",
        "isFocusListenerEnabled",
        "isHoverListenerEnabled",
        "strategy",
        "offset",
        "id"
    ]);
    const { isOpen, triggerProps, arrowProps, floatingProps, open, close } = (0, external_useFloatingTooltip_cjs_namespaceObject.useFloatingTooltip)({
        placement,
        isInitialOpen,
        isFlipDisabled,
        isFocusListenerEnabled,
        isHoverListenerEnabled,
        strategy,
        offset
    });
    const domId = (0, domId_cjs_namespaceObject.useDomId)(id);
    const shouldShowBalloon = isOpen && !!content;
    const balloonId = (0, domId_cjs_namespaceObject.generateDescribeDomId)(domId, shouldShowBalloon);
    return /*#__PURE__*/ external_react_default().createElement(external_react_default().Fragment, null, /*#__PURE__*/ external_react_default().createElement(Tooltip_styles_cjs_default().TriggerWrap, _object_spread_props(_object_spread({
        className: external_constants_cjs_namespaceObject.STATIC_CLASS_NAME.tooltipTrigger
    }, triggerProps), {
        onFocus: open,
        onBlur: close
    }), /*#__PURE__*/ (0, external_react_namespaceObject.isValidElement)(children) ? /*#__PURE__*/ (0, external_react_namespaceObject.cloneElement)(children, {
        'aria-describedby': balloonId
    }) : children), shouldShowBalloon ? /*#__PURE__*/ external_react_default().createElement(TooltipBalloon_cjs_namespaceObject.TooltipBalloon, _object_spread_props(_object_spread({
        role: "tooltip"
    }, tooltipBalloonProps, floatingProps), {
        arrowRef: arrowProps.ref,
        arrowStyle: arrowProps.style,
        id: balloonId
    }), content) : null);
};
exports.Tooltip = __webpack_exports__.Tooltip;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "Tooltip"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
