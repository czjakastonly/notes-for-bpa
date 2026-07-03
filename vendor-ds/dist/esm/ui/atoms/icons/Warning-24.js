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
const SvgWarning24 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none",
        viewBox: "0 0 24 24"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M11.344 1.886a.75.75 0 0 1 1.312 0l10 18A.75.75 0 0 1 22 21H2a.75.75 0 0 1-.656-1.114zM12 3.794 3.275 19.5h17.45zM12.75 14a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 1.5 0zM11 17a1 1 0 1 1 2 0 1 1 0 0 1-2 0",
        clipRule: "evenodd"
    }));
const Warning_24 = SvgWarning24;
export { Warning_24 as default };
