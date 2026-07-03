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
const SvgPillTrigger16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11m3.5 4.75a.75.75 0 0 1 .75.75A4.25 4.25 0 0 1 8 12.25a.75.75 0 0 1 0-1.5A2.75 2.75 0 0 0 10.75 8a.75.75 0 0 1 .75-.75",
        clipRule: "evenodd"
    }));
const PillTrigger_16 = SvgPillTrigger16;
export { PillTrigger_16 as default };
