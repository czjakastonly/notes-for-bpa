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
const SvgEmptyBasic72 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 72,
        height: 72,
        fill: "none",
        viewBox: "0 0 72 72"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#848296",
        d: "M22 19v36h28V19zm-1-2h30a1 1 0 0 1 1 1v38a1 1 0 0 1-1 1H21a1 1 0 0 1-1-1V18a1 1 0 0 1 1-1m8 12h14a1 1 0 0 1 0 2H29a1 1 0 0 1 0-2m0 7h14a1 1 0 0 1 0 2H29a1 1 0 0 1 0-2m0 7h14a1 1 0 0 1 0 2H29a1 1 0 0 1 0-2M50 3a1 1 0 0 1 2 0v6a1 1 0 0 1-2 0zm15.997 14c.554 0 1.003.448 1.003 1s-.45 1-1.003 1h-5.994A1 1 0 0 1 59 18c0-.552.45-1 1.003-1zM61.293 6.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 1 1-1.414-1.413z"
    }));
const EmptyBasic_72 = SvgEmptyBasic72;
export { EmptyBasic_72 as default };
