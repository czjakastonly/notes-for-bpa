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
const SvgTip16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#5D6169",
        fillRule: "evenodd",
        d: "M1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0m0 7.25a.75.75 0 0 0-.75.75v3a.75.75 0 0 0 1.5 0V8A.75.75 0 0 0 8 7.25M8 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
        clipRule: "evenodd"
    }));
const Tip_16 = SvgTip16;
export { Tip_16 as default };
