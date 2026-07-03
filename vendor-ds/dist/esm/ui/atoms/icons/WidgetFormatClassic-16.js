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
const SvgWidgetFormatClassic16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "#FF809E",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        d: "M3 2a1 1 0 0 1 1-1h8.5a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z",
        opacity: 0.25
    }), /*#__PURE__*/ createElement("path", {
        fillRule: "evenodd",
        d: "M4.5 2.5v11H12v-11zM4 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z",
        clipRule: "evenodd"
    }), /*#__PURE__*/ createElement("path", {
        fillRule: "evenodd",
        d: "M12.333 4.667H4.166v-1h8.167zM12.333 12.5H4.166v-1h8.167z",
        clipRule: "evenodd"
    }));
const WidgetFormatClassic_16 = SvgWidgetFormatClassic16;
export { WidgetFormatClassic_16 as default };
