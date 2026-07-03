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
const SvgEvent16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M6 1.75a.75.75 0 0 0-1.5 0v.417H3a2 2 0 0 0-2 2V13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4.167a2 2 0 0 0-2-2h-1.167V1.75a.75.75 0 1 0-1.5 0v.417H6zm4.333 2v-.083H6v.083a.75.75 0 0 1-1.5 0v-.083H3a.5.5 0 0 0-.5.5V13a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V4.167a.5.5 0 0 0-.5-.5h-1.167v.083a.75.75 0 1 1-1.5 0m.609 3.554a.75.75 0 1 0-1.262-.81L7.71 9.56l-1.18-1.18a.75.75 0 0 0-1.06 1.061l1.838 1.838a.75.75 0 0 0 1.161-.125z",
        clipRule: "evenodd"
    }));
const Event_16 = SvgEvent16;
export { Event_16 as default };
