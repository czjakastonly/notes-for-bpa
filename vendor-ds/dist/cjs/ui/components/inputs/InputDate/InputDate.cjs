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
    InputDate: ()=>InputDate
});
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/ __webpack_require__.n(external_react_namespaceObject);
const index_cjs_namespaceObject = require("../components/InputWrap/index.cjs");
const domId_cjs_namespaceObject = require("../../../utils/domId.cjs");
const external_FieldDate_index_cjs_namespaceObject = require("../FieldDate/index.cjs");
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
const InputDate = (_0)=>{
    let { className, id: domId, label, message, required, tooltip, value, onChange, status, isFutureDisabled, isPastDisabled, dateFormat, disabled } = _0, restFieldTextProps = _object_without_properties(_0, [
        "className",
        "id",
        "label",
        "message",
        "required",
        "tooltip",
        "value",
        "onChange",
        "status",
        "isFutureDisabled",
        "isPastDisabled",
        "dateFormat",
        "disabled"
    ]);
    const id = (0, domId_cjs_namespaceObject.useDomId)(domId);
    const labelDomId = (0, domId_cjs_namespaceObject.generateLabelDomId)(id, !!label);
    const messageDomId = (0, domId_cjs_namespaceObject.generateDescribeDomId)(id, !!message);
    return /*#__PURE__*/ external_react_default().createElement(index_cjs_namespaceObject.InputWrap, {
        className: className,
        label: label,
        labelDomId: labelDomId,
        message: message,
        messageDomId: messageDomId,
        required: required,
        tooltip: tooltip,
        status: status
    }, /*#__PURE__*/ external_react_default().createElement(external_FieldDate_index_cjs_namespaceObject.FieldDate, _object_spread({
        id: id,
        required: required,
        "aria-describedby": messageDomId,
        "aria-labelledby": labelDomId,
        value: value,
        onChange: onChange,
        status: status,
        isFutureDisabled: isFutureDisabled,
        isPastDisabled: isPastDisabled,
        dateFormat: dateFormat,
        disabled: disabled
    }, restFieldTextProps)));
};
exports.InputDate = __webpack_exports__.InputDate;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "InputDate"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
