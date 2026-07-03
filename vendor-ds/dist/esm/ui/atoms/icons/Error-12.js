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
const SvgError12 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 12,
        height: 12,
        fill: "none",
        viewBox: "0 0 12 12"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        d: "M12 3.429V8.57L8.571 12H3.43L0 8.571V3.43L3.429 0H8.57zm-10.5.62V7.95l2.55 2.55h3.9l2.55-2.55v-3.9L7.95 1.5h-3.9zM6 7.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m0-5a.75.75 0 0 1 .75.75V6a.75.75 0 0 1-1.5 0V3.5A.75.75 0 0 1 6 2.75"
    }));
const Error_12 = SvgError12;
export { Error_12 as default };
