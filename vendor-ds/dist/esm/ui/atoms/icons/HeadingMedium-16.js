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
const SvgHeadingMedium16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 17,
        height: 16,
        fill: "none",
        viewBox: "0 0 17 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        d: "M1.737.908a.5.5 0 0 1 .5.5v5.094a.5.5 0 0 0 .5.5h5.34a.5.5 0 0 0 .5-.5V1.408a.5.5 0 0 1 .5-.5h.44a.5.5 0 0 1 .5.5V14.5a.5.5 0 0 1-.5.5h-.44a.5.5 0 0 1-.5-.5V9.084a.5.5 0 0 0-.5-.5h-5.34a.5.5 0 0 0-.5.5V14.5a.5.5 0 0 1-.5.5h-.44a.5.5 0 0 1-.5-.5V1.408a.5.5 0 0 1 .5-.5zM12.23 8a.5.5 0 0 1 .436.256l1.484 2.651a.052.052 0 0 0 .091 0l1.489-2.652A.5.5 0 0 1 16.165 8h.335a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-.06a.5.5 0 0 1-.5-.5v-4.157l-1.292 2.048a.5.5 0 0 1-.422.233h-.057a.5.5 0 0 1-.423-.233l-1.29-2.046V14.5a.5.5 0 0 1-.5.5H11.8a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5z"
    }));
const HeadingMedium_16 = SvgHeadingMedium16;
export { HeadingMedium_16 as default };
