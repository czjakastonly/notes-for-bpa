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
const SvgWidgetFormatLight16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#FF809E",
        d: "M3.334 2.667C3.334 2.298 3.632 2 4 2h7.667c.368 0 .667.298.667.667v10.666a.667.667 0 0 1-.667.667H4a.667.667 0 0 1-.667-.667z",
        opacity: 0.25
    }), /*#__PURE__*/ createElement("path", {
        fill: "#FF809E",
        fillRule: "evenodd",
        d: "m3.608 13.873.395-.542-.542.394a.66.66 0 0 1-.127-.392v-1.422h1V13h1.2v1H4a.66.66 0 0 1-.392-.127m6.525.127v-1h1.2v-1.089h1v1.422a.66.66 0 0 1-.127.392l-.542-.394.395.542a.66.66 0 0 1-.392.127zm2.2-9.911h-1V3h-1.2V2h1.534c.146 0 .282.047.392.127l-.395.542.542-.394c.08.11.128.245.128.392zM5.534 2H4a.66.66 0 0 0-.392.127l.395.542-.542-.394a.66.66 0 0 0-.127.392v1.422h1V3h1.2zm-2.2 9.2h1V8.356h-1zm0-3.556h1V4.8h-1zM6.3 2v1h3.067V2zm6.034 2.8h-1v2.844h1zm0 3.556h-1V11.2h1zM9.367 14v-1H6.3v1z",
        clipRule: "evenodd"
    }));
const WidgetFormatLight_16 = SvgWidgetFormatLight16;
export { WidgetFormatLight_16 as default };
