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
const SvgDownload16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M14 11.25a.75.75 0 0 1 .743.648l.007.102v2.5a.75.75 0 0 1-.648.743L14 15.25H2a.75.75 0 0 1-.743-.648L1.25 14.5V12a.75.75 0 0 1 1.493-.102L2.75 12v1.75h10.5V12a.75.75 0 0 1 .648-.743zm-6-9.5a.75.75 0 0 1 .743.648l.007.102v6.688l.72-.718a.75.75 0 0 1 .976-.073l.084.073a.75.75 0 0 1 .073.976l-.073.084-2 2a.75.75 0 0 1-.976.073l-.084-.073-2-2a.75.75 0 0 1 .976-1.133l.084.073.72.719V2.5A.75.75 0 0 1 8 1.75",
        clipRule: "evenodd"
    }));
const Download_16 = SvgDownload16;
export { Download_16 as default };
