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
const SvgAiSources56 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 56,
        height: 40,
        fill: "none",
        viewBox: "0 0 56 40"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#706D84",
        d: "M37 16a2 2 0 0 1 .735 3.858 1 1 0 0 1 .015.142v2.25H42A4.75 4.75 0 0 1 46.75 27v6A4.75 4.75 0 0 1 42 37.75H32A4.75 4.75 0 0 1 27.25 33v-6A4.75 4.75 0 0 1 32 22.25h4.25V20q0-.073.014-.142A1.998 1.998 0 0 1 37 16m-5 7.75A3.25 3.25 0 0 0 28.75 27v6A3.25 3.25 0 0 0 32 36.25h10A3.25 3.25 0 0 0 45.25 33v-6A3.25 3.25 0 0 0 42 23.75zm2 4.5a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V29a.75.75 0 0 1 .75-.75m6 0a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V29a.75.75 0 0 1 .75-.75m2.204-25.732C44.021 2.32 45.5 3.89 45.5 5.6v9.333a.75.75 0 0 1-1.5 0V5.6c0-.942-.829-1.694-1.657-1.59l-.057.005c-5.156.245-8.914 1.43-11.356 2.8-1.223.687-2.102 1.41-2.664 2.07-.576.676-.766 1.216-.766 1.548V16.6a.75.75 0 0 1-1.5 0v-6.167c0-.332-.19-.872-.766-1.547-.562-.66-1.44-1.384-2.664-2.07-2.442-1.37-6.2-2.556-11.356-2.801l-.057-.005C10.33 3.906 9.5 4.658 9.5 5.6v21.333c0 .81.53 1.493 1.267 1.575l.15.008.055.002c4.563.338 8.134 1.185 10.875 2.213a.75.75 0 0 1-.527 1.404c-2.59-.972-6.016-1.792-10.448-2.121C9.048 29.988 8 28.389 8 26.933V5.6c0-1.71 1.478-3.279 3.295-3.082 5.338.255 9.329 1.486 12.01 2.99 1.339.751 2.367 1.58 3.07 2.404q.203.241.375.488a7 7 0 0 1 .375-.488c.703-.824 1.731-1.653 3.07-2.404 2.681-1.504 6.671-2.735 12.01-2.99"
    }));
const AISources_56 = SvgAiSources56;
export { AISources_56 as default };
