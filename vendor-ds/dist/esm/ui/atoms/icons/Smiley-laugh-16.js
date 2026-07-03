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
const SvgSmileyLaugh16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("g", {
        clipPath: "url(#Smiley-laugh-16_svg__a)"
    }, /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M2.25 8a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0M8 .75a7.25 7.25 0 1 0 0 14.5A7.25 7.25 0 0 0 8 .75m-1.935 9.261a2.4 2.4 0 0 1-.218-.261h4.306a2.4 2.4 0 0 1-.218.261c-.37.382-.967.739-1.935.739s-1.565-.357-1.935-.739m5.087-1.761H4.848c-.457 0-.908.395-.834.949.063.471.357 1.219.973 1.855.64.663 1.623 1.196 3.013 1.196s2.372-.533 3.013-1.196c.616-.636.91-1.384.973-1.855.074-.554-.377-.949-.834-.949M6.5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2",
        clipRule: "evenodd"
    })), /*#__PURE__*/ createElement("defs", null, /*#__PURE__*/ createElement("clipPath", {
        id: "Smiley-laugh-16_svg__a"
    }, /*#__PURE__*/ createElement("path", {
        fill: "#fff",
        d: "M0 0h16v16H0z"
    }))));
const Smiley_laugh_16 = SvgSmileyLaugh16;
export { Smiley_laugh_16 as default };
