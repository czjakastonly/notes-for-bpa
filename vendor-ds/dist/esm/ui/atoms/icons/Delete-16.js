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
const SvgDelete16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 14,
        height: 16,
        fill: "none",
        viewBox: "0 0 14 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M3.5 1.998V.75A.75.75 0 0 1 4.25 0h5.5a.75.75 0 0 1 .75.75v1.248h2.75a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1 0-1.5zm1.5 0h4V1.5H5zM11.25 14V5.25a.75.75 0 0 1 1.5 0v9.5a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75v-9.5a.75.75 0 0 1 1.5 0V14zM4.746 6.748a.75.75 0 0 1 1.5 0v4.5a.75.75 0 0 1-1.5 0zm3.004 0a.75.75 0 0 1 1.5 0v4.5a.75.75 0 0 1-1.5 0z",
        clipRule: "evenodd"
    }));
const Delete_16 = SvgDelete16;
export { Delete_16 as default };
