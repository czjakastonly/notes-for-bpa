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
const SvgStonlyOutline16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M6 3.75A.75.75 0 0 0 6.75 3c0-.27.234-.5.523-.5h1.45c.29 0 .524.23.524.5s-.234.5-.523.5a.75.75 0 0 0 0 1.5c1.111 0 2.023-.895 2.023-2s-.912-2-2.023-2h-1.45C6.161 1 5.25 1.895 5.25 3c0 .414.336.75.75.75m5.23 3.5a.75.75 0 0 1 0-1.5c1.111 0 2.023.895 2.023 2s-.912 2-2.023 2h-1a.75.75 0 0 1 0-1.5h1c.289 0 .523-.23.523-.5s-.234-.5-.523-.5M8 12.5A.75.75 0 0 1 8 11h5.227c1.111 0 2.023.895 2.023 2s-.912 2-2.023 2H7a.75.75 0 0 1 0-1.5h6.227c.29 0 .523-.23.523-.5s-.234-.5-.523-.5zm-4.477 1.75a.75.75 0 0 0-.75-.75.516.516 0 0 1-.523-.5c0-.27.234-.5.523-.5h1a.75.75 0 0 0 0-1.5h-1C1.662 11 .75 11.895.75 13s.912 2 2.023 2a.75.75 0 0 0 .75-.75m2.977-6a.75.75 0 0 1 0 1.5H4.773c-1.111 0-2.023-.895-2.023-2s.912-2 2.023-2H7.5a.75.75 0 0 1 0 1.5H4.773a.516.516 0 0 0-.523.5c0 .27.234.5.523.5z",
        clipRule: "evenodd"
    }));
const StonlyOutline_16 = SvgStonlyOutline16;
export { StonlyOutline_16 as default };
