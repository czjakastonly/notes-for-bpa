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
const SvgArticleColor32 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 32,
        height: 32,
        fill: "none",
        viewBox: "0 0 32 32"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#D26AA0",
        fillRule: "evenodd",
        d: "M6 7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18c0 .35.06.687.17 1H9a3 3 0 0 1-3-3V7m-2 3.5V7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v11h4.5v6a4 4 0 0 1-3.5 3.97V28a3 3 0 0 1-.232-.009A4 4 0 0 1 24.5 28H9a5 5 0 0 1-5-5V10.5m20.793 15.479A2 2 0 0 0 26.5 24v-4H24v5a1 1 0 0 0 .793.979M10 10a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zm-1 6a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1",
        clipRule: "evenodd"
    }));
const Article_color_32 = SvgArticleColor32;
export { Article_color_32 as default };
