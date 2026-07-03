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
const SvgImageAlignLeftFloat16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M2 2a.75.75 0 0 0 0 1.5h12A.75.75 0 0 0 14 2zm8.25 4.25A.75.75 0 0 1 11 5.5h3A.75.75 0 0 1 14 7h-3a.75.75 0 0 1-.75-.75m-8-.75a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zm8 4.25A.75.75 0 0 1 11 9h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75m-9 3.5A.75.75 0 0 1 2 12.5h12a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75",
        clipRule: "evenodd"
    }));
const ImageAlignLeftFloat_16 = SvgImageAlignLeftFloat16;
export { ImageAlignLeftFloat_16 as default };
