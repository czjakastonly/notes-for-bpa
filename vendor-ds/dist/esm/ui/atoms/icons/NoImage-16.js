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
const SvgNoImage16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#BFC1C6",
        fillRule: "evenodd",
        d: "M3.75 8a4.25 4.25 0 0 1 6.678-3.489l-5.917 5.917A4.23 4.23 0 0 1 3.75 8m-.312 3.501-.968.969a.75.75 0 1 0 1.06 1.06l.969-.968a5.75 5.75 0 0 0 8.063-8.063l.968-.969a.75.75 0 0 0-1.06-1.06l-.969.968a5.75 5.75 0 0 0-8.063 8.063m8.05-5.929a4.25 4.25 0 0 1-5.917 5.917l5.918-5.917Z",
        clipRule: "evenodd"
    }));
const NoImage_16 = SvgNoImage16;
export { NoImage_16 as default };
