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
const SvgError16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M4.69.25h6.62l.22.22 4 4 .22.22v6.62l-.22.22-4 4-.22.22H4.69l-.22-.22-4-4-.22-.22V4.69l.22-.22 4-4zm.62 1.5L1.75 5.31v5.38l3.56 3.56h5.38l3.56-3.56V5.31l-3.56-3.56zM6.996 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0M8.75 4.5a.75.75 0 0 0-1.5 0V8a.75.75 0 0 0 1.5 0z",
        clipRule: "evenodd"
    }));
const Error_16 = SvgError16;
export { Error_16 as default };
