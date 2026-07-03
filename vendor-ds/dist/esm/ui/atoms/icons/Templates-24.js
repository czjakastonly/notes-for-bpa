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
const SvgTemplates24 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none",
        viewBox: "0 0 24 24"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#706D84",
        d: "M2.625 3.375a.75.75 0 0 1 .75.75v16.5c0 .414.336.75.75.75h13.5a.75.75 0 0 1 0 1.5h-13.5a2.25 2.25 0 0 1-2.25-2.25v-16.5a.75.75 0 0 1 .75-.75m11.584-2.25a.85.85 0 0 1 .538.192l.063.057L21.5 8.065a.85.85 0 0 1 .249.601v9.61c0 .468-.38.849-.85.849H6.475a.85.85 0 0 1-.85-.85v-16.3c0-.47.38-.85.85-.85zm-7.084 16.5H20.25v-8.25h-4.575a2.55 2.55 0 0 1-2.55-2.55v-4.2h-6zm7.5-10.8c0 .58.47 1.05 1.05 1.05h3.514l-4.564-4.564z"
    }));
const Templates_24 = SvgTemplates24;
export { Templates_24 as default };
