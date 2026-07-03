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
    ListHeader: ()=>ListHeader
});
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/ __webpack_require__.n(external_react_namespaceObject);
const external_styled_components_namespaceObject = require("styled-components");
var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(external_styled_components_namespaceObject);
const external_List_cjs_namespaceObject = require("./List.cjs");
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
function ListHeader_ownKeys(object, enumerableOnly) {
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
    else ListHeader_ownKeys(Object(source)).forEach(function(key) {
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
const BASE_PADDING_PX = 8;
const Container = external_styled_components_default().div`
  position: sticky;
  top: 0;
  outline: none;
  padding: ${BASE_PADDING_PX}px;
  border-bottom: 1px solid ${(props)=>props.theme.color.backgroundDefault};

  ${({ $showBottomDivider })=>$showBottomDivider && (0, external_styled_components_namespaceObject.css)`
      border-bottom-color: ${(props)=>props.theme.color.borderSubtle};
    `}
  background: ${(props)=>props.theme.color.backgroundDefault};
`;
const ListHeader = /*#__PURE__*/ (0, external_react_namespaceObject.forwardRef)((_0, _1)=>{
    let _ref = [
        _0,
        _1
    ], [_ref1, ..._rest] = _ref, { children, showBottomDivider } = _ref1, rest = _object_without_properties(_ref1, [
        "children",
        "showBottomDivider"
    ]), [forwardedRef] = _rest;
    const [isSeparatorVisible, setIsSeparatorVisible] = (0, external_react_namespaceObject.useState)(false);
    const bodyRef = (0, external_List_cjs_namespaceObject.useListBodyRef)();
    (0, external_react_namespaceObject.useEffect)(()=>{
        const scrollableElement = null == bodyRef ? void 0 : bodyRef.current;
        if (scrollableElement) {
            const onScroll = ()=>{
                setIsSeparatorVisible(scrollableElement.scrollTop > 1);
            };
            scrollableElement.addEventListener('scroll', onScroll);
            return ()=>{
                scrollableElement.removeEventListener('scroll', onScroll);
            };
        }
    }, [
        bodyRef
    ]);
    const isBottomDividerVisible = 'boolean' == typeof showBottomDivider ? showBottomDivider : isSeparatorVisible;
    return /*#__PURE__*/ external_react_default().createElement(Container, _object_spread_props(_object_spread({}, rest), {
        ref: forwardedRef,
        $showBottomDivider: isBottomDividerVisible
    }), children);
});
exports.ListHeader = __webpack_exports__.ListHeader;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "ListHeader"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
