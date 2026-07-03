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
const SvgThumb16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M9.839 1.21a1.75 1.75 0 0 0-2.168.583v.002L4.82 5.832a.42.42 0 0 1-.34.177h-.77a1.33 1.33 0 0 0-1.253-.875H1.292a.75.75 0 1 0 0 1.5h1V13.3h-1a.75.75 0 0 0 0 1.5h1.166a1.334 1.334 0 0 0 1.333-1.285c1.442.713 2.336 1.094 3.195 1.277.812.172 1.597.164 2.733.152q.481-.007 1.06-.008c.952 0 1.722-.318 2.313-.898.567-.557.922-1.307 1.165-2.097l.017-.068 1.097-3.681.016-.062a1.917 1.917 0 0 0-1.841-2.414h-2.863a.417.417 0 0 1-.403-.523l.515-1.95v-.001A1.75 1.75 0 0 0 9.84 1.21M3.792 11.84c1.874.944 2.733 1.321 3.505 1.485.638.136 1.212.13 2.289.12.341-.004.733-.008 1.194-.008.584 0 .969-.181 1.261-.468.308-.302.561-.769.766-1.418l.014-.053L13.92 7.81l.014-.056a.417.417 0 0 0-.395-.537h-2.855A1.917 1.917 0 0 1 8.83 4.812l.514-1.95a.25.25 0 0 0-.445-.207l-.002.002-2.85 4.04a1.92 1.92 0 0 1-1.567.812h-.688z",
        clipRule: "evenodd"
    }));
const Thumb_16 = SvgThumb16;
export { Thumb_16 as default };
