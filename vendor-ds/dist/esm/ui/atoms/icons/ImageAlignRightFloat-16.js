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
const SvgImageAlignRightFloat16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M14 2a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 2 2zM5.75 6.25A.75.75 0 0 0 5 5.5H2A.75.75 0 0 0 2 7h3a.75.75 0 0 0 .75-.75m8-.75a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm-8 4.25A.75.75 0 0 0 5 9H2a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 .75-.75m9 3.5a.75.75 0 0 0-.75-.75H2A.75.75 0 0 0 2 14h12a.75.75 0 0 0 .75-.75",
        clipRule: "evenodd"
    }));
const ImageAlignRightFloat_16 = SvgImageAlignRightFloat16;
export { ImageAlignRightFloat_16 as default };
