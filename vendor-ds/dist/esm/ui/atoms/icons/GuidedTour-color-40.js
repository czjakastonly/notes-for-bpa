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
const SvgGuidedTourColor40 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 40,
        height: 40,
        fill: "none",
        viewBox: "0 0 40 40"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#958BD3",
        fillRule: "evenodd",
        d: "M18 6h15a3 3 0 0 1 3 3v22a3 3 0 0 1-3 3H18a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3m15 2H18a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1",
        clipRule: "evenodd"
    }), /*#__PURE__*/ createElement("path", {
        fill: "#958BD3",
        d: "M11.374 6.219a1 1 0 0 1 .856 1.803l-.105.05a1 1 0 0 0-.618.806L11.5 9v22a1 1 0 0 0 .517.876l.108.052a1 1 0 0 1-.75 1.853 3 3 0 0 1-1.869-2.587L9.5 31V9a3 3 0 0 1 1.874-2.781M5.874 6.219a1 1 0 0 1 .856 1.803l-.105.05a1 1 0 0 0-.618.806L6 9v22a1 1 0 0 0 .516.876l.109.052a1 1 0 0 1-.75 1.853 3 3 0 0 1-1.869-2.587L4 31V9a3 3 0 0 1 1.874-2.781"
    }));
const GuidedTour_color_40 = SvgGuidedTourColor40;
export { GuidedTour_color_40 as default };
