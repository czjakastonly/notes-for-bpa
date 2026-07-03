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
const SvgEmptyUrls72 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 72,
        height: 72,
        fill: "none",
        viewBox: "0 0 72 72"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M70.707 19.68a1 1 0 0 1-.707.293h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 .707 1.707m-15-16.387A1 1 0 0 1 56 4v5.973a1 1 0 0 1-2 0V4a1 1 0 0 1 1.707-.707m11.224 5.062a1 1 0 0 1-.224.325l-4.001 4a1 1 0 1 1-1.413-1.414l4-4a1 1 0 0 1 1.638 1.09M36.9 13.973a25.1 25.1 0 0 0-9.617 1.9 1 1 0 0 1-.764-1.848 27.1 27.1 0 0 1 10.381-2.052c14.964 0 27.101 12.084 27.101 27 0 14.915-12.137 27-27.1 27a27.1 27.1 0 0 1-12.355-2.963 1 1 0 1 1 .91-1.78A25.1 25.1 0 0 0 36.9 63.972q1.122 0 2.22-.097a1 1 0 0 1 .176-.478c2.233-3.182 4.7-8.52 5.926-15.425H38a1 1 0 0 1 0-2h7.534c.297-2.188.466-4.515.466-6.966a35 35 0 0 0-.736-7.034H38a1 1 0 0 1 0-2h6.802c-1.761-6.836-5.082-12.589-7.333-15.994q-.285-.006-.57-.006m4.708 49.56c2.239-3.534 4.507-8.881 5.644-15.56H60a1 1 0 0 0 .348-.063 25.12 25.12 0 0 1-18.74 15.624M62 38.974c0 2.606-.4 5.12-1.144 7.483a1 1 0 0 0-.856-.483H47.551c.287-2.198.449-4.525.449-6.966a37 37 0 0 0-.697-7.034H60a1 1 0 0 0 .856-.483A24.9 24.9 0 0 1 62 38.973m-1.652-8.938a1 1 0 0 0-.348-.062H46.864c-1.608-6.56-4.606-12.158-6.901-15.816 9.358 1.134 17.124 7.397 20.385 15.878M10 36.973c0-5.482 4.659-10 10.5-10s10.5 4.518 10.5 10c0 5.481-4.659 10-10.5 10s-10.5-4.519-10.5-10m10.5-12c-6.861 0-12.5 5.33-12.5 12 0 6.669 5.639 12 12.5 12s12.5-5.331 12.5-12c0-6.67-5.639-12-12.5-12m-8.77 21.816a1 1 0 0 1-.046 1.413l-8 7.5a1 1 0 0 1-1.368-1.459l8-7.5a1 1 0 0 1 1.413.046",
        clipRule: "evenodd"
    }));
const EmptyUrls_72 = SvgEmptyUrls72;
export { EmptyUrls_72 as default };
