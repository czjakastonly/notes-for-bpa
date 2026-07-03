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
const SvgAiWritingGrammarCheck16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#848296",
        d: "M9.75 13.25a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1 0-1.5zm4.021-5.12a.75.75 0 0 1 1.269.801l-1.917 3.033a.75.75 0 0 1-1.164.13l-1.49-1.489a.75.75 0 0 1 1.061-1.06l.826.826zM6.75 9.75a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1 0-1.5zm3-3.5a.75.75 0 0 1 0 1.5h-8a.75.75 0 1 1 0-1.5zm4.021-5.22a.75.75 0 0 1 1.269.802l-1.916 3.033a.752.752 0 0 1-1.165.13l-1.49-1.49a.75.75 0 0 1 1.061-1.06l.826.825zM6.75 2.75a.75.75 0 0 1 0 1.5h-5a.75.75 0 1 1 0-1.5z"
    }));
const AiWritingGrammarCheck_16 = SvgAiWritingGrammarCheck16;
export { AiWritingGrammarCheck_16 as default };
