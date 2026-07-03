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
    ListItemCheckbox: ()=>ListItemCheckbox
});
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/ __webpack_require__.n(external_react_namespaceObject);
const external_styled_components_namespaceObject = require("styled-components");
var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(external_styled_components_namespaceObject);
const Tick_12_cjs_namespaceObject = require("../../atoms/icons/Tick-12.cjs");
var Tick_12_cjs_default = /*#__PURE__*/ __webpack_require__.n(Tick_12_cjs_namespaceObject);
const styles_cjs_namespaceObject = require("./_shared/styles.cjs");
const index_cjs_namespaceObject = require("../Flex/index.cjs");
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
function ListItemCheckbox_ownKeys(object, enumerableOnly) {
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
    else ListItemCheckbox_ownKeys(Object(source)).forEach(function(key) {
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
const IconTick = external_styled_components_default()(Tick_12_cjs_default())`
  & path {
    fill: ${({ theme })=>theme.color.iconDefaultInverse};
  }
`;
const Rect = external_styled_components_default().div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  transition: border-color 0.2s, background-color 0.2s;

  border-color: ${({ theme })=>theme.color.borderDefault};
  background-color: ${({ theme })=>theme.color.backgroundDefault};

  ${({ $checked })=>$checked && (0, external_styled_components_namespaceObject.css)`
      border-color: ${({ theme })=>theme.color.backgroundPrimary};
      background-color: ${({ theme })=>theme.color.backgroundPrimary};
    `}

  ${IconTick} {
    visibility: ${({ $checked })=>$checked ? 'visible' : 'hidden'};
  }
`;
const ListItemCheckbox = /*#__PURE__*/ external_react_default().forwardRef((_0, _1)=>{
    let _ref = [
        _0,
        _1
    ], [_ref1, ..._rest] = _ref, { disabled, isHighlighted, isSelected, label, isNavigationItem } = _ref1, restDivAttributes = _object_without_properties(_ref1, [
        "disabled",
        "isHighlighted",
        "isSelected",
        "label",
        "isNavigationItem"
    ]), [forwardedRef] = _rest;
    return /*#__PURE__*/ external_react_default().createElement(styles_cjs_namespaceObject.ListItemStyles.ContainerSelectable, _object_spread_props(_object_spread({}, restDivAttributes), {
        isDisabled: disabled,
        isHighlighted: isHighlighted,
        isSelected: isSelected,
        ref: forwardedRef
    }), /*#__PURE__*/ external_react_default().createElement(styles_cjs_namespaceObject.ListItemStyles.TextContainer, null, /*#__PURE__*/ external_react_default().createElement(index_cjs_namespaceObject.RowFlex, {
        alignItems: "center",
        gap: 1
    }, /*#__PURE__*/ external_react_default().createElement(Rect, {
        $checked: isSelected,
        "aria-hidden": true
    }, /*#__PURE__*/ external_react_default().createElement(IconTick, null)), /*#__PURE__*/ external_react_default().createElement(styles_cjs_namespaceObject.ListItemStyles.Title, null, label))), isNavigationItem && /*#__PURE__*/ external_react_default().createElement(styles_cjs_namespaceObject.ListItemStyles.ChevronRightIcon, {
        "aria-hidden": true
    }));
});
exports.ListItemCheckbox = __webpack_exports__.ListItemCheckbox;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "ListItemCheckbox"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
