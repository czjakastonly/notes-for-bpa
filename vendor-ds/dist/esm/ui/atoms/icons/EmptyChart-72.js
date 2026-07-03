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
const SvgEmptyChart72 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 72,
        height: 72,
        fill: "none",
        viewBox: "0 0 72 72"
    }, props), /*#__PURE__*/ createElement("path", {
        stroke: "#515358",
        strokeWidth: 2,
        d: "M8 37a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM24 27a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM40 33a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM56 23a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    }), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        d: "M55 5a1 1 0 0 1 2 0v6a1 1 0 0 1-2 0zm15.973 14a1 1 0 0 1 0 2H65a1 1 0 0 1 0-2zm-4.68-10.707a1 1 0 0 1 1.414 1.414l-4 4a.999.999 0 1 1-1.414-1.413z"
    }), /*#__PURE__*/ createElement("path", {
        stroke: "#515358",
        strokeLinecap: "square",
        strokeWidth: 2,
        d: "M11 32.5 21 26m6-1 10 4m6-1 10-6"
    }), /*#__PURE__*/ createElement("path", {
        stroke: "#515358",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M8 47v12.5M24 37v22.5M40 43v16.5M56 33v26.5"
    }));
const EmptyChart_72 = SvgEmptyChart72;
export { EmptyChart_72 as default };
