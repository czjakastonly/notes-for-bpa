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
const SvgImageCaption16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M14.75 11.25A.75.75 0 0 1 14 12H2a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 .75.75m-13.5-8.5C1.25 1.784 2.034 1 3 1h10c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0 1 13 9H3a1.75 1.75 0 0 1-1.75-1.75zM3 2.5a.25.25 0 0 0-.25.25v4.5c0 .138.112.25.25.25h10a.25.25 0 0 0 .25-.25v-4.5A.25.25 0 0 0 13 2.5zm5.813 11.75a.75.75 0 0 1-.75.75H2a.75.75 0 0 1 0-1.5h6.063a.75.75 0 0 1 .75.75",
        clipRule: "evenodd"
    }));
const ImageCaption_16 = SvgImageCaption16;
export { ImageCaption_16 as default };
