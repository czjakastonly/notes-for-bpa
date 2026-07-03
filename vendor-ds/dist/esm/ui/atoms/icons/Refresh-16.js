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
const SvgRefresh16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M7.909 1C11.827 1 15 4.136 15 8s-3.173 7-7.091 7a7.1 7.1 0 0 1-6.14-3.497.715.715 0 0 1 .273-.988.75.75 0 0 1 1.011.268 5.62 5.62 0 0 0 4.856 2.769c3.097 0 5.61-2.484 5.61-5.552s-2.514-5.552-5.61-5.552a5.63 5.63 0 0 0-4.312 2l.966-.084a.74.74 0 0 1 .787.561l.016.098a.726.726 0 0 1-.574.769l-.1.015-2.65.227a.74.74 0 0 1-.787-.561l-.016-.097-.236-2.642a.73.73 0 0 1 .673-.785.74.74 0 0 1 .787.561l.015.098.073.806A7.12 7.12 0 0 1 7.909 1",
        clipRule: "evenodd"
    }));
const Refresh_16 = SvgRefresh16;
export { Refresh_16 as default };
