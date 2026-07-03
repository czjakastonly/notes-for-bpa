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
const SvgDropoff16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M11.5 1.25a.75.75 0 0 1 .743.648L12.25 2v1a.75.75 0 0 1-1.493.102L10.75 3v-.251h-7.5v10.5h7.5V13a.75.75 0 0 1 .648-.743l.102-.007a.75.75 0 0 1 .743.648l.007.102v1a.75.75 0 0 1-.648.743l-.102.007h-9a.75.75 0 0 1-.743-.648L1.75 14V2a.75.75 0 0 1 .648-.743L2.5 1.25zm.41 4.122.088.067 2.25 2 .063.063.007.01a.8.8 0 0 1 .123.197l.04.122.014.083.005.088-.004.078-.01.064-.018.073-.03.08-.05.096-.077.105-.033.03-.03.033-2.25 2a.75.75 0 0 1-1.074-1.042l.078-.08.774-.689H6.5a.75.75 0 0 1-.102-1.493L6.5 7.25h5.277l-.775-.69a.749.749 0 0 1 .908-1.188",
        clipRule: "evenodd"
    }));
const Dropoff_16 = SvgDropoff16;
export { Dropoff_16 as default };
