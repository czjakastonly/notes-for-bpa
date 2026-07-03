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
const SvgAdjust16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M10.5 2.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5m-3.163 2.5a3.251 3.251 0 0 0 6.326 0H15a.75.75 0 0 0 0-1.5h-1.337a3.251 3.251 0 0 0-6.326 0H1a.75.75 0 0 0 0 1.5zM5.5 10.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5m-3.163 2.5a3.251 3.251 0 0 0 6.326 0H15a.75.75 0 0 0 0-1.5H8.663a3.251 3.251 0 0 0-6.326 0H1a.75.75 0 0 0 0 1.5z",
        clipRule: "evenodd"
    }));
const Adjust_16 = SvgAdjust16;
export { Adjust_16 as default };
