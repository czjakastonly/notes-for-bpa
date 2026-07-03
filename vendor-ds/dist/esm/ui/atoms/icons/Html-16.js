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
const SvgHtml16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        stroke: "#515358",
        strokeLinecap: "round",
        strokeWidth: 1.5,
        d: "M1 7.87V14a1 1 0 0 0 1 1h2.5"
    }), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        d: "M13.744.115c.34 0 .615.277.615.616v2.67l1.028.003a.616.616 0 0 1-.004 1.232l-1.64-.005a.616.616 0 0 1-.615-.617V.73c0-.34.276-.616.616-.616m-10.667 0c.34 0 .615.277.615.616v3.283a.616.616 0 0 1-1.23 0V2.992L1.23 2.99v1.025a.615.615 0 0 1-1.23 0V.73a.616.616 0 1 1 1.23 0v1.027l1.232.004V.732c0-.34.275-.617.615-.617m2.9.003L7.182.12a.615.615 0 1 1-.002 1.23h-.615v2.664a.616.616 0 0 1-1.231 0V1.348l-.616-.001a.615.615 0 0 1 .002-1.23H5.92l.028-.002q.015.002.029.003m5.2.054a.616.616 0 0 1 1.04.469c.004.03.01.06.01.09v3.283a.616.616 0 0 1-1.23 0V2.052l-.354.34a.6.6 0 0 1-.291.154l-.018.005q-.037.006-.076.008-.022.001-.046.003l-.046-.003q-.038-.002-.076-.008l-.016-.005a.6.6 0 0 1-.292-.153l-.345-.333v1.954a.616.616 0 0 1-1.232 0V.73q.001-.03.006-.06a.613.613 0 0 1 1.037-.5l.964.928zM5.446 6.282A1.1 1.1 0 0 1 6.36 6.1l.157.051 7.118 2.931h-.001a1.1 1.1 0 0 1 .36 1.792l-.705.704 1.193 1.194.074.08a1.1 1.1 0 0 1-.074 1.474l-1.224 1.225-.002.002a1.1 1.1 0 0 1-1.55 0l-.002-.002-1.194-1.194-.704.704a.75.75 0 0 1-.677.206l-.568-.114a.75.75 0 0 1-.547-.45L5.083 7.584a1.1 1.1 0 0 1 .238-1.195zm3.725 7.292.81-.808.114-.094a.75.75 0 0 1 .946.094l1.44 1.44.657-.658-1.44-1.44a.75.75 0 0 1 0-1.061l.808-.809-5.67-2.335z"
    }));
const Html_16 = SvgHtml16;
export { Html_16 as default };
