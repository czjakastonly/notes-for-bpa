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
const SvgLink16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M8.811 10.933a.75.75 0 0 1 1.061 1.06l-2.121 2.122a4.263 4.263 0 0 1-6.01 0 4.26 4.26 0 0 1 0-6.01l2.122-2.122a.75.75 0 0 1 1.06 1.061L2.801 9.165a2.76 2.76 0 0 0 0 3.89 2.763 2.763 0 0 0 3.89 0zm-1.767-6.01a.75.75 0 0 1-1.06-1.06l2.12-2.123a4.263 4.263 0 0 1 6.011 0 4.26 4.26 0 0 1 0 6.011l-2.122 2.121a.75.75 0 0 1-1.06-1.06l2.121-2.122a2.76 2.76 0 0 0 0-3.889 2.763 2.763 0 0 0-3.889 0zm1.414 1.414a.75.75 0 0 1 1.06 1.06l-2.827 2.83A.75.75 0 1 1 5.63 9.165l2.828-2.829z"
    }));
const Link_16 = SvgLink16;
export { Link_16 as default };
