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
const SvgOutdent16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M14.75 2.75A.75.75 0 0 0 14 2H2l-.102.007A.75.75 0 0 0 2 3.5h12l.102-.007a.75.75 0 0 0 .648-.743M4.992 5.91A.5.5 0 0 0 4.2 5.6l-2.667 2-.067.06a.5.5 0 0 0 .067.74l2.667 2 .077.047A.5.5 0 0 0 5 10V6zM14 9a.75.75 0 0 1 .102 1.493L14 10.5H8a.75.75 0 0 1-.102-1.493L8 9zm0 3.5a.75.75 0 0 1 .102 1.493L14 14H2a.75.75 0 0 1-.102-1.493L2 12.5zm0-7a.75.75 0 0 1 .102 1.493L14 7H8a.75.75 0 0 1-.102-1.493L8 5.5z",
        clipRule: "evenodd"
    }));
const Outdent_16 = SvgOutdent16;
export { Outdent_16 as default };
