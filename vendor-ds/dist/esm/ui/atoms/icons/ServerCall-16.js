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
const SvgServerCall16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none"
    }, props), /*#__PURE__*/ createElement("g", {
        clipPath: "url(#ServerCall-16_svg__a)"
    }, /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M5.542.251a5.26 5.26 0 0 1 2.473.556c.77.384 1.438.95 1.953 1.65.318.433.573.91.757 1.414a3.7 3.7 0 0 1 2.26-.074c.538.155 1.034.43 1.454.803s.753.837.979 1.355a4 4 0 0 1-.04 3.287 3.9 3.9 0 0 1-1.011 1.33.75.75 0 0 1-.97-1.144c.26-.22.473-.499.621-.818a2.5 2.5 0 0 0 .024-2.056 2.4 2.4 0 0 0-.6-.833 2.24 2.24 0 0 0-.871-.482 2.2 2.2 0 0 0-.977-.053 2.2 2.2 0 0 0-.91.386.75.75 0 0 1-1.177-.477 4.2 4.2 0 0 0-.747-1.749 3.95 3.95 0 0 0-1.415-1.197 3.76 3.76 0 0 0-3.52.08 4 4 0 0 0-1.363 1.263 4.2 4.2 0 0 0-.673 1.783 4.3 4.3 0 0 0 .497 2.644.75.75 0 1 1-1.31.732 5.8 5.8 0 0 1-.674-3.577c.117-.868.43-1.696.914-2.418A5.5 5.5 0 0 1 3.096.919 5.3 5.3 0 0 1 5.542.251M11.75 13.19l.72-.72a.75.75 0 1 1 1.06 1.061l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72V9a.75.75 0 0 1 1.5 0zM5.53 8.47a.8.8 0 0 0-.243-.162L5 8.25a.75.75 0 0 0-.527.216l-.004.004-2 2a.75.75 0 1 0 1.061 1.06l.72-.72V15a.75.75 0 0 0 1.5 0v-4.19l.72.72a.75.75 0 0 0 1.06-1.06z",
        clipRule: "evenodd"
    })), /*#__PURE__*/ createElement("defs", null, /*#__PURE__*/ createElement("clipPath", {
        id: "ServerCall-16_svg__a"
    }, /*#__PURE__*/ createElement("path", {
        fill: "#fff",
        d: "M0 0h16v16H0z"
    }))));
const ServerCall_16 = SvgServerCall16;
export { ServerCall_16 as default };
