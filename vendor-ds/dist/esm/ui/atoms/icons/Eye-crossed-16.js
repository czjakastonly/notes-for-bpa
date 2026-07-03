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
const SvgEyeCrossed16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "m7.22 9.841-1.737 1.736A7.4 7.4 0 0 0 8 12c2.011 0 3.682-.722 4.982-1.932.492-.457.9-.962 1.196-1.444.201-.33.322-.623.322-.624 0-.396-1.13-1.958-2.561-2.878L9.84 7.219A2.002 2.002 0 0 1 7.22 9.841M16 8c0 2.07-3.688 5.5-8 5.5-1.334 0-2.56-.27-3.668-.772L3.03 14.03a.75.75 0 0 1-1.06-1.06l11-11a.75.75 0 1 1 1.06 1.06l-1.01 1.011C14.71 5.226 16 7.065 16 8M8.56 2.516a.75.75 0 1 1-.088 1.498A8 8 0 0 0 8 4c-2.014 0-3.685.721-4.984 1.928C2.146 6.737 1.5 7.798 1.5 8c0-.013.077.194.215.444.203.367.492.772.844 1.162a.75.75 0 0 1-1.114 1.004C.598 9.671 0 8.59 0 8c0-2.077 3.682-5.5 8-5.5q.282 0 .56.016",
        clipRule: "evenodd"
    }));
const Eye_crossed_16 = SvgEyeCrossed16;
export { Eye_crossed_16 as default };
