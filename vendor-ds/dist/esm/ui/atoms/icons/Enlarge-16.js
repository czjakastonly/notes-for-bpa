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
const SvgEnlarge16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        viewBox: "0 0 15 15"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "m9.28 6.352 3.791-3.791v2.431a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-.75-.75H9.578a.75.75 0 0 0 0 1.5h2.433L8.22 5.291a.75.75 0 0 0 1.06 1.06M5.291 8.22 1.5 12.01V9.58a.75.75 0 1 0-1.5 0v4.241c0 .415.336.75.75.75h4.243a.75.75 0 0 0 0-1.5H2.561l3.79-3.79a.75.75 0 0 0-1.06-1.061",
        clipRule: "evenodd"
    }));
const Enlarge_16 = SvgEnlarge16;
export { Enlarge_16 as default };
