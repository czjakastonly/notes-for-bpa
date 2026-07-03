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
const SvgInput16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M7.75 14.5h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-12H5.5a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 0 1.5h-.75zM1.5 12.75h1a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 13.5v-10a.75.75 0 0 1 .75-.75H2.5a.75.75 0 0 1 0 1.5h-1zm13-8.5H11a.75.75 0 0 1 0-1.5h4.25a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-.75.75H11a.75.75 0 0 1 0-1.5h3.5z",
        clipRule: "evenodd"
    }));
const Input_16 = SvgInput16;
export { Input_16 as default };
