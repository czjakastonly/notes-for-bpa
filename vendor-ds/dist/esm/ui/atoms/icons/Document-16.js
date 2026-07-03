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
const SvgDocument16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#5D6169",
        fillRule: "evenodd",
        d: "M9.586.5a1 1 0 0 1 .707.293l3.621 3.621a2 2 0 0 1 .586 1.414V14.5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-13a1 1 0 0 1 1-1zM8.5 2H3v12h10V6.499l-2.55.001a1.95 1.95 0 0 1-1.945-1.804L8.5 4.55zm3.878 2.999L10 2.621V4.55c0 .22.16.405.37.443l.08.007z",
        clipRule: "evenodd"
    }));
const Document_16 = SvgDocument16;
export { Document_16 as default };
