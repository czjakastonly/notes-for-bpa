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
const SvgImageLeft16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#BFC1C6",
        fillRule: "evenodd",
        d: "M3 4.583a1.75 1.75 0 0 0-1.75 1.75v3.334c0 .966.784 1.75 1.75 1.75h3.333a1.75 1.75 0 0 0 1.75-1.75V6.333a1.75 1.75 0 0 0-1.75-1.75zm-.25 1.75a.25.25 0 0 1 .25-.25h3.333a.25.25 0 0 1 .25.25v3.334a.25.25 0 0 1-.25.25H3a.25.25 0 0 1-.25-.25zM10 4.583a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zM9.25 8a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 8M10 9.917a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z",
        clipRule: "evenodd"
    }));
const ImageLeft_16 = SvgImageLeft16;
export { ImageLeft_16 as default };
