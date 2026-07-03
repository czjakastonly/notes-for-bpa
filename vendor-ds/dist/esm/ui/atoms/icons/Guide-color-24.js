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
const SvgGuideColor24 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none",
        viewBox: "0 0 24 24"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#F74D7E",
        fillRule: "evenodd",
        d: "M18.5 3.5a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2zm0 1.5h-13a.5.5 0 0 0-.492.41L5 5.5v13a.5.5 0 0 0 .41.492L5.5 19h13a.5.5 0 0 0 .492-.41L19 18.5v-13a.5.5 0 0 0-.41-.492zm-3.25 8a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5zm0-3.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5z",
        clipRule: "evenodd"
    }));
const Guide_color_24 = SvgGuideColor24;
export { Guide_color_24 as default };
