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
const SvgClickableTrigger16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        d: "M1.617 1.617a1.25 1.25 0 0 0-.273 1.363L5.58 13.267c.16.388.503.67.914.752l.137.02c.366.03.731-.1.995-.364l1.252-1.253 1.962 1.961c.49.489 1.282.489 1.771.002l1.772-1.773c.235-.234.367-.553.367-.886l-.008-.141a1.25 1.25 0 0 0-.36-.745l-1.96-1.961 1.253-1.254a1.253 1.253 0 0 0-.409-2.045L2.981 1.344a1.25 1.25 0 0 0-1.364.273m1.339 1.339 9.397 3.869-1.522 1.523-.073.085a.75.75 0 0 0 .073.976l2.316 2.317-1.421 1.421-2.317-2.316-.084-.073a.75.75 0 0 0-.976.073l-1.524 1.522z"
    }));
const ClickableTrigger_16 = SvgClickableTrigger16;
export { ClickableTrigger_16 as default };
