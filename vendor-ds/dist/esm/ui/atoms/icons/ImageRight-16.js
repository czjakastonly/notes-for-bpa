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
const SvgImageRight16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#BFC1C6",
        fillRule: "evenodd",
        d: "M13 11.417a1.75 1.75 0 0 0 1.75-1.75V6.333A1.75 1.75 0 0 0 13 4.583H9.667a1.75 1.75 0 0 0-1.75 1.75v3.334c0 .966.783 1.75 1.75 1.75zm.25-1.75a.25.25 0 0 1-.25.25H9.667a.25.25 0 0 1-.25-.25V6.333a.25.25 0 0 1 .25-.25H13a.25.25 0 0 1 .25.25zM6 11.417a.75.75 0 0 0 0-1.5H2a.75.75 0 0 0 0 1.5zM6.75 8a.75.75 0 0 1-.75.75H2a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .75.75M4 6.083a.75.75 0 1 0 0-1.5H2a.75.75 0 0 0 0 1.5z",
        clipRule: "evenodd"
    }));
const ImageRight_16 = SvgImageRight16;
export { ImageRight_16 as default };
