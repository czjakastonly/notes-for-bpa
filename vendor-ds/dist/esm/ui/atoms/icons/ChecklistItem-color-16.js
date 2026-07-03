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
const SvgChecklistItemColor16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#FF809E",
        fillRule: "evenodd",
        d: "M14.303 8a.697.697 0 0 1 1.394 0A7.698 7.698 0 1 1 8 .303a.697.697 0 1 1 0 1.394A6.302 6.302 0 1 0 14.303 8m-1.878-5.394a.697.697 0 0 1 1.15.788l-5.488 8a.697.697 0 0 1-1.165-.023l-2.512-4a.697.697 0 0 1 1.18-.742l1.948 3.1z",
        clipRule: "evenodd"
    }));
const ChecklistItem_color_16 = SvgChecklistItemColor16;
export { ChecklistItem_color_16 as default };
