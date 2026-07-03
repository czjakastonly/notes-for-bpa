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
const SvgTextStyle16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        d: "M13.057 5.751h1.379V7.59H16v1.237h-1.564v3.828c0 .78.301 1.121.987 1.121.211 0 .32-.013.513-.034v1.224a4 4 0 0 1-.737.075c-1.533 0-2.142-.574-2.142-2.01V8.827H11.91V7.59h1.147zM6.825 15H5.177V2.49H.918V.908h10.166V2.49H6.825z"
    }));
const TextStyle_16 = SvgTextStyle16;
export { TextStyle_16 as default };
