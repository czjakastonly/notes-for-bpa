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
const SvgHeadingLarge16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        d: "M12.5 7.1a.5.5 0 0 1 .5.5v5.9a.5.5 0 0 0 .5.5h1.677a.5.5 0 0 1 .5.5v.1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5zM1.097 1a.5.5 0 0 1 .5.5v5.094a.5.5 0 0 0 .5.5h5.028a.5.5 0 0 0 .5-.5V1.5a.5.5 0 0 1 .5-.5h.597a.5.5 0 0 1 .5.5v13.092a.5.5 0 0 1-.5.5h-.597a.5.5 0 0 1-.5-.5V9.176a.5.5 0 0 0-.5-.5H2.097a.5.5 0 0 0-.5.5v5.416a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5V1.5A.5.5 0 0 1 .5 1z"
    }));
const HeadingLarge_16 = SvgHeadingLarge16;
export { HeadingLarge_16 as default };
