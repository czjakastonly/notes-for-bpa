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
const SvgGuidedTourColor12 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 12,
        height: 12,
        fill: "none",
        viewBox: "0 0 12 12"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#8D83D2",
        fillRule: "evenodd",
        d: "M2 2.75a.25.25 0 0 0-.25.25v6c0 .138.112.25.25.25a.75.75 0 0 1 0 1.5A1.75 1.75 0 0 1 .25 9V3c0-.966.784-1.75 1.75-1.75a.75.75 0 0 1 0 1.5M6.25 3c0-.966.784-1.75 1.75-1.75h2c.966 0 1.75.784 1.75 1.75v6A1.75 1.75 0 0 1 10 10.75H8A1.75 1.75 0 0 1 6.25 9zM8 2.75a.25.25 0 0 0-.25.25v6c0 .138.112.25.25.25h2a.25.25 0 0 0 .25-.25V3a.25.25 0 0 0-.25-.25zM4.75 3A.25.25 0 0 1 5 2.75a.75.75 0 0 0 0-1.5A1.75 1.75 0 0 0 3.25 3v6c0 .966.784 1.75 1.75 1.75a.75.75 0 0 0 0-1.5.25.25 0 0 1-.25-.25z",
        clipRule: "evenodd"
    }));
const GuidedTour_color_12 = SvgGuidedTourColor12;
export { GuidedTour_color_12 as default };
