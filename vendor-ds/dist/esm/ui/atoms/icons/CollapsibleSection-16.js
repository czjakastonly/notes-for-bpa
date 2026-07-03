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
const SvgCollapsibleSection16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M1.993 1.933A.75.75 0 1 0 .907 2.967l1.903 2a.75.75 0 0 0 1.086 0l1.904-2a.75.75 0 0 0-1.087-1.034l-1.36 1.429zm6.32 1.517a.75.75 0 0 1 .75-.75h5.71a.75.75 0 0 1 0 1.5h-5.71a.75.75 0 0 1-.75-.75M1.45 7.7a.75.75 0 1 0 0 1.5h13.323a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h13.323a.75.75 0 0 0 0-1.5z",
        clipRule: "evenodd"
    }));
const CollapsibleSection_16 = SvgCollapsibleSection16;
export { CollapsibleSection_16 as default };
