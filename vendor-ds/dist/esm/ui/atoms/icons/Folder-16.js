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
const SvgFolder16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M8.175 4h6.075c.69 0 1.25.56 1.25 1.25v7.5c0 .69-.56 1.25-1.25 1.25H1.75C1.06 14 .5 13.44.5 12.75v-9.5C.5 2.56 1.06 2 1.75 2h4.217c.439 0 .846.23 1.072.607zM2 3.5v9h12v-7H8.033c-.439 0-.846-.23-1.072-.607L5.825 3.5z",
        clipRule: "evenodd"
    }));
const Folder_16 = SvgFolder16;
export { Folder_16 as default };
