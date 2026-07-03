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
    TooltipIcon: ()=>TooltipIcon
});
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/ __webpack_require__.n(external_react_namespaceObject);
const Help_16_cjs_namespaceObject = require("../../atoms/icons/Help-16.cjs");
var Help_16_cjs_default = /*#__PURE__*/ __webpack_require__.n(Help_16_cjs_namespaceObject);
const domId_cjs_namespaceObject = require("../../utils/domId.cjs");
const index_cjs_namespaceObject = require("../VisuallyHidden/index.cjs");
const TooltipBalloon_cjs_namespaceObject = require("./components/TooltipBalloon.cjs");
const external_useFloatingTooltip_cjs_namespaceObject = require("./useFloatingTooltip.cjs");
const Tooltip_styles_cjs_namespaceObject = require("./_shared/Tooltip.styles.cjs");
var Tooltip_styles_cjs_default = /*#__PURE__*/ __webpack_require__.n(Tooltip_styles_cjs_namespaceObject);
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
function TooltipIcon_ownKeys(object, enumerableOnly) {
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
    else TooltipIcon_ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
    return target;
}
const TooltipIcon = /*#__PURE__*/ external_react_default().forwardRef(({ children, id, as: TriggerIcon = Help_16_cjs_default() }, forwardedRef)=>{
    const { isOpen, triggerProps, arrowProps, floatingProps, open, close } = (0, external_useFloatingTooltip_cjs_namespaceObject.useFloatingTooltip)({
        placement: 'top',
        isInitialOpen: false
    });
    const triggerId = (0, domId_cjs_namespaceObject.useDomId)(id);
    const balloonId = (0, domId_cjs_namespaceObject.generateDescribeDomId)(triggerId);
    (0, external_react_namespaceObject.useImperativeHandle)(forwardedRef, ()=>({
            open,
            close
        }), [
        open,
        close
    ]);
    return /*#__PURE__*/ external_react_default().createElement(external_react_default().Fragment, null, /*#__PURE__*/ external_react_default().createElement(Tooltip_styles_cjs_default().TriggerIconWrapper, _object_spread_props(_object_spread({}, triggerProps), {
        id: triggerId,
        tabIndex: 0
    }), /*#__PURE__*/ external_react_default().createElement(TriggerIcon, {
        "aria-describedby": balloonId,
        "aria-label": "more info"
    }), /*#__PURE__*/ external_react_default().createElement(index_cjs_namespaceObject.VisuallyHidden, {
        id: balloonId,
        role: "tooltip"
    }, children)), isOpen && /*#__PURE__*/ external_react_default().createElement(TooltipBalloon_cjs_namespaceObject.TooltipBalloon, _object_spread_props(_object_spread({
        "aria-hidden": true
    }, floatingProps), {
        arrowRef: arrowProps.ref,
        arrowStyle: arrowProps.style
    }), children));
});
exports.TooltipIcon = __webpack_exports__.TooltipIcon;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "TooltipIcon"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
