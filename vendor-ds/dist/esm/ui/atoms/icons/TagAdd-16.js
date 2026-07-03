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
const SvgTagAdd16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        d: "M9.17 1.844q.115-.001.263.017l4.21.535.174.03a2.08 2.08 0 0 1 1.59 1.59l.03.173v.002l.537 4.21v.003l.015.234a2.076 2.076 0 0 1-.45 1.313l-.157.177-5.253 5.253a2.064 2.064 0 0 1-2.778.138l-.152-.138-4.744-4.745a2.067 2.067 0 0 1-.002-2.933.75.75 0 0 1 1.06 1.063.565.565 0 0 0-.075.72l.072.084 4.75 4.75.088.073a.564.564 0 0 0 .717-.07l5.256-5.256.08-.101a.609.609 0 0 0 .083-.38v-.002l-.534-4.201-.02-.095a.58.58 0 0 0-.479-.404v-.001l-4.207-.534-.012-.002a.621.621 0 0 0-.288.042 1 1 0 0 0-.095.051l-.086.07a.75.75 0 0 1-1.06-1.06l.152-.14q.242-.194.52-.309l.008-.003.007-.003c.242-.095.504-.151.78-.151m.385 3.613a2.1 2.1 0 0 1 2.105 2.105 2.1 2.1 0 0 1-2.105 2.105A2.1 2.1 0 0 1 7.45 7.562c0-.56.219-1.092.615-1.489a2.1 2.1 0 0 1 1.489-.616m0 1.5a.6.6 0 0 0-.428.177.6.6 0 0 0-.177.428.6.6 0 0 0 .177.427.6.6 0 0 0 .855 0 .6.6 0 0 0 0-.855.6.6 0 0 0-.427-.177"
    }), /*#__PURE__*/ createElement("path", {
        fill: "#5D6169",
        fillRule: "evenodd",
        d: "M2.25 2.25V.75a.75.75 0 0 1 1.5 0v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5a.75.75 0 0 1-1.5 0v-1.5H.75a.75.75 0 0 1 0-1.5z",
        clipRule: "evenodd"
    }));
const TagAdd_16 = SvgTagAdd16;
export { TagAdd_16 as default };
