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
const SvgUnknownDevice16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#706D84",
        fillRule: "evenodd",
        d: "M3.25 1.934C3.25.956 4.083.25 5 .25h7c.917 0 1.75.706 1.75 1.684v12.132c0 .978-.833 1.684-1.75 1.684H5c-.917 0-1.75-.706-1.75-1.684V1.934m1.5 10.816v1.316c0 .034.013.073.055.112s.11.072.195.072h7a.28.28 0 0 0 .195-.072.15.15 0 0 0 .055-.112V12.75zm7.5-1.5h-7.5V1.934c0-.034.013-.073.055-.112A.28.28 0 0 1 5 1.75h7c.085 0 .153.032.195.072a.15.15 0 0 1 .055.112zM8.711 3.012l-.155-.01c-1.132-.04-2.159.691-2.254 1.935a.6.6 0 0 0 1.196.092l.016-.117c.096-.488.546-.758 1.08-.706.442.044.759.43.699.806-.034.21-.135.368-.315.523l-.465.345c-.457.39-.712.782-.712 1.42a.6.6 0 0 0 1.2 0c0-.208.075-.323.292-.508l.196-.14c.095-.068.203-.149.272-.208.38-.327.634-.725.717-1.243.17-1.074-.651-2.079-1.767-2.19m.452 6.154a.77.77 0 1 0 0 .21l.007-.105z",
        clipRule: "evenodd"
    }));
const Unknown_device_16 = SvgUnknownDevice16;
export { Unknown_device_16 as default };
