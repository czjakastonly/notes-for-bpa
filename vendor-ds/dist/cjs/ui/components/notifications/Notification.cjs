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
    Notification: ()=>Notification
});
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/ __webpack_require__.n(external_react_namespaceObject);
const status_helpers_cjs_namespaceObject = require("../../utils/status.helpers.cjs");
const external_styled_components_namespaceObject = require("styled-components");
const mergeClassNames_cjs_namespaceObject = require("../../utils/mergeClassNames.cjs");
const external_constants_cjs_namespaceObject = require("../../constants.cjs");
const external_BaseNotification_styles_cjs_namespaceObject = require("./BaseNotification.styles.cjs");
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
function Notification_ownKeys(object, enumerableOnly) {
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
    else Notification_ownKeys(Object(source)).forEach(function(key) {
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
const Notification = (_0)=>{
    let { className, children, severity = 'warning', hasIcon = true, onCloseClick } = _0, restDivProps = _object_without_properties(_0, [
        "className",
        "children",
        "severity",
        "hasIcon",
        "onCloseClick"
    ]);
    const theme = (0, external_styled_components_namespaceObject.useTheme)();
    return /*#__PURE__*/ external_react_default().createElement(external_BaseNotification_styles_cjs_namespaceObject.BaseNotification.Container, _object_spread_props(_object_spread({}, restDivProps), {
        className: (0, mergeClassNames_cjs_namespaceObject.mergeClassNames)(external_constants_cjs_namespaceObject.STATIC_CLASS_NAME.notification, className),
        "data-notification-status": severity,
        $statusColor: (0, status_helpers_cjs_namespaceObject.resolveBackColorForStatus)(theme, severity)
    }), hasIcon && /*#__PURE__*/ external_react_default().createElement(external_BaseNotification_styles_cjs_namespaceObject.BaseNotification.StatusIconContainer, {
        "aria-hidden": true,
        $statusColor: (0, status_helpers_cjs_namespaceObject.resolveMainColorForStatus)(theme, severity)
    }, (0, status_helpers_cjs_namespaceObject.renderStatusIconForStatus)(severity)), /*#__PURE__*/ external_react_default().createElement(external_BaseNotification_styles_cjs_namespaceObject.BaseNotification.Content, null, children), onCloseClick && /*#__PURE__*/ external_react_default().createElement(external_BaseNotification_styles_cjs_namespaceObject.BaseNotification.CloseIconContainer, {
        "data-func": "close"
    }, /*#__PURE__*/ external_react_default().createElement(external_BaseNotification_styles_cjs_namespaceObject.BaseNotification.StyledCloseSVG, {
        onClick: onCloseClick
    })));
};
exports.Notification = __webpack_exports__.Notification;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "Notification"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
