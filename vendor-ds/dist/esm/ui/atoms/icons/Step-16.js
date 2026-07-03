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
const SvgStep16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M3.2 11.6a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4m10.2.3a.9.9 0 0 1 .122 1.792l-.122.008h-6a.9.9 0 0 1-.122-1.792L7.4 11.9zm-.6-5.1a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4m-4.2.3a.9.9 0 0 1 .122 1.792L8.6 8.9h-6a.9.9 0 0 1-.122-1.792L2.6 7.1zM3.2 2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4m10.2.3a.9.9 0 0 1 .122 1.792L13.4 4.1h-6a.9.9 0 0 1-.122-1.792L7.4 2.3z",
        clipRule: "evenodd"
    }));
const Step_16 = SvgStep16;
export { Step_16 as default };
