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
const SvgUsers16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("g", {
        clipPath: "url(#Users-16_svg__a)"
    }, /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M3 4.5a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0m1.75-3.25a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5m-2.298 9.702A3.25 3.25 0 0 1 8 13.25a.75.75 0 0 0 1.5 0 4.75 4.75 0 1 0-9.5 0 .75.75 0 0 0 1.5 0c0-.862.342-1.689.952-2.298m7.96-1.037a3.9 3.9 0 0 1 3.74.127 3.8 3.8 0 0 1 1.352 1.363c.325.562.496 1.197.496 1.845a.75.75 0 0 1-1.5 0c0-.382-.101-.76-.295-1.095a2.3 2.3 0 0 0-.818-.822 2.404 2.404 0 0 0-2.3-.077.75.75 0 1 1-.674-1.34m.3-3.915a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0m1.25-2.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5",
        clipRule: "evenodd"
    })), /*#__PURE__*/ createElement("defs", null, /*#__PURE__*/ createElement("clipPath", {
        id: "Users-16_svg__a"
    }, /*#__PURE__*/ createElement("path", {
        fill: "#fff",
        d: "M0 0h16v16H0z"
    }))));
const Users_16 = SvgUsers16;
export { Users_16 as default };
