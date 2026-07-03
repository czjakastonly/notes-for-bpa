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
const SvgTextColorColor16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        d: "M10.146 8.571H5.839l-.844 2.483a.66.66 0 0 1 .495.606c0 .341-.28.618-.625.618h-1.25A.62.62 0 0 1 3 11.66c0-.342.28-.618.625-.618h.055L7.134.886a.91.91 0 0 1 1.71 0l3.464 10.156h.067c.345 0 .625.276.625.617s-.28.619-.625.619h-1.25a.62.62 0 0 1-.625-.619c0-.297.211-.545.494-.604zM6.26 7.76h3.464L7.99 2.368z",
        className: "TextColor-color-16_svg__color-frozen"
    }), /*#__PURE__*/ createElement("path", {
        fill: "#A60045",
        d: "M1 13h14v3H1z"
    }));
const TextColor_color_16 = SvgTextColorColor16;
export { TextColor_color_16 as default };
