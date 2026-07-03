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
const SvgShiftVertical16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "m8.696 1.397.084.073 2.5 2.5a.75.75 0 0 1-.976 1.133l-.084-.073L9 3.811v8.378l1.22-1.22a.75.75 0 0 1 .976-.072l.084.073a.75.75 0 0 1 .073.976l-.073.084-2.5 2.5a.75.75 0 0 1-.976.073l-.084-.073-2.5-2.5a.75.75 0 0 1 .976-1.133l.084.073 1.22 1.219V3.811l-1.22 1.22a.75.75 0 0 1-.976.072L5.22 5.03a.75.75 0 0 1-.073-.976l.073-.084 2.5-2.5a.75.75 0 0 1 .976-.073",
        clipRule: "evenodd"
    }));
const ShiftVertical_16 = SvgShiftVertical16;
export { ShiftVertical_16 as default };
