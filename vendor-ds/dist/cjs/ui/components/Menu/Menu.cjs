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
    Menu: ()=>Menu
});
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/ __webpack_require__.n(external_react_namespaceObject);
const mergeRefs_cjs_namespaceObject = require("../../utils/mergeRefs.cjs");
const index_cjs_namespaceObject = require("../Popover/index.cjs");
const external_Dropdown_index_cjs_namespaceObject = require("../Dropdown/index.cjs");
const domId_cjs_namespaceObject = require("../../utils/domId.cjs");
const external_constants_cjs_namespaceObject = require("../../constants.cjs");
const ButtonOutline_index_cjs_namespaceObject = require("../buttons/ButtonOutline/index.cjs");
const InteractionHighlight_index_cjs_namespaceObject = require("../../utils/interactions/InteractionHighlight/index.cjs");
const InteractionAction_index_cjs_namespaceObject = require("../../utils/interactions/InteractionAction/index.cjs");
const MenuInteractionsContainer_cjs_namespaceObject = require("./_shared/MenuInteractionsContainer.cjs");
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
function Menu_ownKeys(object, enumerableOnly) {
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
    else Menu_ownKeys(Object(source)).forEach(function(key) {
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
const CLOSING_KEY_LIST = [
    'Escape',
    'Tab'
];
const Menu = /*#__PURE__*/ external_react_default().forwardRef((_0, _1)=>{
    let _ref = [
        _0,
        _1
    ], [_ref1, ..._rest] = _ref, { as: TriggerComponent = ButtonOutline_index_cjs_namespaceObject.ButtonOutline, children, id, isFlipDisabled, minWidthRatio, maxHeightPx = 400, maxWidthRatio = 0, onClose, onOpen, onAction, widthPx, placement } = _ref1, restTriggerProps = _object_without_properties(_ref1, [
        "as",
        "children",
        "id",
        "isFlipDisabled",
        "minWidthRatio",
        "maxHeightPx",
        "maxWidthRatio",
        "onClose",
        "onOpen",
        "onAction",
        "widthPx",
        "placement"
    ]), [forwardedRef] = _rest;
    const { refs, isOpen, close, triggerProps, floatingProps } = (0, external_Dropdown_index_cjs_namespaceObject.useFloatingDropdown)({
        mainAxisOffset: 4,
        widthExtendPx: 1,
        minWidthRatio,
        maxWidthRatio,
        onClose,
        widthPx,
        closingKeyList: CLOSING_KEY_LIST,
        isFlipDisabled,
        placement,
        onOpen
    });
    const triggerRef = (0, mergeRefs_cjs_namespaceObject.useMergeRefs)(forwardedRef, refs.setReference);
    const domId = (0, domId_cjs_namespaceObject.useDomId)(id);
    const listboxId = (0, domId_cjs_namespaceObject.generateListboxDomId)(domId, isOpen);
    const popoverId = (0, domId_cjs_namespaceObject.generateDialogDomId)(domId, isOpen);
    return /*#__PURE__*/ external_react_default().createElement(external_react_default().Fragment, null, /*#__PURE__*/ external_react_default().createElement(TriggerComponent, _object_spread_props(_object_spread({}, restTriggerProps, triggerProps), {
        ref: triggerRef,
        id: domId,
        className: external_constants_cjs_namespaceObject.STATIC_CLASS_NAME.dropdownTrigger,
        "aria-haspopup": "menu",
        "aria-controls": listboxId,
        "aria-expanded": isOpen
    })), isOpen && /*#__PURE__*/ external_react_default().createElement(index_cjs_namespaceObject.Popover, _object_spread_props(_object_spread({
        isFocusLocked: false
    }, floatingProps), {
        role: "presentation",
        id: popoverId
    }), /*#__PURE__*/ external_react_default().createElement(InteractionHighlight_index_cjs_namespaceObject.InteractionHighlightProvider, null, /*#__PURE__*/ external_react_default().createElement(InteractionAction_index_cjs_namespaceObject.InteractionActionProvider, {
        defaultAction: onAction,
        onPostAction: close
    }, /*#__PURE__*/ external_react_default().createElement(MenuInteractionsContainer_cjs_namespaceObject.MenuInteractionsContainer, {
        id: listboxId,
        maxHeightPx: maxHeightPx,
        "aria-label": restTriggerProps['aria-label'],
        "aria-labelledby": restTriggerProps['aria-labelledby']
    }, children)))));
});
exports.Menu = __webpack_exports__.Menu;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "Menu"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
