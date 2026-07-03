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
const SvgMinus12 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 12,
        height: 12,
        fill: "none",
        viewBox: "0 0 12 12"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        d: "M2 6c0 .414.336.75.75.75h6.5a.75.75 0 0 0 0-1.5h-6.5A.75.75 0 0 0 2 6"
    }));
const Minus_12 = SvgMinus12;
export { Minus_12 as default };
