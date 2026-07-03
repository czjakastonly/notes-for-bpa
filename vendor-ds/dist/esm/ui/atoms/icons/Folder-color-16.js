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
const SvgFolderColor16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#A2C8F7",
        fillRule: "evenodd",
        d: "M0 1.4c0-.22.18-.4.4-.4h5.43a1 1 0 0 1 .86.491l.62 1.049a1 1 0 0 0 .86.491H15a1 1 0 0 1 1 1V13a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1z",
        clipRule: "evenodd"
    }));
const Folder_color_16 = SvgFolderColor16;
export { Folder_color_16 as default };
