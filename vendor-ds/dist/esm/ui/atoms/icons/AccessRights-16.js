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
const SvgAccessRights16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#5D6169",
        fillRule: "evenodd",
        d: "M4 4c1.953 0 3.579 1.4 3.93 3.25h7.32a.75.75 0 0 1 .102 1.493l-.102.007H15v1.75a.75.75 0 0 1-1.493.102L13.5 10.5V8.75h-1v.75a.75.75 0 0 1-1.493.102L11 9.5v-.75H7.93A4.001 4.001 0 0 1 0 8a4 4 0 0 1 4-4m0 1.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5",
        clipRule: "evenodd"
    }));
const AccessRights_16 = SvgAccessRights16;
export { AccessRights_16 as default };
