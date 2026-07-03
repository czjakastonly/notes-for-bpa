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
const SvgDrag16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M6.5 8.255a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m0 4.495a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m0-9a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M12 8.255a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m0 4.495a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m0-9a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0",
        clipRule: "evenodd"
    }));
const Drag_16 = SvgDrag16;
export { Drag_16 as default };
