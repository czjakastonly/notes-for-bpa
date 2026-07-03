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
const SvgCommandColor8 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 9,
        height: 8,
        viewBox: "0 0 9 8"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#BFC1C6",
        fillRule: "evenodd",
        d: "M7 0a1.5 1.5 0 0 1 0 3h-.5v2H7a1.5 1.5 0 0 1 1.493 1.356L8.5 6.5a1.5 1.5 0 0 1-3 0V6h-2v.5a1.5 1.5 0 0 1-1.356 1.493L2 8a1.5 1.5 0 0 1 0-3h.5V3H2A1.5 1.5 0 0 1 .507 1.644L.5 1.5a1.5 1.5 0 0 1 3 0V2h2v-.5A1.5 1.5 0 0 1 6.856.007zm0 6h-.501l.001.5A.5.5 0 1 0 7 6M2.5 6H2a.5.5 0 1 0 .5.5zm3-1V3h-2v2zM2 1a.5.5 0 0 0 0 1h.5v-.5a.5.5 0 0 0-.41-.492zm5 0a.5.5 0 0 0-.5.5l-.001.5H7a.5.5 0 0 0 .492-.41L7.5 1.5A.5.5 0 0 0 7 1"
    }));
const Command_color_8 = SvgCommandColor8;
export { Command_color_8 as default };
