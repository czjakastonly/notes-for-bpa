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
const SvgSearch = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#5D6169",
        fillRule: "evenodd",
        d: "M7.849 2.849a3.749 3.749 0 1 0 5.303 5.302A3.749 3.749 0 1 0 7.849 2.85m6.363-1.061a5.25 5.25 0 0 1 0 7.424 5.25 5.25 0 0 1-7.424 0 5.25 5.25 0 0 1 0-7.424 5.25 5.25 0 0 1 7.424 0m-9.5 8.682a.75.75 0 1 1 1.061 1.06L1.53 15.772a.75.75 0 1 1-1.06-1.06z",
        clipRule: "evenodd"
    }));
const Search = SvgSearch;
export { Search as default };
