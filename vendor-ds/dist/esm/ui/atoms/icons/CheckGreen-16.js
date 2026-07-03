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
const SvgCheckGreen16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("g", {
        clipPath: "url(#CheckGreen-16_svg__a)"
    }, /*#__PURE__*/ createElement("path", {
        fill: "#00A37A",
        fillRule: "evenodd",
        d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-5.562-2.592a.484.484 0 0 0-.671.157L7.04 10.018 5.52 8.32a.484.484 0 0 0-.687-.046.496.496 0 0 0-.045.695l1.95 2.196a.484.484 0 0 0 .78-.063l3.075-5.015a.496.496 0 0 0-.155-.679",
        clipRule: "evenodd"
    })), /*#__PURE__*/ createElement("defs", null, /*#__PURE__*/ createElement("clipPath", {
        id: "CheckGreen-16_svg__a"
    }, /*#__PURE__*/ createElement("path", {
        fill: "#fff",
        d: "M0 0h16v16H0z"
    }))));
const CheckGreen_16 = SvgCheckGreen16;
export { CheckGreen_16 as default };
