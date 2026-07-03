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
const SvgAiAgent16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#F74D7E",
        d: "M8 .5a1.5 1.5 0 0 1 .75 2.798v1.285H11a3.75 3.75 0 0 1 3.75 3.75v3a3.75 3.75 0 0 1-3.75 3.75H5a3.75 3.75 0 0 1-3.75-3.75v-3A3.75 3.75 0 0 1 5 4.583h2.25V3.298A1.498 1.498 0 0 1 8 .5M5 6.083a2.25 2.25 0 0 0-2.25 2.25v3A2.25 2.25 0 0 0 5 13.583h6a2.25 2.25 0 0 0 2.25-2.25v-3A2.25 2.25 0 0 0 11 6.083zM6 8.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V9A.75.75 0 0 1 6 8.25m4 0a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75"
    }));
const AiAgent_16 = SvgAiAgent16;
export { AiAgent_16 as default };
