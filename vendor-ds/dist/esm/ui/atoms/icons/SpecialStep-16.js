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
const SvgSpecialStep16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M1 15.25a.75.75 0 0 0 1.004.706L8 13.797l5.996 2.159A.75.75 0 0 0 15 15.25V1.583C15 .613 14.133 0 13.29 0H2.71C1.867 0 1 .613 1 1.583zm6.746-2.956L2.5 14.183V1.587a.1.1 0 0 1 .023-.027.3.3 0 0 1 .187-.06h10.58c.091 0 .155.032.187.06a.1.1 0 0 1 .023.026v12.597l-5.246-1.889a.75.75 0 0 0-.508 0M2.499 1.59v-.003zm11.002 0v-.003zM7.349 4.063c.205-.63 1.097-.63 1.302 0l.493 1.517h1.595c.663 0 .939.849.402 1.239l-1.29.937.493 1.516c.205.631-.517 1.156-1.054.766L8 9.101l-1.29.937c-.537.39-1.259-.135-1.054-.766l.493-1.516-1.29-.937c-.537-.39-.261-1.24.403-1.24h1.594z",
        clipRule: "evenodd"
    }));
const SpecialStep_16 = SvgSpecialStep16;
export { SpecialStep_16 as default };
