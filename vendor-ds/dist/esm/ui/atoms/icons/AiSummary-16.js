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
const SvgAiSummary16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#706D84",
        d: "M3.79 9.267a.87.87 0 0 1 1.42 0l.068.112.547 1.095a.45.45 0 0 0 .201.2l1.095.548a.87.87 0 0 1 0 1.556l-1.095.547a.45.45 0 0 0-.2.201l-.548 1.095a.87.87 0 0 1-1.556 0l-.547-1.095a.45.45 0 0 0-.201-.2l-1.095-.548a.87.87 0 0 1 0-1.556l1.095-.547a.45.45 0 0 0 .2-.201l.548-1.095zm.71 1.907a1.95 1.95 0 0 1-.826.826c.353.184.641.472.826.825A1.95 1.95 0 0 1 5.325 12a1.95 1.95 0 0 1-.825-.826m9.5.077a.75.75 0 0 1 0 1.5l-4.5-.001a.75.75 0 0 1 0-1.5zm0-5.001a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5zm0-5a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5z"
    }));
const AiSummary_16 = SvgAiSummary16;
export { AiSummary_16 as default };
