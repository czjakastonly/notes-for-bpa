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
const SvgImageTop16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#BFC1C6",
        fillRule: "evenodd",
        d: "M3.917 4.333c0-.966.783-1.75 1.75-1.75h4.666c.967 0 1.75.784 1.75 1.75v2a1.75 1.75 0 0 1-1.75 1.75H5.666a1.75 1.75 0 0 1-1.75-1.75zm1.75-.25a.25.25 0 0 0-.25.25v2c0 .138.111.25.25.25h4.666a.25.25 0 0 0 .25-.25v-2a.25.25 0 0 0-.25-.25zM3.917 10a.75.75 0 0 1 .75-.75h6.666a.75.75 0 0 1 0 1.5H4.666a.75.75 0 0 1-.75-.75ZM6 11.917a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z",
        clipRule: "evenodd"
    }));
const ImageTop_16 = SvgImageTop16;
export { ImageTop_16 as default };
