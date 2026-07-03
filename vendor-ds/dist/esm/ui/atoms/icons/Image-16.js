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
const SvgImage16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M2.75 2.5a.25.25 0 0 0-.25.25v7.69l1.804-1.805c.34-.34.87-.405 1.283-.158l1.756 1.054L9.735 6.74a1.05 1.05 0 0 1 1.48-.114L13.5 8.584V2.75a.25.25 0 0 0-.25-.25zm10.75 8.06-2.919-2.502-2.347 2.738a1.05 1.05 0 0 1-1.337.217l.386-.643-.386.643-1.78-1.069L2.53 12.53l-.03.03v.69c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 13.25 15H2.75A1.75 1.75 0 0 1 1 13.25zm2.75 2.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0",
        clipRule: "evenodd"
    }));
const Image_16 = SvgImage16;
export { Image_16 as default };
