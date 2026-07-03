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
const SvgDirectTrigger16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M8.225.625 3.94 8.055a1.42 1.42 0 0 0-.027 1.368l.068.117c.247.376.663.61 1.117.61l1.278-.001V15c0 .767 1.016 1.04 1.4.375l4.286-7.43c.242-.42.252-.938.028-1.367l-.07-.117a1.34 1.34 0 0 0-1.115-.611H9.625V1c0-.767-1.016-1.04-1.4-.375m-.1 3.175v2.8l.007.102a.75.75 0 0 0 .743.648h1.797l-2.797 4.848V9.4l-.007-.102a.75.75 0 0 0-.743-.648l-1.797-.001z",
        clipRule: "evenodd"
    }));
const DirectTrigger_16 = SvgDirectTrigger16;
export { DirectTrigger_16 as default };
