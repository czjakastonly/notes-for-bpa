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
const SvgPower16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#706D84",
        fillRule: "evenodd",
        d: "M8.75 1.655a.75.75 0 1 0-1.5 0v5.89a.75.75 0 1 0 1.5 0zm-3.336 3.34a.75.75 0 0 0-.828-1.252 6.187 6.187 0 1 0 6.828 0 .75.75 0 1 0-.828 1.251 4.688 4.688 0 1 1-5.172 0",
        clipRule: "evenodd"
    }));
const Power_16 = SvgPower16;
export { Power_16 as default };
