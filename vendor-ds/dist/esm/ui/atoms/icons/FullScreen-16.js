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
const SvgFullScreen16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M2.5 2.5v2.25a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 1.75 1h3a.75.75 0 0 1 0 1.5zm2.25 11H2.5v-2.25a.75.75 0 0 0-1.5 0v3c0 .414.336.75.75.75h3a.75.75 0 0 0 0-1.5m8.75-2.25v2.25h-2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-1.5 0M11.25 2.5h2.25v2.25a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0 0 1.5",
        clipRule: "evenodd"
    }));
const FullScreen_16 = SvgFullScreen16;
export { FullScreen_16 as default };
