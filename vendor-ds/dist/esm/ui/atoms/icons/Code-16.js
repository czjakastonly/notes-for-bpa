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
const SvgCode16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M10.23 1.669a.75.75 0 1 0-1.46-.338l-3 13a.75.75 0 1 0 1.46.338zm-5.654 3.35a.75.75 0 0 1-.096 1.057L2.172 8 4.48 9.924a.75.75 0 0 1-.96 1.152l-3-2.5a.75.75 0 0 1 0-1.152l3-2.5a.75.75 0 0 1 1.056.096m6.848 0a.75.75 0 0 1 1.056-.095l3 2.5a.75.75 0 0 1 0 1.152l-3 2.5a.75.75 0 1 1-.96-1.152L13.829 8l-2.31-1.924a.75.75 0 0 1-.095-1.056",
        clipRule: "evenodd"
    }));
const Code_16 = SvgCode16;
export { Code_16 as default };
