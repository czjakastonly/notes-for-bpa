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
const SvgCustomInstructions24 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none"
    }, props), /*#__PURE__*/ createElement("g", {
        clipPath: "url(#CustomInstructions-24_svg__a)"
    }, /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        d: "M11.487.34a1.67 1.67 0 0 1 .855-.059c.332.067.645.239.921.515l9.94 9.94-.321.323.323-.323v.001l.002.001.002.003.006.006.014.016a2 2 0 0 1 .159.194c.086.12.196.302.272.53.077.232.124.528.058.855a1.76 1.76 0 0 1-.416.816l-.098.106-9.94 9.94-.53-.53.53.531h-.002v.002l-.003.002-.006.006-.016.015a2 2 0 0 1-.725.43 1.66 1.66 0 0 1-.854.059 1.76 1.76 0 0 1-.816-.416l-.106-.099-9.94-9.94.53-.53-.531.53v-.001l-.002-.001-.002-.003-.006-.006-.015-.016a2 2 0 0 1-.158-.194 2 2 0 0 1-.272-.53 1.66 1.66 0 0 1-.059-.855c.067-.333.239-.646.515-.922l9.94-9.94.53.53-.53-.531h.001l.001-.002.003-.002.006-.006.015-.015.046-.04a2 2 0 0 1 .68-.39Zm.475 1.423a.5.5 0 0 0-.171.1l-9.935 9.934c-.09.09-.102.144-.104.155a.2.2 0 0 0 .01.086.5.5 0 0 0 .098.169l9.937 9.936.06.055a.2.2 0 0 0 .095.05.2.2 0 0 0 .086-.01.5.5 0 0 0 .134-.071l.037-.03 9.934-9.934.055-.06a.2.2 0 0 0 .05-.095.2.2 0 0 0-.01-.086.5.5 0 0 0-.1-.171l-9.935-9.935c-.09-.09-.144-.102-.155-.104a.2.2 0 0 0-.086.01ZM13.47 7.72a.75.75 0 0 1 1.003-.052l.057.052 2 2 .052.056q.016.023.03.046.017.023.032.048a1 1 0 0 1 .06.126l.02.068.014.064q.005.038.007.074c0 .016.005.032.005.048l-.002.018q-.002.037-.008.076-.002.03-.008.06-.008.033-.018.064-.01.036-.024.071-.01.023-.022.045a1 1 0 0 1-.042.075q-.018.025-.037.049-.021.028-.044.055-.008.008-.015.017l-2 2a.75.75 0 0 1-1.06-1.06l.72-.72H11.8a1.96 1.96 0 0 0-1.432.64c-.39.42-.618.997-.618 1.61v3a.75.75 0 0 1-1.5 0v-3c0-.978.362-1.926 1.021-2.633A3.46 3.46 0 0 1 11.8 9.5h2.39l-.72-.72-.052-.056a.75.75 0 0 1 .052-1.004"
    })), /*#__PURE__*/ createElement("defs", null, /*#__PURE__*/ createElement("clipPath", {
        id: "CustomInstructions-24_svg__a"
    }, /*#__PURE__*/ createElement("path", {
        fill: "#fff",
        d: "M0 0h24v24H0z"
    }))));
const CustomInstructions_24 = SvgCustomInstructions24;
export { CustomInstructions_24 as default };
