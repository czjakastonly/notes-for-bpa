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
const SvgGuidedTourColor32 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 32,
        height: 32,
        fill: "none",
        viewBox: "0 0 32 32"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#958BD3",
        d: "M25.4 5A2.6 2.6 0 0 1 28 7.6v16.8a2.6 2.6 0 0 1-2.6 2.6h-9.8a2.6 2.6 0 0 1-2.6-2.6V7.6A2.6 2.6 0 0 1 15.6 5zm-13.976.618a1 1 0 0 1-.437 1.255l-.105.051a.63.63 0 0 0-.375.493l-.007.098v16.97c0 .233.12.439.3.55l.082.04a1 1 0 1 1-.764 1.85 2.63 2.63 0 0 1-1.611-2.251l-.007-.189V7.515c0-1.077.645-2.037 1.618-2.44a1 1 0 0 1 1.306.543m-4.5 0a1 1 0 0 1-.437 1.255l-.105.051a.63.63 0 0 0-.375.493L6 7.515v16.97c0 .233.12.439.3.55l.082.04a1.002 1.002 0 0 1-.764 1.85 2.63 2.63 0 0 1-1.611-2.251L4 24.485V7.515c0-1.077.645-2.037 1.618-2.44a1 1 0 0 1 1.306.543M25.4 7h-9.8a.6.6 0 0 0-.6.6v16.8a.6.6 0 0 0 .6.6h9.8a.6.6 0 0 0 .6-.6V7.6a.6.6 0 0 0-.6-.6"
    }));
const GuidedTour_color_32 = SvgGuidedTourColor32;
export { GuidedTour_color_32 as default };
