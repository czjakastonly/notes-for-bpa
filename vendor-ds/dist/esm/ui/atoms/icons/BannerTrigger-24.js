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
const SvgBannerTrigger24 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none",
        viewBox: "0 0 24 24"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M3.688 6.211A1.5 1.5 0 0 1 5.16 5H21a1.5 1.5 0 0 1 1.472 1.789l-2.16 11A1.5 1.5 0 0 1 18.84 19H3a1.5 1.5 0 0 1-1.472-1.789zM3.295 16 5.16 6.5H21L20.706 8l-1.866 9.5H3zm14.455-5.5a.75.75 0 0 1-.75.75H8a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75M16 14.25a.75.75 0 0 0 0-1.5H7a.75.75 0 0 0 0 1.5z",
        clipRule: "evenodd"
    }));
const BannerTrigger_24 = SvgBannerTrigger24;
export { BannerTrigger_24 as default };
