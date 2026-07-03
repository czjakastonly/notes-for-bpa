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
const SvgTranslate16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#8B8E95",
        fillRule: "evenodd",
        d: "M5.75 1a.75.75 0 0 0-1.5 0v1.25H1a.75.75 0 0 0 0 1.5h1.29c.331 1.28 1.029 2.729 1.99 4.027-.955.93-2.009 1.675-3.017 2.011a.75.75 0 1 0 .474 1.423c1.254-.418 2.466-1.28 3.508-2.28.406.427.843.822 1.305 1.169a.75.75 0 1 0 .9-1.2 9 9 0 0 1-1.172-1.061C7.465 6.459 8.4 4.9 8.71 3.75H10a.75.75 0 0 0 0-1.5H5.75zm-.433 5.651C6.19 5.6 6.83 4.532 7.132 3.75H3.85c.293.93.802 1.954 1.467 2.901m3.574 6.091L7.68 15.32a.75.75 0 1 1-1.358-.638l4-8.5a.75.75 0 0 1 1.358 0l4 8.5a.75.75 0 1 1-1.358.638l-1.212-2.577a1 1 0 0 1-.109.008H9a1 1 0 0 1-.109-.008m3.515-1.492H9.594L11 8.261z",
        clipRule: "evenodd"
    }));
const Translate_16 = SvgTranslate16;
export { Translate_16 as default };
