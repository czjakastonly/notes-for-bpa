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
    Dropdown: ()=>Dropdown
});
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/ __webpack_require__.n(external_react_namespaceObject);
const mergeRefs_cjs_namespaceObject = require("../../utils/mergeRefs.cjs");
const index_cjs_namespaceObject = require("../Popover/index.cjs");
const domId_cjs_namespaceObject = require("../../utils/domId.cjs");
const ButtonFieldSelect_index_cjs_namespaceObject = require("../inputs/components/ButtonFieldSelect/index.cjs");
const external_useFloatingDropdown_cjs_namespaceObject = require("./useFloatingDropdown.cjs");
const external_DropdownContext_cjs_namespaceObject = require("./DropdownContext.cjs");
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
function Dropdown_ownKeys(object, enumerableOnly) {
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
    else Dropdown_ownKeys(Object(source)).forEach(function(key) {
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
const Dropdown = /*#__PURE__*/ external_react_default().forwardRef((_0, _1)=>{
    let _ref = [
        _0,
        _1
    ], [_ref1, ..._rest] = _ref, { as: TriggerComponent = ButtonFieldSelect_index_cjs_namespaceObject.ButtonFieldSelect, children, closingKeyList, id, isFlipDisabled, isFocusLocked, maxWidthRatio, minWidthRatio, widthPx, mainAxisOffset, widthExtendPx, onClose, onOpen, placement, strategy } = _ref1, restTriggerProps = _object_without_properties(_ref1, [
        "as",
        "children",
        "closingKeyList",
        "id",
        "isFlipDisabled",
        "isFocusLocked",
        "maxWidthRatio",
        "minWidthRatio",
        "widthPx",
        "mainAxisOffset",
        "widthExtendPx",
        "onClose",
        "onOpen",
        "placement",
        "strategy"
    ]), [forwardedRef] = _rest;
    const { isOpen, triggerProps, floatingProps, open, close, refs } = (0, external_useFloatingDropdown_cjs_namespaceObject.useFloatingDropdown)({
        isFlipDisabled,
        strategy,
        mainAxisOffset,
        widthExtendPx,
        maxWidthRatio,
        minWidthRatio,
        onClose,
        onOpen,
        closingKeyList,
        placement
    });
    const triggerInternalRef = (0, external_react_namespaceObject.useRef)(null);
    const triggerRef = (0, mergeRefs_cjs_namespaceObject.useMergeRefs)(triggerInternalRef, refs.setReference);
    const triggerId = (0, domId_cjs_namespaceObject.useDomId)(id);
    const popoverId = (0, domId_cjs_namespaceObject.generateDialogDomId)(triggerId, isOpen);
    (0, external_react_namespaceObject.useImperativeHandle)(forwardedRef, ()=>({
            close,
            focus: ()=>{
                var _triggerInternalRef_current;
                null == (_triggerInternalRef_current = triggerInternalRef.current) || _triggerInternalRef_current.focus();
            },
            getBoundingClientRect: ()=>{
                var _triggerInternalRef_current;
                const domRect = null == (_triggerInternalRef_current = triggerInternalRef.current) ? void 0 : _triggerInternalRef_current.getBoundingClientRect();
                if (!domRect) throw new Error('STON:ERR: did you pass proper trigger ("as" property) to <FloatingDropdown> component? Does it handle ref?');
                return domRect;
            },
            open,
            isOpen
        }), [
        close,
        open,
        isOpen
    ]);
    return /*#__PURE__*/ external_react_default().createElement(external_DropdownContext_cjs_namespaceObject.DropdownContext.Provider, {
        value: (0, external_react_namespaceObject.useMemo)(()=>({
                close,
                open
            }), [
            close,
            open
        ])
    }, /*#__PURE__*/ external_react_default().createElement(TriggerComponent, _object_spread_props(_object_spread({}, restTriggerProps, triggerProps), {
        id: triggerId,
        ref: triggerRef,
        "aria-haspopup": "dialog",
        "aria-expanded": isOpen,
        "aria-controls": popoverId
    })), isOpen && /*#__PURE__*/ external_react_default().createElement(index_cjs_namespaceObject.Popover, _object_spread_props(_object_spread({}, floatingProps), {
        isFocusLocked: isFocusLocked,
        minWidthPx: widthPx,
        maxWidthPx: widthPx,
        role: "dialog",
        id: popoverId
    }), children));
});
exports.Dropdown = __webpack_exports__.Dropdown;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "Dropdown"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
