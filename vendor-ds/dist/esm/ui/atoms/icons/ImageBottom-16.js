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
const SvgImageBottom16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#BFC1C6",
        fillRule: "evenodd",
        d: "M12.084 11.667a1.75 1.75 0 0 1-1.75 1.75H5.667a1.75 1.75 0 0 1-1.75-1.75v-2c0-.967.783-1.75 1.75-1.75h4.667c.966 0 1.75.783 1.75 1.75zm-1.75.25a.25.25 0 0 0 .25-.25v-2a.25.25 0 0 0-.25-.25H5.667a.25.25 0 0 0-.25.25v2c0 .138.112.25.25.25zm1.75-8.584a.75.75 0 0 0-.75-.75H4.667a.75.75 0 0 0 0 1.5h6.667a.75.75 0 0 0 .75-.75M10 5.25a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5z",
        clipRule: "evenodd"
    }));
const ImageBottom_16 = SvgImageBottom16;
export { ImageBottom_16 as default };
