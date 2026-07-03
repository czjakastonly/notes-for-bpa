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
const SvgAiAgent24 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none",
        viewBox: "0 0 24 24"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#706D84",
        d: "M12 1a2 2 0 0 1 .735 3.857A1 1 0 0 1 12.75 5v2.25H17A4.75 4.75 0 0 1 21.75 12v6A4.75 4.75 0 0 1 17 22.75H7A4.75 4.75 0 0 1 2.25 18v-6A4.75 4.75 0 0 1 7 7.25h4.25V5q0-.073.014-.143A1.998 1.998 0 0 1 12 1M7 8.75A3.25 3.25 0 0 0 3.75 12v6A3.25 3.25 0 0 0 7 21.25h10A3.25 3.25 0 0 0 20.25 18v-6A3.25 3.25 0 0 0 17 8.75zm2 4.5a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V14a.75.75 0 0 1 .75-.75m6 0a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V14a.75.75 0 0 1 .75-.75"
    }));
const AiAgent_24 = SvgAiAgent24;
export { AiAgent_24 as default };
