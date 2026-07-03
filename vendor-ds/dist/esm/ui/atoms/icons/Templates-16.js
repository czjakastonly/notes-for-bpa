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
const SvgTemplates16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M3.5 1.35c0-.47.38-.85.85-.85h5.109a.85.85 0 0 1 .6.249l4.442 4.441a.85.85 0 0 1 .249.601v6.359c0 .47-.38.85-.85.85H4.35a.85.85 0 0 1-.85-.85zM5 2v9.5h8.25v-5h-2.8A1.95 1.95 0 0 1 8.5 4.55V2zm5 .81v1.74c0 .249.201.45.45.45h1.74zM1.75 2a.75.75 0 0 1 .75.75v11c0 .138.112.25.25.25h9a.75.75 0 0 1 0 1.5h-9A1.75 1.75 0 0 1 1 13.75v-11A.75.75 0 0 1 1.75 2",
        clipRule: "evenodd"
    }));
const Templates_16 = SvgTemplates16;
export { Templates_16 as default };
