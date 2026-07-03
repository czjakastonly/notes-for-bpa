import { createElement } from "react";
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
const SvgHandPointer16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("g", {
        clipPath: "url(#HandPointer-16_svg__a)"
    }, /*#__PURE__*/ createElement("path", {
        stroke: "#515358",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M6.107 15s-3.983-4.63-4.29-4.971-.562-1.341.09-1.96c.653-.618 1.429-.134 1.429-.134l2.08 1.411V2.385S5.34 1 6.57 1s1.157 1.283 1.157 1.283v4.696c0-.598.327-1.358 1.213-1.358s1.17.818 1.17 1.297V7.9c0-.454.264-1.171 1.1-1.171s1.167.761 1.167 1.171v.883c0-.311.139-1.1 1.055-1.1.917 0 1.068.93 1.068 1.205 0 1.89-.075 2.256-.364 3.33S12.9 15 12.9 15z",
        clipRule: "evenodd"
    })), /*#__PURE__*/ createElement("defs", null, /*#__PURE__*/ createElement("clipPath", {
        id: "HandPointer-16_svg__a"
    }, /*#__PURE__*/ createElement("path", {
        fill: "#fff",
        d: "M0 0h16v16H0z"
    }))));
const HandPointer_16 = SvgHandPointer16;
export { HandPointer_16 as default };
