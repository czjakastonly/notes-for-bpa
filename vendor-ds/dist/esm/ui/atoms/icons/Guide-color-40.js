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
const SvgGuideColor40 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 40,
        height: 40,
        fill: "none",
        viewBox: "0 0 40 40"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#F74D7E",
        fillRule: "evenodd",
        d: "M14 17a1 1 0 1 1 0-2h12a1 1 0 1 1 0 2zm0 8a1 1 0 1 1 0-2h12a1 1 0 1 1 0 2z",
        clipRule: "evenodd"
    }), /*#__PURE__*/ createElement("path", {
        fill: "#F74D7E",
        fillRule: "evenodd",
        d: "M31 7H9a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1M9 5a3 3 0 0 0-3 3v24a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3z",
        clipRule: "evenodd"
    }));
const Guide_color_40 = SvgGuideColor40;
export { Guide_color_40 as default };
