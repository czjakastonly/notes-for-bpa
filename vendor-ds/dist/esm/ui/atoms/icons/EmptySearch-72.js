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
const SvgEmptySearch72 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 72,
        height: 72,
        fill: "none",
        viewBox: "0 0 72 72"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        d: "M57.446 58.86a8 8 0 1 1 1.288-1.54l3.974 3.973a1 1 0 0 1-1.415 1.414zM29 22h14a1 1 0 1 1 0 2H29a1 1 0 1 1 0-2m0 7h14a1 1 0 1 1 0 2H29a1 1 0 1 1 0-2m0 7h14a1 1 0 1 1 0 2H29a1 1 0 1 1 0-2m0 7h10a1 1 0 1 1 0 2H29a1 1 0 1 1 0-2m10 12a1 1 0 1 1 0 2H19a1 1 0 0 1-1-1V12a1 1 0 0 1 1-1h34a1 1 0 0 1 1 1v28a1 1 0 1 1-2 0V13H20v42zm7-2a6 6 0 1 0 12 0 6 6 0 0 0-12 0"
    }));
const EmptySearch_72 = SvgEmptySearch72;
export { EmptySearch_72 as default };
