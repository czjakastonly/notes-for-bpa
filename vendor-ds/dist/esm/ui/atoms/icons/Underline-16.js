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
const SvgUnderline16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M12.993 1.398A.75.75 0 0 0 11.5 1.5v6.38l-.005.184C11.395 9.835 9.874 11.25 8 11.25c-1.938 0-3.5-1.514-3.5-3.37V1.5l-.007-.102A.75.75 0 0 0 3 1.5v6.38l.005.211C3.118 10.688 5.316 12.75 8 12.75c2.756 0 5-2.175 5-4.87V1.5zM3.25 14.75c0 .414.336.75.75.75h8a.75.75 0 0 0 0-1.5H4a.75.75 0 0 0-.75.75",
        clipRule: "evenodd"
    }));
const Underline_16 = SvgUnderline16;
export { Underline_16 as default };
