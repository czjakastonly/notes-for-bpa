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
const SvgChart16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 20,
        fill: "none",
        viewBox: "0 0 16 20"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#848296",
        fillRule: "evenodd",
        d: "M14.502 4.75a.75.75 0 0 1 .744.648l.006.102v2.812a.75.75 0 0 1-1.493.102l-.007-.102V7.38l-4.439 4.476a1.304 1.304 0 0 1-1.733.098l-.11-.098-1.287-1.288L1.47 15.28a.75.75 0 0 1-.976.073L.41 15.28a.75.75 0 0 1-.073-.976l.073-.084 4.854-4.853a1.303 1.303 0 0 1 1.735-.094l.106.095 1.285 1.286 4.37-4.406-1.063.002a.75.75 0 0 1-.743-.648l-.007-.102a.75.75 0 0 1 .649-.743l.101-.007h2.805",
        clipRule: "evenodd"
    }));
const Chart_16 = SvgChart16;
export { Chart_16 as default };
