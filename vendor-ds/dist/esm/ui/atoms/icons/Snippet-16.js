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
const SvgSnippet16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        d: "M1 9.866a.75.75 0 0 1 .75.75v3.026c0 .137.112.25.25.25h3.118a.75.75 0 0 1 0 1.5H2a1.75 1.75 0 0 1-1.75-1.75v-3.026a.75.75 0 0 1 .75-.75m13.791 0a.75.75 0 0 1 .75.75v3.026a1.75 1.75 0 0 1-1.75 1.75h-3.118a.75.75 0 1 1 0-1.5h3.118l.05-.005a.25.25 0 0 0 .2-.245v-3.026a.75.75 0 0 1 .75-.75m-3.428-.903a.75.75 0 0 1 0 1.492l-.076.004H4.631a.75.75 0 0 1 0-1.5h6.656zm0-3.025a.75.75 0 0 1 0 1.492l-.076.004H4.631a.75.75 0 0 1 0-1.5h6.656zM5.118 1a.75.75 0 0 1 0 1.5H2a.25.25 0 0 0-.25.25v3.025a.75.75 0 0 1-1.5 0V2.75C.25 1.784 1.034 1 2 1zm8.673 0c.966 0 1.75.784 1.75 1.75v3.025a.75.75 0 0 1-1.5 0V2.75a.25.25 0 0 0-.25-.25h-3.118a.75.75 0 1 1 0-1.5z"
    }));
const Snippet_16 = SvgSnippet16;
export { Snippet_16 as default };
