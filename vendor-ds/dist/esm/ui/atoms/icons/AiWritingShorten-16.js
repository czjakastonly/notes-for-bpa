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
const SvgAiWritingShorten16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#848296",
        d: "M10 11.25a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5zm4-4a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5zm-4-4a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5z"
    }));
const AiWritingShorten_16 = SvgAiWritingShorten16;
export { AiWritingShorten_16 as default };
