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
const SvgDiagram16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#848296",
        fillRule: "evenodd",
        d: "M15.494 1.696A.804.804 0 0 0 14.699 1h-2.996l-.108.008a.805.805 0 0 0-.693.798l.007.11a.8.8 0 0 0 .794.696l1.135-.003-3.513 3.573-2.593-2.61-.114-.101a1.386 1.386 0 0 0-1.853.1L.735 7.626l-.078.09a.81.81 0 0 0 .078 1.049l.09.078a.8.8 0 0 0 1.042-.078l3.88-3.902 2.595 2.612.118.105a1.39 1.39 0 0 0 1.85-.105l3.588-3.648v1l.007.11a.8.8 0 0 0 .794.697.803.803 0 0 0 .801-.806V1.806zM5.25 12V9a.75.75 0 0 1 1.5 0v6a.75.75 0 0 1-1.5 0zm8.5 0V9a.75.75 0 0 1 1.5 0v6a.75.75 0 0 1-1.5 0zm-13 0v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0m8.75 1v-2a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-1.5 0z",
        clipRule: "evenodd"
    }));
const Diagram_16 = SvgDiagram16;
export { Diagram_16 as default };
