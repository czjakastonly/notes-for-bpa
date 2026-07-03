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
const SvgBannerTrigger16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M1.588 3.713A1.5 1.5 0 0 1 3.06 2.5H14.5a1.5 1.5 0 0 1 1.472 1.787l-1.56 8A1.5 1.5 0 0 1 12.94 13.5H1.5a1.5 1.5 0 0 1-1.472-1.787zm.205 6.787L3.06 4H14.5l-.293 1.5L12.94 12H1.5zm10.29-4a.75.75 0 0 1-.75.75h-6a.75.75 0 1 1 0-1.5h6a.75.75 0 0 1 .75.75m-1.416 3.75a.75.75 0 0 0 0-1.5h-6a.75.75 0 0 0 0 1.5z",
        clipRule: "evenodd"
    }));
const BannerTrigger_16 = SvgBannerTrigger16;
export { BannerTrigger_16 as default };
