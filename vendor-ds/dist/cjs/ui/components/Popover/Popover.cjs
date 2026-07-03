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
    Popover: ()=>Popover
});
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/ __webpack_require__.n(external_react_namespaceObject);
const index_cjs_namespaceObject = require("../../utils/Portal/index.cjs");
const external_framer_motion_namespaceObject = require("framer-motion");
const FocusLock_index_cjs_namespaceObject = require("../../utils/FocusLock/index.cjs");
const external_Popover_styles_cjs_namespaceObject = require("./Popover.styles.cjs");
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
function Popover_ownKeys(object, enumerableOnly) {
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
    else Popover_ownKeys(Object(source)).forEach(function(key) {
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
const Popover = /*#__PURE__*/ external_react_default().forwardRef((_0, _1)=>{
    let _ref = [
        _0,
        _1
    ], [_ref1, ..._rest] = _ref, { style = {}, children, minWidthPx, maxWidthPx, maxHeightPx, isFocusLocked, zIndex } = _ref1, restMotionDivProps = _object_without_properties(_ref1, [
        "style",
        "children",
        "minWidthPx",
        "maxWidthPx",
        "maxHeightPx",
        "isFocusLocked",
        "zIndex"
    ]), [forwardedRef] = _rest;
    const activeElementBeforeOpenRef = (0, external_react_namespaceObject.useRef)(document.activeElement);
    (0, external_react_namespaceObject.useEffect)(()=>()=>{
            var _activeElementBeforeOpenRef_current_focus, _activeElementBeforeOpenRef_current;
            null == activeElementBeforeOpenRef || null == (_activeElementBeforeOpenRef_current = activeElementBeforeOpenRef.current) || null == (_activeElementBeforeOpenRef_current_focus = _activeElementBeforeOpenRef_current.focus) || _activeElementBeforeOpenRef_current_focus.call(_activeElementBeforeOpenRef_current);
            activeElementBeforeOpenRef.current = null;
        }, []);
    const appliedStyle = Object.assign(style, minWidthPx && {
        minWidth: `${minWidthPx}px`
    }, maxWidthPx && {
        maxWidth: `${maxWidthPx}px`
    }, maxHeightPx && {
        maxHeight: `${maxHeightPx}px`
    });
    return /*#__PURE__*/ external_react_default().createElement(external_framer_motion_namespaceObject.AnimatePresence, null, /*#__PURE__*/ external_react_default().createElement(index_cjs_namespaceObject.Portal, {
        zIndex: zIndex
    }, /*#__PURE__*/ external_react_default().createElement(FocusLock_index_cjs_namespaceObject.FocusLock, {
        isFocusLocked: isFocusLocked
    }, /*#__PURE__*/ external_react_default().createElement(external_Popover_styles_cjs_namespaceObject.Container, _object_spread_props(_object_spread({}, restMotionDivProps), {
        ref: forwardedRef,
        style: appliedStyle
    }), children))));
});
exports.Popover = __webpack_exports__.Popover;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "Popover"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
