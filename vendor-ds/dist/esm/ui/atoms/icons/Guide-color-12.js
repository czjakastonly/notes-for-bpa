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
const SvgGuideColor12 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 12,
        height: 12,
        fill: "none",
        viewBox: "0 0 12 12"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#F74D7E",
        fillRule: "evenodd",
        d: "M.25 2C.25 1.034 1.034.25 2 .25h8c.966 0 1.75.784 1.75 1.75v8A1.75 1.75 0 0 1 10 11.75H2A1.75 1.75 0 0 1 .25 10zM2 1.75a.25.25 0 0 0-.25.25v8c0 .138.112.25.25.25h8a.25.25 0 0 0 .25-.25V2a.25.25 0 0 0-.25-.25zm.75 5.75a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75m.75-3.75a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z",
        clipRule: "evenodd"
    }));
const Guide_color_12 = SvgGuideColor12;
export { Guide_color_12 as default };
