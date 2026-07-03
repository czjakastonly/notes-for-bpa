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
const SvgBrowserVersion16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M2.437.75H12.81a1.695 1.695 0 0 1 1.69 1.69v2.998a.75.75 0 0 1-1.5 0V4.75H2.25v6.744a.195.195 0 0 0 .194.194H5a.75.75 0 0 1 0 1.5H2.44a1.695 1.695 0 0 1-1.69-1.69V2.435A1.69 1.69 0 0 1 2.435.75zm-.187 2.5H13v-.806a.195.195 0 0 0-.194-.194H2.44a.19.19 0 0 0-.189.189zm8.452 2.81a.85.85 0 0 1 .597 0l3.9 1.463c.31.117.522.401.548.727h.003v5.361a.95.95 0 0 1-.616.89l-3.8 1.425a.95.95 0 0 1-.668 0l-3.8-1.425a.95.95 0 0 1-.616-.89V8.25h.003a.85.85 0 0 1 .549-.727zm3.548 3.772v3.398l-2.5.938V10.77zm-4 .938-2.5-.938v3.398l2.5.938zM11 7.55 8.47 8.5l2.53.949 2.53-.949z",
        clipRule: "evenodd"
    }));
const BrowserVersion_16 = SvgBrowserVersion16;
export { BrowserVersion_16 as default };
