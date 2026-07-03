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
const SvgTarget16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M13.485.86a.75.75 0 0 0-1.262-.395l-2.34 2.3a.75.75 0 0 0-.215.422l-.373 2.457L6.47 8.47a.75.75 0 0 0 1.06 1.06l2.826-2.825 2.457-.373a.75.75 0 0 0 .423-.215l2.299-2.34a.75.75 0 0 0-.394-1.262l-1.39-.266zm-2.591 4.246.22-1.447 1.161-1.142.098.514a.75.75 0 0 0 .596.596l.514.098-1.142 1.162zM8.082 2.78A5.75 5.75 0 1 0 13.25 8.5a.75.75 0 0 1 1.5 0 7.249 7.249 0 1 1-6.516-7.213.75.75 0 1 1-.152 1.493M7.51 5.75a.75.75 0 0 0 0-1.5 4.27 4.27 0 0 0-2.473.79 4.238 4.238 0 0 0-.149 6.809 4.27 4.27 0 0 0 6.588-1.787c.136-.342.226-.7.269-1.061a.75.75 0 0 0-1.49-.178 2.74 2.74 0 0 1-1.24 1.984 2.77 2.77 0 0 1-3.205-.141 2.738 2.738 0 0 1 .096-4.403A2.77 2.77 0 0 1 7.51 5.75",
        clipRule: "evenodd"
    }));
const Target_16 = SvgTarget16;
export { Target_16 as default };
