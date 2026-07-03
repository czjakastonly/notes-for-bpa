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
const SvgButton16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#FF4A75",
        fillRule: "evenodd",
        d: "M5 4.5h6a3.5 3.5 0 1 1 0 7H5a3.5 3.5 0 1 1 0-7M0 8a5 5 0 0 1 5-5h6a5 5 0 0 1 0 10H5a5 5 0 0 1-5-5m13.25 0a.75.75 0 0 0-1.5 0 .75.75 0 0 1-.75.75.75.75 0 0 0 0 1.5A2.25 2.25 0 0 0 13.25 8",
        clipRule: "evenodd"
    }));
const Button_16 = SvgButton16;
export { Button_16 as default };
