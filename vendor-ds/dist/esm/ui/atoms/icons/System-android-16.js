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
const SvgSystemAndroid16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M3.17.665A.75.75 0 0 1 4.178 1L5.19 3.025A7.7 7.7 0 0 1 8 2.5a7.7 7.7 0 0 1 2.81.525L11.823 1a.75.75 0 0 1 1.342.67l-1.016 2.033a7.74 7.74 0 0 1 3.601 6.547v.8a.95.95 0 0 1-.95.95H1.2a.95.95 0 0 1-.95-.95v-.8a7.74 7.74 0 0 1 3.601-6.547L2.835 1.67A.75.75 0 0 1 3.171.665M1.75 10.25a6.25 6.25 0 0 1 12.5 0v.25H1.75zM1 13.5A.75.75 0 0 0 1 15h14a.75.75 0 0 0 0-1.5zM6 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2",
        clipRule: "evenodd"
    }));
const System_android_16 = SvgSystemAndroid16;
export { System_android_16 as default };
