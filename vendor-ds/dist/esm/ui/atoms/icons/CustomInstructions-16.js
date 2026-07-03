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
const SvgCustomInstructions16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none"
    }, props), /*#__PURE__*/ createElement("g", {
        clipPath: "url(#CustomInstructions-16_svg__a)"
    }, /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        d: "M8.272.276c.27.054.516.192.725.401l6.327 6.326-.34.34.34-.339.002.001.002.003.005.005.013.014a2 2 0 0 1 .123.151c.066.092.15.232.21.41.06.182.099.42.046.684q-.061.304-.258.561l-.143.164-6.327 6.327-.53-.53.53.53-.001.002q-.002 0-.003.002l-.005.005-.014.013a1.3 1.3 0 0 1-.151.123c-.092.066-.232.15-.41.21-.182.06-.42.099-.684.046a1.4 1.4 0 0 1-.562-.258l-.164-.143L.677 8.997l.53-.53-.53.53-.002-.001-.002-.003-.006-.005-.012-.014a1.4 1.4 0 0 1-.123-.151 1.6 1.6 0 0 1-.21-.41 1.33 1.33 0 0 1-.046-.684c.054-.27.192-.516.401-.726L7.003.677l.53.53-.529-.53.001-.002q.002 0 .003-.002l.005-.006.014-.012a1.4 1.4 0 0 1 .151-.123c.092-.066.232-.15.41-.21a1.33 1.33 0 0 1 .684-.046M1.802 8 8 14.2 14.2 8 8 1.801l-6.199 6.2ZM8.47 4.97a.75.75 0 0 1 1.004-.052l.057.052 2 2 .051.057c.24.294.223.73-.051 1.004l-2 2a.75.75 0 0 1-1.06-1.06l.629-.63H8a1.06 1.06 0 0 0-1.062 1.062.75.75 0 0 1-1.5 0A2.56 2.56 0 0 1 8 6.84h1.28l-.81-.81-.052-.056A.75.75 0 0 1 8.47 4.97m5.784 3.086.001.001.004.003.001.002.002.002v-.001zM1.746 7.945v-.001l-.004-.003-.001-.002-.002-.002h-.001zM8.06 1.742l.002-.001.002-.002-.001-.001z"
    })), /*#__PURE__*/ createElement("defs", null, /*#__PURE__*/ createElement("clipPath", {
        id: "CustomInstructions-16_svg__a"
    }, /*#__PURE__*/ createElement("path", {
        fill: "#fff",
        d: "M0 0h16v16H0z"
    }))));
const CustomInstructions_16 = SvgCustomInstructions16;
export { CustomInstructions_16 as default };
