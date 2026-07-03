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
const SvgStonlyFilled16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M11.516 6.64c-.846 0-1.538.693-1.538 1.538s.692 1.539 1.538 1.539 1.538-.693 1.538-1.539c0-.845-.692-1.538-1.538-1.538m-4.594 0H3.845c-.846 0-1.538.693-1.538 1.538 0 .847.692 1.539 1.538 1.539h3.077c.846 0 1.538-.692 1.538-1.539 0-.845-.692-1.538-1.538-1.538M9.229 1H6.153c-.847 0-1.538.693-1.538 1.538 0 .847.691 1.539 1.538 1.539h3.076c.846 0 1.538-.692 1.538-1.539 0-.845-.692-1.538-1.538-1.538M6.152 12.28c-.846 0-1.538.692-1.538 1.539 0 .845.692 1.538 1.538 1.538h7.64c.846 0 1.538-.693 1.538-1.538 0-.847-.692-1.539-1.538-1.539zm-4.614 0C.692 12.28 0 12.972 0 13.819c0 .845.692 1.538 1.538 1.538s1.538-.693 1.538-1.538c0-.847-.692-1.539-1.538-1.539",
        clipRule: "evenodd"
    }));
const StonlyFilled_16 = SvgStonlyFilled16;
export { StonlyFilled_16 as default };
