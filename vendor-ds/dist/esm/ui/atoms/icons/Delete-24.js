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
const SvgDelete24 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none",
        viewBox: "0 0 24 24"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M8 2a.75.75 0 0 0-.75.75V5H3a.75.75 0 0 0 0 1.5h18A.75.75 0 0 0 21 5h-4.25V2.75A.75.75 0 0 0 16 2zm7.25 3V3.5h-6.5V5zm-10 2.75A.75.75 0 0 1 6 8.5v12h12v-12a.75.75 0 0 1 1.5 0v12.75a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V8.5a.75.75 0 0 1 .75-.75m5 2.75a.75.75 0 0 0-1.5 0v7a.75.75 0 0 0 1.5 0zm5 0a.75.75 0 0 0-1.5 0v7a.75.75 0 0 0 1.5 0z",
        clipRule: "evenodd"
    }));
const Delete_24 = SvgDelete24;
export { Delete_24 as default };
