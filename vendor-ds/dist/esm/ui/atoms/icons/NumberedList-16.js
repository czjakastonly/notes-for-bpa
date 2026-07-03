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
const SvgNumberedList16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M0 1v1h1v3h1V1zm0 5v1h1.777L0 8.797V10h2.999V9h-1.78l1.78-1.798V6zm0 5v1h2.001v.5H1v1h1.001v.5H0v1h3.001v-4zm5.75-1.995a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 0 1.5zm0 5a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 0 1.5zM5.75 4a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 0 1.5z",
        clipRule: "evenodd"
    }));
const NumberedList_16 = SvgNumberedList16;
export { NumberedList_16 as default };
