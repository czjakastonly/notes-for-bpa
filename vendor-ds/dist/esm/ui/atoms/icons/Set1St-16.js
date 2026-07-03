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
const SvgSet1St16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M4.75 10a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm-.5 1.5h-2v2h2zm6.649-9.917a.26.26 0 0 1 .101.2V3.75a4.75 4.75 0 0 1 .217 9.495l-.237.005h-1.5a.75.75 0 0 1 0-1.5H11a3.25 3.25 0 0 0 .184-6.495L11 5.25v1.967c0 .156-.155.283-.345.283a.4.4 0 0 1-.244-.083L7.1 4.7a.25.25 0 0 1 0-.4l3.31-2.717a.4.4 0 0 1 .488 0M4 1.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-.5A.5.5 0 0 1 3 7V3.75H2a.5.5 0 0 1-.5-.5v-.5a.5.5 0 0 1 .5-.5h1V2a.5.5 0 0 1 .5-.5z",
        clipRule: "evenodd"
    }));
const Set1St_16 = SvgSet1St16;
export { Set1St_16 as default };
