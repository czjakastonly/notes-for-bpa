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
const SvgFolderOpen16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "m1.98 6.5 1.494 6h9.128l1.4-4.5H7.655a1 1 0 0 1-.832-.445L6.12 6.5zm-1.532.052A1.25 1.25 0 0 1 1.66 5H6.24c.426 0 .824.213 1.06.568l.622.932h6.42a1.25 1.25 0 0 1 1.193 1.621l-1.555 5a1.25 1.25 0 0 1-1.194.879H3.278a1.25 1.25 0 0 1-1.213-.948zM1 2.75A.75.75 0 0 1 1.75 2h11.5c.966 0 1.75.784 1.75 1.75v.5a.75.75 0 0 1-1.5 0v-.5a.25.25 0 0 0-.25-.25H1.75A.75.75 0 0 1 1 2.75",
        clipRule: "evenodd"
    }));
const FolderOpen_16 = SvgFolderOpen16;
export { FolderOpen_16 as default };
