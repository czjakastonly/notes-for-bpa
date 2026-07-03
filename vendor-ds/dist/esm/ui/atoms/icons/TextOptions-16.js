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
const SvgTextOptions16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        d: "M13.04.24H2.96A1.46 1.46 0 0 0 1.5 1.7v1.26a.833.833 0 0 0 1.667 0v-.887a.167.167 0 0 1 .166-.166H7a.167.167 0 0 1 .167.166v11.854a.166.166 0 0 1-.167.166H5.793a.833.833 0 1 0 0 1.667h4.414a.833.833 0 0 0 0-1.667H9a.166.166 0 0 1-.167-.166V2.073A.167.167 0 0 1 9 1.907h3.667a.166.166 0 0 1 .166.166v.887a.833.833 0 1 0 1.667 0V1.7A1.46 1.46 0 0 0 13.04.24"
    }));
const TextOptions_16 = SvgTextOptions16;
export { TextOptions_16 as default };
