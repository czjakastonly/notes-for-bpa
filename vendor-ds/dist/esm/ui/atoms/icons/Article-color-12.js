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
const SvgArticleColor12 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 12,
        height: 12,
        fill: "none",
        viewBox: "0 0 12 12"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#D26AA0",
        fillRule: "evenodd",
        d: "M1.5 1.5v8.524c0 .138.112.25.25.25h6.666a2 2 0 0 1-.01-.184V1.5zm8.406 4.387v.25h2.102v3.887a1.75 1.75 0 0 1-1.75 1.75H1.75A1.75 1.75 0 0 1 0 10.024V1.25C0 .56.56 0 1.25 0h7.406c.69 0 1.25.56 1.25 1.25zm.184 4.387h.168a.25.25 0 0 0 .25-.25V7.637h-.602v2.453c0 .102.082.184.184.184M2.45 3.4a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5H3.2a.75.75 0 0 1-.75-.75m.75 1.75a.75.75 0 0 0 0 1.5h3.5a.75.75 0 1 0 0-1.5zm0 2.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5z",
        clipRule: "evenodd"
    }));
const Article_color_12 = SvgArticleColor12;
export { Article_color_12 as default };
