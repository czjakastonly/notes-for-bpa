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
const SvgGuidedResponse24 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none",
        viewBox: "0 0 24 24"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#706D84",
        d: "M8.5 2a.75.75 0 0 1 0 1.5H3.25a.75.75 0 0 0-.75.75v12a.75.75 0 0 0 .75.75h1.5a.75.75 0 0 1 .75.75v2.69l3.22-3.22.114-.094A.75.75 0 0 1 9.25 17h10.5a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 1 1.5 0v1.5a2.25 2.25 0 0 1-2.25 2.25H9.56l-4.28 4.28A.75.75 0 0 1 4 22.25V18.5h-.75A2.25 2.25 0 0 1 1 16.25v-12A2.25 2.25 0 0 1 3.25 2zm13.25-2c.966 0 1.75.784 1.75 1.75v8a1.75 1.75 0 0 1-1.75 1.75h-8A1.75 1.75 0 0 1 12 9.75v-8C12 .784 12.784 0 13.75 0zm-8 1.5a.25.25 0 0 0-.25.25v8c0 .138.112.25.25.25h8a.25.25 0 0 0 .25-.25v-8a.25.25 0 0 0-.25-.25zm6.5 5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1 0-1.5zm0-3a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1 0-1.5z"
    }));
const GuidedResponse_24 = SvgGuidedResponse24;
export { GuidedResponse_24 as default };
