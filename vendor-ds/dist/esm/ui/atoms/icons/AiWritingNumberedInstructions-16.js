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
const SvgAiWritingNumberedInstructions16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#848296",
        d: "M4.8 9.5c.11 0 .2.09.2.2v1.216a.2.2 0 0 1-.063.146L2.99 12.905a.2.2 0 0 0 .138.345H4.8c.11 0 .2.09.2.2v.85a.2.2 0 0 1-.2.2H1.2a.2.2 0 0 1-.2-.2v-1.218a.2.2 0 0 1 .062-.145l1.944-1.841a.2.2 0 0 0-.138-.346H1.2a.2.2 0 0 1-.2-.2V9.7c0-.11.09-.2.2-.2zm7.45 3.25a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1 0-1.5zm3-3a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1 0-1.5zm-11.7-8.5c.11 0 .2.09.2.2v4.6a.2.2 0 0 1-.2.2H2.7a.2.2 0 0 1-.2-.2V2.7a.2.2 0 0 0-.2-.2h-.85a.2.2 0 0 1-.2-.2v-.85c0-.11.09-.2.2-.2zm8.777 3.504a.75.75 0 0 1 0 1.492l-.077.004h-5a.75.75 0 0 1 0-1.5h5zm3-3a.75.75 0 0 1 0 1.492l-.077.004h-8a.75.75 0 0 1 0-1.5h8z"
    }));
const AiWritingNumberedInstructions_16 = SvgAiWritingNumberedInstructions16;
export { AiWritingNumberedInstructions_16 as default };
