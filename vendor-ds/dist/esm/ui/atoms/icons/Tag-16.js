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
const SvgTag16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M8.257.85a2.1 2.1 0 0 0-.787.152l-.007.003-.007.003a2.1 2.1 0 0 0-.678.452L1.463 6.78A2.08 2.08 0 0 0 .85 8.256c0 .555.216 1.083.614 1.477l.002.002 4.802 4.802a2.08 2.08 0 0 0 1.476.613 2.07 2.07 0 0 0 1.478-.614l.001-.002 2.156-2.155 3.16-3.159a2.1 2.1 0 0 0 .596-1.737v-.005l-.543-4.26v-.002a2.09 2.09 0 0 0-1.808-1.807h-.001L8.527.867a2 2 0 0 0-.27-.017m-.418 1.67a.6.6 0 0 1 .482-.167l.012.002 4.259.542a.59.59 0 0 1 .512.512l.542 4.255v.001a.592.592 0 0 1-.168.494l-3.16 3.159-2.158 2.159-.003.002a.581.581 0 0 1-.828-.003L2.523 8.673l-.003-.003a.57.57 0 0 1-.17-.413.58.58 0 0 1 .173-.415zM9.5 4.25c-.601 0-1.168.235-1.591.659A2.24 2.24 0 0 0 7.25 6.5c0 .598.235 1.167.659 1.591s.993.659 1.591.659 1.167-.235 1.591-.659.659-.993.659-1.591c0-.601-.235-1.168-.659-1.591A2.24 2.24 0 0 0 9.5 4.25m-.53 1.72a.74.74 0 0 1 .53-.22c.201 0 .388.077.53.22.143.142.22.327.22.53a.74.74 0 0 1-.22.53.74.74 0 0 1-.53.22.74.74 0 0 1-.53-.22.74.74 0 0 1-.22-.53c0-.201.077-.389.22-.53",
        clipRule: "evenodd"
    }));
const Tag_16 = SvgTag16;
export { Tag_16 as default };
