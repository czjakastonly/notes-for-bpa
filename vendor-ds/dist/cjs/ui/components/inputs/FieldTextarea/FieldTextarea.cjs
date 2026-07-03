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
    FieldTextarea: ()=>FieldTextarea
});
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/ __webpack_require__.n(external_react_namespaceObject);
const external_styled_components_namespaceObject = require("styled-components");
const mergeRefs_cjs_namespaceObject = require("../../../utils/mergeRefs.cjs");
const helpers_cjs_namespaceObject = require("../_shared/helpers.cjs");
const external_constants_cjs_namespaceObject = require("../../../constants.cjs");
const external_FieldTextarea_styles_cjs_namespaceObject = require("./FieldTextarea.styles.cjs");
const Field_styles_cjs_namespaceObject = require("../_shared/Field.styles.cjs");
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
function FieldTextarea_ownKeys(object, enumerableOnly) {
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
    else FieldTextarea_ownKeys(Object(source)).forEach(function(key) {
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
const FieldTextarea = /*#__PURE__*/ external_react_default().forwardRef((_0, _1)=>{
    let _ref = [
        _0,
        _1
    ], [_ref1, ..._rest] = _ref, { disabled, name, value, onChange, onChangeValue, status, minRows = 3, maxLength } = _ref1, restTextAreaHtmlProps = _object_without_properties(_ref1, [
        "disabled",
        "name",
        "value",
        "onChange",
        "onChangeValue",
        "status",
        "minRows",
        "maxLength"
    ]), [forwardedRef] = _rest;
    const inputRefInternal = (0, external_react_namespaceObject.useRef)(null);
    const inputRef = (0, mergeRefs_cjs_namespaceObject.useMergeRefs)(inputRefInternal, forwardedRef);
    const theme = (0, external_styled_components_namespaceObject.useTheme)();
    const statusIcon = (0, helpers_cjs_namespaceObject.renderStatusIconForInputStatus)(status);
    const statusIconColor = (0, helpers_cjs_namespaceObject.resolveIconColorForInputStatus)(theme, status);
    const statusBorderColor = (0, helpers_cjs_namespaceObject.resolveBorderColorForInputStatus)(theme, status);
    const handleContainerClick = ()=>{
        if (inputRefInternal.current) inputRefInternal.current.focus();
    };
    const handleChange = (e)=>{
        if (!disabled) {
            null == onChange || onChange(e);
            null == onChangeValue || onChangeValue(e.target.value, name);
        }
    };
    return /*#__PURE__*/ external_react_default().createElement(external_FieldTextarea_styles_cjs_namespaceObject.FieldTextAreaStyles.FieldWrap, {
        $borderColor: statusBorderColor,
        $disabled: disabled,
        onClick: handleContainerClick
    }, /*#__PURE__*/ external_react_default().createElement(external_FieldTextarea_styles_cjs_namespaceObject.FieldTextAreaStyles.TextareaAutosizeElement, _object_spread_props(_object_spread({}, restTextAreaHtmlProps), {
        "aria-invalid": 'error' === status,
        className: external_constants_cjs_namespaceObject.STATIC_CLASS_NAME.field,
        disabled: disabled,
        maxLength: maxLength,
        minRows: minRows,
        name: name,
        onChange: handleChange,
        readOnly: !onChange && !onChangeValue,
        ref: inputRef,
        value: value
    })), statusIcon && /*#__PURE__*/ external_react_default().createElement(Field_styles_cjs_namespaceObject.FieldStyles.IconRightWrap, {
        "aria-hidden": true,
        $color: statusIconColor
    }, statusIcon));
});
exports.FieldTextarea = __webpack_exports__.FieldTextarea;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "FieldTextarea"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
