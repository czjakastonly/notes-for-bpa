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
const SvgEdit16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M10.521 2.461a.75.75 0 0 0 1.06-.002l.646-.647 1.768 1.768-.647.652a.75.75 0 0 0 1.065 1.056l1.173-1.182a.75.75 0 0 0-.002-1.058L12.756.22a.75.75 0 0 0-1.062 0L10.52 1.4a.75.75 0 0 0 .002 1.061m-9.799 8.92a.75.75 0 0 1 .205-.383L8.705 3.22a.75.75 0 0 1 1.06 0l2.829 2.828a.75.75 0 0 1 0 1.06l-7.778 7.78a.75.75 0 0 1-.383.204L.898 15.8a.75.75 0 0 1-.883-.882zm.984 2.727 2.21-.442 7.087-7.088-1.768-1.767-7.087 7.087z",
        clipRule: "evenodd"
    }));
const Edit_16 = SvgEdit16;
export { Edit_16 as default };
