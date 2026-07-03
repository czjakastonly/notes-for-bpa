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
const SvgExternalSources56 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 56,
        height: 40,
        fill: "none",
        viewBox: "0 0 56 40"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#706D84",
        d: "M41.538 1c1.101 0 1.994.893 1.994 1.994v36.083l-.004.077a.74.74 0 0 1-.215.453.75.75 0 0 1-.455.216l-.076.004-25.922.001c-1.214 0-2.204-.414-2.884-1.153-.588-.638-.895-1.463-.962-2.333L13 35.967V5.897A4.9 4.9 0 0 1 17.898 1zM16.552 33.62c-.69.059-1.161.317-1.473.655-.365.397-.579.98-.579 1.692s.214 1.295.58 1.691c.354.385.916.667 1.77.67h25.182v-4.722H16.86zm0-6.222c-.69.06-1.161.319-1.473.657-.365.396-.579.979-.579 1.691s.214 1.295.58 1.692c.355.386.921.668 1.78.668h25.172v-4.72H16.86zM17.898 2.5A3.4 3.4 0 0 0 14.5 5.897v20.68c.63-.447 1.429-.691 2.36-.691h1.63V2.79q0-.156.058-.291zm2.032 0q.058.136.06.291v23.095h22.042V2.994a.495.495 0 0 0-.494-.494zm16.276 6.795a.75.75 0 0 1 0 1.5H24.827a.75.75 0 0 1 0-1.5z"
    }));
const ExternalSources_56 = SvgExternalSources56;
export { ExternalSources_56 as default };
