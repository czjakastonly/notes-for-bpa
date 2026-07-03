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
const SvgTransparency24 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none",
        viewBox: "0 0 24 24"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#706D84",
        d: "M13 14c.966 0 1.75.784 1.75 1.75v5A1.75 1.75 0 0 1 13 22.5H3a1.75 1.75 0 0 1-1.75-1.75v-5c0-.966.784-1.75 1.75-1.75zm8 0c.966 0 1.75.784 1.75 1.75v5A1.75 1.75 0 0 1 21 22.5h-2a1.75 1.75 0 0 1-1.75-1.75v-5c0-.966.784-1.75 1.75-1.75zM3 15.5a.25.25 0 0 0-.25.25v5c0 .138.112.25.25.25h10a.25.25 0 0 0 .25-.25v-5a.25.25 0 0 0-.25-.25zm16 0a.25.25 0 0 0-.25.25v5c0 .138.112.25.25.25h2a.25.25 0 0 0 .25-.25v-5a.25.25 0 0 0-.25-.25zM5 2c.966 0 1.75.784 1.75 1.75v6A1.75 1.75 0 0 1 5 11.5H3a1.75 1.75 0 0 1-1.75-1.75v-6C1.25 2.784 2.034 2 3 2zm5 5.5a.75.75 0 0 1 .75.75v1.5c0 .138.112.25.25.25h1.25a.75.75 0 0 1 0 1.5H11a1.75 1.75 0 0 1-1.75-1.75v-1.5A.75.75 0 0 1 10 7.5m7.327 2.504a.75.75 0 0 1 0 1.492l-.077.004h-2.5a.75.75 0 0 1 0-1.5h2.5zM22 7.5a.75.75 0 0 1 .75.75v1.5A1.75 1.75 0 0 1 21 11.5h-1.25a.75.75 0 0 1 0-1.5H21a.25.25 0 0 0 .25-.25v-1.5A.75.75 0 0 1 22 7.5m-19-4a.25.25 0 0 0-.25.25v6c0 .138.112.25.25.25h2a.25.25 0 0 0 .25-.25v-6A.25.25 0 0 0 5 3.5zM12.25 2a.75.75 0 0 1 0 1.5H11a.25.25 0 0 0-.25.25v1.5a.75.75 0 0 1-1.5 0v-1.5C9.25 2.784 10.034 2 11 2zM21 2c.966 0 1.75.784 1.75 1.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.25.25 0 0 0 21 3.5h-1.25a.75.75 0 0 1 0-1.5zm-3.673.004a.75.75 0 0 1 0 1.492l-.077.004h-2.5a.75.75 0 0 1 0-1.5h2.5z"
    }));
const Transparency_24 = SvgTransparency24;
export { Transparency_24 as default };
