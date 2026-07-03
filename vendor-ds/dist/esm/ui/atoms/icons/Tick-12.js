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
const SvgTick12 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 9,
        height: 8,
        fill: "none",
        viewBox: "0 0 9 8"
    }, props), /*#__PURE__*/ createElement("path", {
        d: "M6.975.35a.75.75 0 0 1 1.268.8l-3.86 6.11a.75.75 0 0 1-1.164.13l-3-3A.75.75 0 0 1 1.28 3.33l2.336 2.337z"
    }));
const Tick_12 = SvgTick12;
export { Tick_12 as default };
