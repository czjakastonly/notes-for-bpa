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
const SvgDrag24 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none",
        viewBox: "0 0 24 24"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M7 6.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M7 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m0 5.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m7-11a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m0 5.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m0 5.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0",
        clipRule: "evenodd"
    }));
const Drag_24 = SvgDrag24;
export { Drag_24 as default };
