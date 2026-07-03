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
const SvgWidgetBubble56 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 56,
        height: 40,
        fill: "none",
        viewBox: "0 0 56 40"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#D3D5DA",
        fillRule: "evenodd",
        d: "M28 2c9.94 0 18 8.06 18 18 0 2.877-.997 5.99-2.198 8.403l1.572 7.76a1.06 1.06 0 0 1-1.266 1.245l-7.523-1.662C34.175 36.944 30.875 38 28 38c-9.94 0-18-8.06-18-18S18.06 2 28 2m0 1.5c-9.112 0-16.5 7.388-16.5 16.5S18.888 36.5 28 36.5c2.373 0 5.388-.84 7.918-2.097a1.5 1.5 0 0 1 .99-.121l6.861 1.514-1.437-7.096a1.5 1.5 0 0 1 .128-.966c1.255-2.521 2.04-5.353 2.04-7.734 0-9.112-7.388-16.5-16.5-16.5m-5 15a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 23 18.5m5 0a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 28 18.5m5 0a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 33 18.5",
        clipRule: "evenodd"
    }));
const WidgetBubble_56 = SvgWidgetBubble56;
export { WidgetBubble_56 as default };
