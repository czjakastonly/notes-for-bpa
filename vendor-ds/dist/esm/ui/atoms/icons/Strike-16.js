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
const SvgStrike16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 14,
        height: 15,
        fill: "none",
        viewBox: "0 0 14 15"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M7.75 13h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-3a.75.75 0 0 1 1.5 0zm0-11.5v3a.75.75 0 0 1-1.5 0v-3h-4a.25.25 0 0 0-.25.25V3A.75.75 0 0 1 .5 3V1.75C.5.784 1.284 0 2.25 0h9.5c.966 0 1.75.784 1.75 1.75V3A.75.75 0 0 1 12 3V1.75a.25.25 0 0 0-.25-.25zM2.5 8a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 0 1.5z",
        clipRule: "evenodd"
    }));
const Strike_16 = SvgStrike16;
export { Strike_16 as default };
