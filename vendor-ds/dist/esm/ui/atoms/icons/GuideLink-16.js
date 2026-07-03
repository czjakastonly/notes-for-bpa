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
const SvgGuideLink16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("g", {
        clipPath: "url(#GuideLink-16_svg__a)"
    }, /*#__PURE__*/ createElement("path", {
        fill: "#706D84",
        fillRule: "evenodd",
        d: "M.75 1.5A.75.75 0 0 1 1.5.75h13a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V2.25H2.25v11.5H5.5a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75zm3 8.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75m.75-4.75a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5zm4.695 6.773a1.25 1.25 0 1 0 1.767 1.768l.354-.354a.75.75 0 1 1 1.06 1.06l-.353.354a2.75 2.75 0 0 1-3.89-3.889l.354-.353a.75.75 0 0 1 1.061 1.06zm1.414-2.475a.75.75 0 0 1 0-1.06l.353-.354a2.75 2.75 0 0 1 3.89 3.889l-.354.354a.75.75 0 1 1-1.06-1.061l.353-.354a1.25 1.25 0 1 0-1.768-1.767l-.354.353a.75.75 0 0 1-1.06 0M9.9 12.023a.75.75 0 1 0 1.061 1.06l2.121-2.12a.75.75 0 1 0-1.06-1.061z",
        clipRule: "evenodd"
    })), /*#__PURE__*/ createElement("defs", null, /*#__PURE__*/ createElement("clipPath", {
        id: "GuideLink-16_svg__a"
    }, /*#__PURE__*/ createElement("path", {
        fill: "#fff",
        d: "M0 0h16v16H0z"
    }))));
const GuideLink_16 = SvgGuideLink16;
export { GuideLink_16 as default };
