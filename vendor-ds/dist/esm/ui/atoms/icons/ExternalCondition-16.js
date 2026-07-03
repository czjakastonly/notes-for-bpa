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
const SvgExternalCondition16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M4 .75a.75.75 0 0 1 .75.75v2.854c.916.259 1.637.98 1.896 1.896h4.855c.692 0 1.249.561 1.249 1.25v2.854a2.751 2.751 0 1 1-1.5 0V7.75H6.647A2.76 2.76 0 0 1 4.75 9.646V15a.75.75 0 0 1-1.5 0V9.646a2.751 2.751 0 0 1 0-5.292V1.5A.75.75 0 0 1 4 .75m8 11a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m-8-6a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5",
        clipRule: "evenodd"
    }));
const ExternalCondition_16 = SvgExternalCondition16;
export { ExternalCondition_16 as default };
