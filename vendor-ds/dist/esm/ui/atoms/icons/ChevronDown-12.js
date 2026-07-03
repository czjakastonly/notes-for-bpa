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
const SvgChevronDown12 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 12,
        height: 12,
        fill: "none",
        viewBox: "0 0 12 12"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#706D84",
        fillRule: "evenodd",
        d: "M3.263 3.29a.68.68 0 0 0-.99-.132.78.78 0 0 0-.124 1.052l3.29 4.5a.68.68 0 0 0 1.115 0l3.297-4.5a.78.78 0 0 0-.123-1.052.68.68 0 0 0-.99.131l-2.74 3.74z",
        clipRule: "evenodd"
    }));
const ChevronDown_12 = SvgChevronDown12;
export { ChevronDown_12 as default };
