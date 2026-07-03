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
const SvgEye16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M10 8c0 1.103-.896 2-2 2s-2-.897-2-2 .896-2 2-2 2 .897 2 2m-2 5.5c-1.475 0-2.818-.33-4.014-.938a8.7 8.7 0 0 1-1.146-.7C1.243 10.71 0 8.896 0 8c0-2.077 3.682-5.5 8-5.5 1.2 0 2.316.22 3.338.631q.68.276 1.292.653C14.508 4.943 16 6.994 16 8c0 2.07-3.688 5.5-8 5.5M8 12c2.011 0 3.682-.722 4.982-1.932.492-.457.9-.962 1.196-1.444.201-.33.322-.623.322-.624 0-.405-1.18-2.028-2.657-2.939a7 7 0 0 0-1.066-.539A7.4 7.4 0 0 0 8 4c-2.014 0-3.685.721-4.984 1.928C2.146 6.737 1.5 7.798 1.5 8c0 .327.973 1.747 2.219 2.647q.447.323.947.578C5.654 11.727 6.765 12 8 12",
        clipRule: "evenodd"
    }));
const Eye_16 = SvgEye16;
export { Eye_16 as default };
