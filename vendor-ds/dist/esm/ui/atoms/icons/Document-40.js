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
const SvgDocument40 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 40,
        height: 40,
        fill: "none",
        viewBox: "0 0 40 40"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        d: "M22.682 5.334a2.45 2.45 0 0 1 1.736.717l7.847 7.845h-.001a2.45 2.45 0 0 1 .717 1.733l-.01 16.589a2.45 2.45 0 0 1-2.448 2.448H8.783a2.45 2.45 0 0 1-2.449-2.45V7.783a2.45 2.45 0 0 1 2.45-2.449zM8.783 7.333a.45.45 0 0 0-.449.45v24.434c0 .248.201.449.45.449h21.739a.45.45 0 0 0 .449-.45l.01-16.187h-6.256a2.45 2.45 0 0 1-2.45-2.45V7.333zm15.493 6.246c0 .248.201.45.45.45h4.841l-5.29-5.292z"
    }));
const Document_40 = SvgDocument40;
export { Document_40 as default };
