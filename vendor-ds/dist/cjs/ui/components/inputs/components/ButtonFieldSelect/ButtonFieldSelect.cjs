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
    ButtonFieldSelect: ()=>ButtonFieldSelect
});
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/ __webpack_require__.n(external_react_namespaceObject);
const external_styled_components_namespaceObject = require("styled-components");
const mergeRefs_cjs_namespaceObject = require("../../../../utils/mergeRefs.cjs");
const TriangleArrowDown_12_cjs_namespaceObject = require("../../../../atoms/icons/TriangleArrowDown-12.cjs");
var TriangleArrowDown_12_cjs_default = /*#__PURE__*/ __webpack_require__.n(TriangleArrowDown_12_cjs_namespaceObject);
const helpers_cjs_namespaceObject = require("../../_shared/helpers.cjs");
const external_constants_cjs_namespaceObject = require("../../../../constants.cjs");
const mergeClassNames_cjs_namespaceObject = require("../../../../utils/mergeClassNames.cjs");
const Field_styles_cjs_namespaceObject = require("../../_shared/Field.styles.cjs");
const external_ButtonFieldSelect_styles_cjs_namespaceObject = require("./ButtonFieldSelect.styles.cjs");
var external_ButtonFieldSelect_styles_cjs_default = /*#__PURE__*/ __webpack_require__.n(external_ButtonFieldSelect_styles_cjs_namespaceObject);
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
function ButtonFieldSelect_ownKeys(object, enumerableOnly) {
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
    else ButtonFieldSelect_ownKeys(Object(source)).forEach(function(key) {
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
const ButtonFieldSelect = /*#__PURE__*/ (0, external_react_namespaceObject.forwardRef)((_0, _1)=>{
    let _ref = [
        _0,
        _1
    ], [_ref1, ..._rest] = _ref, { label, children, disabled, iconLeft, iconUnits, isOpen, isPlaceholder, onClick, required, status, tabIndex = 0, additionalActionNode, className } = _ref1, htmlButtonProps = _object_without_properties(_ref1, [
        "label",
        "children",
        "disabled",
        "iconLeft",
        "iconUnits",
        "isOpen",
        "isPlaceholder",
        "onClick",
        "required",
        "status",
        "tabIndex",
        "additionalActionNode",
        "className"
    ]), [forwardedRef] = _rest;
    const theme = (0, external_styled_components_namespaceObject.useTheme)();
    const buttonInternalRef = (0, external_react_namespaceObject.useRef)(null);
    const buttonRef = (0, mergeRefs_cjs_namespaceObject.useMergeRefs)(buttonInternalRef, forwardedRef);
    const statusIcon = (0, helpers_cjs_namespaceObject.renderStatusIconForInputStatus)(status);
    const statusColor = (0, helpers_cjs_namespaceObject.resolveMessageColorForInputStatus)(theme, status);
    const borderColor = statusColor || (isOpen ? theme.color.borderDefaultHover : void 0);
    return /*#__PURE__*/ external_react_default().createElement(Field_styles_cjs_namespaceObject.FieldStyles.FieldWrap, {
        $borderColor: borderColor
    }, /*#__PURE__*/ external_react_default().createElement(external_ButtonFieldSelect_styles_cjs_default().ButtonElement, _object_spread_props(_object_spread({}, htmlButtonProps), {
        className: (0, mergeClassNames_cjs_namespaceObject.mergeClassNames)(external_constants_cjs_namespaceObject.STATIC_CLASS_NAME.field, className),
        $isPlaceholder: isPlaceholder,
        "aria-expanded": isOpen,
        isOpen: isOpen,
        "aria-invalid": 'error' === status,
        "aria-required": required,
        disabled: disabled,
        onClick: onClick,
        ref: buttonRef,
        tabIndex: tabIndex,
        type: "button"
    }), iconLeft && /*#__PURE__*/ external_react_default().createElement(Field_styles_cjs_namespaceObject.FieldStyles.IconLeftWrap, {
        "aria-hidden": true
    }, iconLeft), /*#__PURE__*/ external_react_default().createElement(external_ButtonFieldSelect_styles_cjs_default().Text, null, label || children), iconUnits && /*#__PURE__*/ external_react_default().createElement(Field_styles_cjs_namespaceObject.FieldStyles.IconUnitsWrap, {
        "aria-hidden": true
    }, iconUnits), statusIcon && /*#__PURE__*/ external_react_default().createElement(Field_styles_cjs_namespaceObject.FieldStyles.IconRightWrap, {
        "aria-hidden": true,
        $color: statusColor
    }, statusIcon), /*#__PURE__*/ external_react_default().createElement(Field_styles_cjs_namespaceObject.FieldStyles.IconRightWrap, {
        "aria-hidden": true
    }, /*#__PURE__*/ external_react_default().createElement(TriangleArrowDown_12_cjs_default(), null))), !!additionalActionNode && /*#__PURE__*/ external_react_default().createElement(Field_styles_cjs_namespaceObject.FieldStyles.ButtonElementWrap, null, additionalActionNode));
});
exports.ButtonFieldSelect = __webpack_exports__.ButtonFieldSelect;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "ButtonFieldSelect"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
