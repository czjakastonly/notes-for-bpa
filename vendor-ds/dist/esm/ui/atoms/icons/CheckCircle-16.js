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
const SvgCheckCircle16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M2.52 2.52a7.75 7.75 0 1 1 10.96 10.96A7.75 7.75 0 0 1 2.52 2.52M8 1.75a6.25 6.25 0 1 0 0 12.5 6.25 6.25 0 0 0 0-12.5m3.46 3.658a.75.75 0 0 1 .132 1.052l-3.5 4.5a.75.75 0 0 1-1.122.07l-2.5-2.5a.75.75 0 0 1 1.06-1.06l1.9 1.899 2.978-3.83a.75.75 0 0 1 1.053-.131",
        clipRule: "evenodd"
    }));
const CheckCircle_16 = SvgCheckCircle16;
export { CheckCircle_16 as default };
