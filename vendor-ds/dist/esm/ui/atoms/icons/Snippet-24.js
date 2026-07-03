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
const SvgSnippet24 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none",
        viewBox: "0 0 24 24"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#706D84",
        d: "M2.95 14.367a.75.75 0 0 1 .75.75v4.03c0 .138.112.25.25.25h3.91a.75.75 0 0 1 0 1.5H3.95a1.75 1.75 0 0 1-1.75-1.75v-4.03a.75.75 0 0 1 .75-.75m18.052 0a.75.75 0 0 1 .75.75v4.028a1.75 1.75 0 0 1-1.572 1.742l-.178.008h-3.91a.75.75 0 0 1 0-1.5h3.91l.05-.004a.25.25 0 0 0 .2-.245v-4.03a.75.75 0 0 1 .75-.75m-4.51-1.184a.75.75 0 0 1 0 1.492l-.076.004H7.702a.75.75 0 0 1 0-1.5h8.714zm0-3.961a.75.75 0 0 1 0 1.492l-.076.004H7.702a.75.75 0 0 1 0-1.5h8.714zM7.86 3a.75.75 0 0 1 0 1.5H3.95a.25.25 0 0 0-.25.25v4.03a.75.75 0 0 1-1.5 0V4.75C2.2 3.784 2.984 3 3.95 3zm12.142 0c.966 0 1.75.784 1.75 1.75v4.03a.75.75 0 0 1-1.5 0V4.75a.25.25 0 0 0-.25-.25h-3.91a.75.75 0 0 1 0-1.5z"
    }));
const Snippet_24 = SvgSnippet24;
export { Snippet_24 as default };
