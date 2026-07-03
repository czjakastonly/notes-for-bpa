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
const SvgWidgetFormatModalClassic16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "#FF809E",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        d: "M14 3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z",
        opacity: 0.36
    }), /*#__PURE__*/ createElement("path", {
        fillRule: "evenodd",
        d: "M13.5 4.5h-11v8h11zM15 4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z",
        clipRule: "evenodd"
    }), /*#__PURE__*/ createElement("path", {
        d: "M2 6.5h12"
    }));
const WidgetFormatModalClassic_16 = SvgWidgetFormatModalClassic16;
export { WidgetFormatModalClassic_16 as default };
