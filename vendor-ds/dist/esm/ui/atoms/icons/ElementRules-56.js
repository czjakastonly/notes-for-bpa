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
const SvgElementRules56 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 56,
        height: 40,
        fill: "none",
        viewBox: "0 0 56 40"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#D3D5DA",
        fillRule: "evenodd",
        d: "M34.25 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16m0 17.5a9.46 9.46 0 0 0 6.166-2.273l5.804 5.803a.75.75 0 1 0 1.06-1.06l-5.803-5.804A9.46 9.46 0 0 0 43.75 10a9.5 9.5 0 1 0-9.5 9.5m-22.5-14A3.25 3.25 0 0 0 8.5 8.75v27.5a3.25 3.25 0 0 0 3.25 3.25h30A3.25 3.25 0 0 0 45 36.25v-7.5a.75.75 0 0 0-1.5 0v7.5A1.75 1.75 0 0 1 41.75 38h-30A1.75 1.75 0 0 1 10 36.25V14.5h10.5a.75.75 0 0 0 0-1.5H10V8.75A1.75 1.75 0 0 1 11.75 7h7.5a.75.75 0 0 0 0-1.5zm10.53 18.78a.75.75 0 1 0-1.06-1.06l-3.75 3.75a.75.75 0 0 0 0 1.06l3.75 3.75a.75.75 0 1 0 1.06-1.06l-3.22-3.22zm8.94-1.06a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l3.22-3.22-3.22-3.22a.75.75 0 0 1 0-1.06m-2.508.767a.75.75 0 0 0-1.424-.474l-2.5 7.5a.75.75 0 0 0 1.424.474z",
        clipRule: "evenodd"
    }));
const ElementRules_56 = SvgElementRules56;
export { ElementRules_56 as default };
