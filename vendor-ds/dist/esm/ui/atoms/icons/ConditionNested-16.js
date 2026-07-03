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
const SvgConditionNested16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M3.75 8.25a.75.75 0 0 1 .743.648L4.5 9v2h2a.75.75 0 0 1 .102 1.493L6.5 12.5h-2v2a.75.75 0 0 1-1.493.102L3 14.5v-2H1a.75.75 0 0 1-.102-1.493L1 11h2V9a.75.75 0 0 1 .75-.75M11 9c1.259 0 2.32.846 2.647 2H15a.75.75 0 0 1 .102 1.493L15 12.5h-1.354A2.75 2.75 0 1 1 11 9m0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M6 1a2.75 2.75 0 0 1 2.646 2h6.104a.75.75 0 0 1 .102 1.493l-.102.007H8.647a2.752 2.752 0 0 1-5.293 0H1.25a.75.75 0 0 1-.102-1.493L1.25 3h2.103A2.75 2.75 0 0 1 6 1m0 1.5A1.25 1.25 0 1 0 6 5a1.25 1.25 0 0 0 0-2.5",
        clipRule: "evenodd"
    }));
const ConditionNested_16 = SvgConditionNested16;
export { ConditionNested_16 as default };
