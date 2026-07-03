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
const SvgCopy16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M13.5 3c.647 0 1.18.492 1.243 1.122l.007.128v10.5a1.25 1.25 0 0 1-1.122 1.243L13.5 16h-8a1.25 1.25 0 0 1-1.244-1.122l-.006-.128V4.25c0-.647.492-1.18 1.122-1.244L5.5 3zm-.25 1.5h-7.5v10h7.5zM10.5 0c.647 0 1.18.492 1.243 1.122l.007.128v.25a.75.75 0 0 1-1.493.102L10.25 1.5h-7.5v10l.102.007a.75.75 0 0 1 .641.641l.007.102a.75.75 0 0 1-.648.743L2.75 13H2.5a1.25 1.25 0 0 1-1.244-1.122l-.006-.128V1.25c0-.647.492-1.18 1.122-1.244L2.5 0z",
        clipRule: "evenodd"
    }));
const Copy_16 = SvgCopy16;
export { Copy_16 as default };
