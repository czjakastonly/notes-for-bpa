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
const SvgWidgetPlacementNextToElement16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none",
        viewBox: "0 0 24 24"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#FDEBEB",
        stroke: "#FF809E",
        strokeWidth: 1.5,
        d: "M5.394 14.365v-.36l-.281-.225-2.58-2.064 2.613-2.35.248-.224V5.25c0-.69.56-1.25 1.25-1.25h11.693c.69 0 1.25.56 1.25 1.25v13c0 .69-.56 1.25-1.25 1.25H6.644c-.69 0-1.25-.56-1.25-1.25z"
    }));
const WidgetPlacementNextToElement_16 = SvgWidgetPlacementNextToElement16;
export { WidgetPlacementNextToElement_16 as default };
