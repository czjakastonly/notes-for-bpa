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
    ColumnFlex: ()=>ColumnFlex,
    RowFlex: ()=>RowFlex
});
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/ __webpack_require__.n(external_react_namespaceObject);
const external_Flex_styles_cjs_namespaceObject = require("./Flex.styles.cjs");
const external_Flex_helpers_cjs_namespaceObject = require("./Flex.helpers.cjs");
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
function Flex_ownKeys(object, enumerableOnly) {
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
    else Flex_ownKeys(Object(source)).forEach(function(key) {
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
const Flex = /*#__PURE__*/ (0, external_react_namespaceObject.forwardRef)((_0, _1)=>{
    let _ref = [
        _0,
        _1
    ], [_ref1, ..._rest] = _ref, { className, children, display = 'flex', reverse, style, alignItems, justifyContent, direction, flexWrap, flexGrow, flexShrink, flexBasis, gap, margin, marginX, marginY, marginTop, marginRight, marginBottom, marginLeft, padding, paddingX, paddingY, paddingTop, paddingRight, paddingBottom, paddingLeft, position } = _ref1, restDivProps = _object_without_properties(_ref1, [
        "className",
        "children",
        "display",
        "reverse",
        "style",
        "alignItems",
        "justifyContent",
        "direction",
        "flexWrap",
        "flexGrow",
        "flexShrink",
        "flexBasis",
        "gap",
        "margin",
        "marginX",
        "marginY",
        "marginTop",
        "marginRight",
        "marginBottom",
        "marginLeft",
        "padding",
        "paddingX",
        "paddingY",
        "paddingTop",
        "paddingRight",
        "paddingBottom",
        "paddingLeft",
        "position"
    ]), [ref] = _rest;
    const calculatedMargin = (0, external_react_namespaceObject.useMemo)(()=>(0, external_Flex_helpers_cjs_namespaceObject.combineSpacingValues)(margin, marginX, marginY, marginTop, marginRight, marginBottom, marginLeft), [
        margin,
        marginX,
        marginY,
        marginTop,
        marginRight,
        marginBottom,
        marginLeft
    ]);
    const calculatedPadding = (0, external_react_namespaceObject.useMemo)(()=>(0, external_Flex_helpers_cjs_namespaceObject.combineSpacingValues)(padding, paddingX, paddingY, paddingTop, paddingRight, paddingBottom, paddingLeft), [
        padding,
        paddingX,
        paddingY,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft
    ]);
    return /*#__PURE__*/ external_react_default().createElement(external_Flex_styles_cjs_namespaceObject.Canvas, _object_spread_props(_object_spread({}, restDivProps), {
        ref: ref,
        className: className,
        $display: display,
        $reverse: reverse,
        $alignItems: alignItems,
        $justifyContent: justifyContent,
        $direction: direction,
        $flexWrap: flexWrap,
        $flexGrow: flexGrow,
        $flexShrink: flexShrink,
        $flexBasis: flexBasis,
        $gap: (0, external_Flex_helpers_cjs_namespaceObject.calcValue)(gap),
        $margin: calculatedMargin,
        $padding: calculatedPadding,
        $position: position,
        style: style
    }), children);
});
const RowFlex = /*#__PURE__*/ (0, external_react_namespaceObject.forwardRef)((props, ref)=>/*#__PURE__*/ external_react_default().createElement(Flex, _object_spread_props(_object_spread({}, props), {
        ref: ref,
        direction: "row"
    })));
const ColumnFlex = /*#__PURE__*/ (0, external_react_namespaceObject.forwardRef)((props, ref)=>/*#__PURE__*/ external_react_default().createElement(Flex, _object_spread_props(_object_spread({}, props), {
        ref: ref,
        direction: "column"
    })));
exports.ColumnFlex = __webpack_exports__.ColumnFlex;
exports.RowFlex = __webpack_exports__.RowFlex;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "ColumnFlex",
    "RowFlex"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
