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
const SvgInfo12 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 12,
        height: 12,
        fill: "none",
        viewBox: "0 0 12 12"
    }, props), /*#__PURE__*/ createElement("g", {
        clipPath: "url(#Info-12_svg__a)"
    }, /*#__PURE__*/ createElement("path", {
        fill: "#706D84",
        fillRule: "evenodd",
        d: "M6 0a6 6 0 1 1 0 12A6 6 0 0 1 6 0m0 1.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6m0 1.7c.39 0 .712.29.763.666l.007.104-.007.104A.77.77 0 1 1 6 2.9m0 2.5a.65.65 0 0 1 .65.65v2.7a.65.65 0 1 1-1.3 0v-2.7A.65.65 0 0 1 6 5.4",
        clipRule: "evenodd"
    })), /*#__PURE__*/ createElement("defs", null, /*#__PURE__*/ createElement("clipPath", {
        id: "Info-12_svg__a"
    }, /*#__PURE__*/ createElement("path", {
        fill: "#fff",
        d: "M0 0h12v12H0z"
    }))));
const Info_12 = SvgInfo12;
export { Info_12 as default };
