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
const SvgArticle16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M2.5 2.5v9.821c0 .69.56 1.25 1.25 1.25h7.536V2.5zm10.286 5.536V2.25c0-.69-.56-1.25-1.25-1.25H2.25C1.56 1 1 1.56 1 2.25v10.071a2.75 2.75 0 0 0 2.75 2.75h8.857a2.75 2.75 0 0 0 2.75-2.75V8.286h-2.571zm0 1.75v3.773a1.25 1.25 0 0 0 1.071-1.238V9.786zM4.25 5A.75.75 0 0 1 5 4.25h4a.75.75 0 0 1 0 1.5H5A.75.75 0 0 1 4.25 5M5 7.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zm0 2.779a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z",
        clipRule: "evenodd"
    }));
const Article_16 = SvgArticle16;
export { Article_16 as default };
