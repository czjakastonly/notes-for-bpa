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
const SvgAiWritingTitle16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#848296",
        d: "M14 13a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 2 13zm-4-3a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 2 10zm3-8c.966 0 1.75.784 1.75 1.75v2A1.75 1.75 0 0 1 13 7.5H3a1.75 1.75 0 0 1-1.75-1.75v-2C1.25 2.784 2.034 2 3 2zM3 3.5a.25.25 0 0 0-.25.25v2c0 .138.112.25.25.25h10a.25.25 0 0 0 .25-.25v-2A.25.25 0 0 0 13 3.5z"
    }));
const AiWritingTitle_16 = SvgAiWritingTitle16;
export { AiWritingTitle_16 as default };
