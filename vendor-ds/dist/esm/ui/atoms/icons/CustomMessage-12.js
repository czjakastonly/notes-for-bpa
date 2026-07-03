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
const SvgCustomMessage12 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 12,
        height: 12,
        fill: "none",
        viewBox: "0 0 12 12"
    }, props), /*#__PURE__*/ createElement("g", {
        clipPath: "url(#CustomMessage-12_svg__a)"
    }, /*#__PURE__*/ createElement("path", {
        fill: "#848296",
        d: "M10.266.328a1.406 1.406 0 0 1 1.406 1.406v6.563a1.406 1.406 0 0 1-1.406 1.406H5.922l-2.425 1.819a.75.75 0 0 1-1.2-.6V9.703h-.563A1.406 1.406 0 0 1 .328 8.297V1.734A1.406 1.406 0 0 1 1.734.328zM1.828 8.203h1.219l.077.004a.75.75 0 0 1 .673.746v.469l1.425-1.068.102-.065a.75.75 0 0 1 .348-.086h4.5V1.828H1.828zm2.336-4.101a.914.914 0 1 1 0 1.828.914.914 0 0 1 0-1.828m3.328 0a.914.914 0 1 1 0 1.828.914.914 0 0 1 0-1.828"
    })), /*#__PURE__*/ createElement("defs", null, /*#__PURE__*/ createElement("clipPath", {
        id: "CustomMessage-12_svg__a"
    }, /*#__PURE__*/ createElement("path", {
        fill: "#fff",
        d: "M0 0h12v12H0z"
    }))));
const CustomMessage_12 = SvgCustomMessage12;
export { CustomMessage_12 as default };
