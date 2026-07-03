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
const SvgUnlink16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#848296",
        fillRule: "evenodd",
        d: "M3.423 7.484a.75.75 0 0 1 0 1.06l-.622.622a2.76 2.76 0 0 0 0 3.889 2.763 2.763 0 0 0 3.89 0l.62-.622a.75.75 0 0 1 1.061 1.06l-.621.623a4.263 4.263 0 0 1-6.01 0 4.26 4.26 0 0 1 0-6.011l.622-.621a.75.75 0 0 1 1.06 0m.023-5.087.084.073 10 10a.75.75 0 0 1-.976 1.133l-.084-.072-10-10a.75.75 0 0 1 .976-1.134m10.669-.656a4.26 4.26 0 0 1 0 6.01l-.622.621a.75.75 0 1 1-1.06-1.06l.621-.621a2.76 2.76 0 0 0 0-3.89 2.763 2.763 0 0 0-3.889 0l-.62.622a.75.75 0 0 1-1.062-1.06l.622-.623a4.263 4.263 0 0 1 6.01 0",
        clipRule: "evenodd"
    }));
const Unlink_16 = SvgUnlink16;
export { Unlink_16 as default };
