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
const SvgMultipleCommentsUnread16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#fff",
        d: "M13.5 4.25a2.25 2.25 0 0 1 2.25 2.25v4a2.25 2.25 0 0 1-2.25 2.25h-1.75v1.163a1.25 1.25 0 0 1-1.122 1.243l-.128.007a1.25 1.25 0 0 1-.813-.3L7.222 12.75H5.5a2.25 2.25 0 0 1-2.245-2.096L3.25 10.5v-1h1.5v1c0 .414.336.75.75.75h2a.75.75 0 0 1 .488.18l2.262 1.94V12a.75.75 0 0 1 .648-.743L11 11.25h2.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 0-.75-.75H9.3l.2-1.5zM.25 9.5V8.4l1.5 1v.1c0 .138.112.25.25.25v1.5A1.75 1.75 0 0 1 .25 9.5M11.5 1.25c.966 0 1.75.784 1.75 1.75h-1.5a.25.25 0 0 0-.25-.25h-2l-.45-1.5z"
    }), /*#__PURE__*/ createElement("circle", {
        cx: 4,
        cy: 4,
        r: 4,
        fill: "#E61168"
    }));
const MultipleCommentsUnread_16 = SvgMultipleCommentsUnread16;
export { MultipleCommentsUnread_16 as default };
