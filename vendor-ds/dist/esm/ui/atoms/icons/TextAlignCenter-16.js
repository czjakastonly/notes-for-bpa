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
const SvgTextAlignCenter16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M1.25 3A.75.75 0 0 1 2 2.25h12a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 3m2 5A.75.75 0 0 1 4 7.25l8-.002a.75.75 0 1 1 0 1.5L4 8.75A.75.75 0 0 1 3.25 8M2 12.25a.75.75 0 1 0 0 1.5l12-.001a.75.75 0 0 0 0-1.5z",
        clipRule: "evenodd"
    }));
const TextAlignCenter_16 = SvgTextAlignCenter16;
export { TextAlignCenter_16 as default };
