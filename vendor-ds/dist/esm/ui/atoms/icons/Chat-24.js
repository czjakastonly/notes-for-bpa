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
const SvgChat24 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none",
        viewBox: "0 0 24 24"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M19.5 4.8h-15c-1.2 0-2.3 1-2.3 2.2v10.2c.1 1.1 1.1 2 2.3 2h6.8l4.5 3.3c.2.2.4.3.7.3h.1c.7-.1 1.1-.6 1.1-1.3v-2.3h1.8c1.2 0 2.3-1 2.3-2.2V7c0-1.2-1-2.3-2.3-2.3zm-15 1.5h15c.4 0 .8.3.8.7v10c0 .4-.4.8-.8.8h-2.6c-.4 0-.6.3-.6.7V21l-4.5-3a.7.7 0 0 0-.4-.1h-7a.8.8 0 0 1-.8-.8V7c0-.4.4-.8.8-.8z",
        clipRule: "evenodd"
    }));
const Chat_24 = SvgChat24;
export { Chat_24 as default };
