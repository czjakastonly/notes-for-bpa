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
const SvgAutomaticStep16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M2.25 2.314a.25.25 0 0 1 .421-.182l6.041 5.686a.25.25 0 0 1 0 .364l-6.04 5.686a.25.25 0 0 1-.422-.182zM3.7 1.04C2.582-.01.75.78.75 2.314v11.372c0 1.533 1.833 2.325 2.95 1.274l2.05-1.93v.656c0 1.533 1.833 2.325 2.95 1.274l6.04-5.686a1.75 1.75 0 0 0 0-2.548L8.7 1.04C7.582-.01 5.75.78 5.75 2.314v.656zm3.55 3.342 2.49 2.344a1.75 1.75 0 0 1 0 2.548l-2.49 2.344v2.068c0 .219.262.332.421.182l6.041-5.686a.25.25 0 0 0 0-.364l-6.04-5.686a.25.25 0 0 0-.422.182z",
        clipRule: "evenodd"
    }));
const AutomaticStep_16 = SvgAutomaticStep16;
export { AutomaticStep_16 as default };
