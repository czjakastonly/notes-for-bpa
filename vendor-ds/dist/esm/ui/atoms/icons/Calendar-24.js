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
const SvgCalendar24 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none",
        viewBox: "0 0 24 24"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M8.25 3a.75.75 0 0 1 .75.75v.75h6v-.75a.75.75 0 0 1 1.5 0v.75H19a2 2 0 0 1 2 2V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6.5a2 2 0 0 1 2-2h2.5v-.75A.75.75 0 0 1 8.25 3M15 6v.75a.75.75 0 0 0 1.5 0V6H19a.5.5 0 0 1 .5.5V19a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V6.5A.5.5 0 0 1 5 6h2.5v.75a.75.75 0 0 0 1.5 0V6zm-9 4.714a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m1.5 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m3-3a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m1.5 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m3-3a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m1.5 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3",
        clipRule: "evenodd"
    }));
const Calendar_24 = SvgCalendar24;
export { Calendar_24 as default };
