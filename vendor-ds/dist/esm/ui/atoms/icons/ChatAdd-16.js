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
const SvgChatAdd16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#5D6169",
        fillRule: "evenodd",
        d: "M2.25.75v1.5H.75a.75.75 0 0 0 0 1.5h1.5v1.5a.75.75 0 0 0 1.5 0v-1.5h1.5a.75.75 0 0 0 0-1.5h-1.5V.75a.75.75 0 0 0-1.5 0m-1 8.75v1l.005.154A2.25 2.25 0 0 0 3.5 12.75h3.722l2.465 2.112c.226.194.515.3.813.3l.128-.006a1.25 1.25 0 0 0 1.122-1.243V12.75h1.75a2.25 2.25 0 0 0 2.25-2.25v-6a2.25 2.25 0 0 0-2.25-2.25H9c-1 0-1 1.5 0 1.5h4.5a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75H11l-.102.007a.75.75 0 0 0-.648.743v1.37l-2.262-1.94a.75.75 0 0 0-.488-.18h-4a.75.75 0 0 1-.75-.75v-1c0-1-1.5-1-1.5 0",
        clipRule: "evenodd"
    }));
const ChatAdd_16 = SvgChatAdd16;
export { ChatAdd_16 as default };
