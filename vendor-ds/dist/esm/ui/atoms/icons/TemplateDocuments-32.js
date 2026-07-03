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
const SvgTemplateDocuments32 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 32,
        height: 32,
        fill: "none",
        viewBox: "0 0 32 32"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#706D84",
        d: "M18.294 3.001a2.26 2.26 0 0 1 1.604.662l6.843 6.842c.424.424.663 1 .663 1.6v.001l-.009 14.464a2.264 2.264 0 0 1-2.264 2.263H7.264A2.264 2.264 0 0 1 5 26.569V5.264A2.264 2.264 0 0 1 7.264 3zM7.264 5A.264.264 0 0 0 7 5.264v21.305c0 .146.118.264.264.264H25.13a.264.264 0 0 0 .264-.264l.01-13.987h-5.329a2.264 2.264 0 0 1-2.264-2.264V5zm12.549 5.318c0 .146.117.264.263.264h3.914l-4.177-4.178z"
    }));
const TemplateDocuments_32 = SvgTemplateDocuments32;
export { TemplateDocuments_32 as default };
