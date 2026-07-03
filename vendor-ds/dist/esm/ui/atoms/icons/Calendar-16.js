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
const SvgCalendar16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M5.25 1a.75.75 0 0 1 .75.75v.417h4.333V1.75a.75.75 0 0 1 1.5 0v.417H13a2 2 0 0 1 2 2V13a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4.167a2 2 0 0 1 2-2h1.5V1.75A.75.75 0 0 1 5.25 1m5.083 2.667v.083a.75.75 0 0 0 1.5 0v-.083H13a.5.5 0 0 1 .5.5V13a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4.167a.5.5 0 0 1 .5-.5h1.5v.083a.75.75 0 0 0 1.5 0v-.083zm-7 3.166a1 1 0 0 1 1-1h.334a1 1 0 0 1 1 1v.334a1 1 0 0 1-1 1h-.334a1 1 0 0 1-1-1zm1 2.5a1 1 0 0 0-1 1v.334a1 1 0 0 0 1 1h.334a1 1 0 0 0 1-1v-.334a1 1 0 0 0-1-1zm2.5-2.5a1 1 0 0 1 1-1h.334a1 1 0 0 1 1 1v.334a1 1 0 0 1-1 1h-.334a1 1 0 0 1-1-1zm1 2.5a1 1 0 0 0-1 1v.334a1 1 0 0 0 1 1h.334a1 1 0 0 0 1-1v-.334a1 1 0 0 0-1-1zm2.5-2.5a1 1 0 0 1 1-1h.334a1 1 0 0 1 1 1v.334a1 1 0 0 1-1 1h-.334a1 1 0 0 1-1-1zm1 2.5a1 1 0 0 0-1 1v.334a1 1 0 0 0 1 1h.334a1 1 0 0 0 1-1v-.334a1 1 0 0 0-1-1z",
        clipRule: "evenodd"
    }));
const Calendar_16 = SvgCalendar16;
export { Calendar_16 as default };
