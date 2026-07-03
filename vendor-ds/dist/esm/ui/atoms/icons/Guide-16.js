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
const SvgGuide16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M13.9 1A1.1 1.1 0 0 1 15 2.1v11.8a1.1 1.1 0 0 1-1.1 1.1H2.1A1.1 1.1 0 0 1 1 13.9V2.1A1.1 1.1 0 0 1 2.1 1zm-.4 1.5h-11v11h11zM10.75 9a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5zm0-3.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5z",
        clipRule: "evenodd"
    }));
const Guide_16 = SvgGuide16;
export { Guide_16 as default };
