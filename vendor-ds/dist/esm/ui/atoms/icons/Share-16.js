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
const SvgShare16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M10.051 11.06a2.75 2.75 0 1 1-.729 1.31L4.95 9.94a2.75 2.75 0 1 1 0-3.881l4.373-2.43a2.75 2.75 0 1 1 .729 1.31L5.678 7.372a2.76 2.76 0 0 1 0 1.26zM3 9.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5m9-5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5m0 10a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5",
        clipRule: "evenodd"
    }));
const Share_16 = SvgShare16;
export { Share_16 as default };
