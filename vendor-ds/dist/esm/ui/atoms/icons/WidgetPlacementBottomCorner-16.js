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
const SvgWidgetPlacementBottomCorner16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("g", {
        fill: "none",
        fillRule: "evenodd",
        transform: "translate(1 1)"
    }, /*#__PURE__*/ createElement("path", {
        fill: "#FF809E",
        d: "M12 0a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1.5H2a.5.5 0 0 0-.492.41L1.5 2v10a.5.5 0 0 0 .41.492L2 12.5h10a.5.5 0 0 0 .492-.41L12.5 12V2a.5.5 0 0 0-.41-.492z"
    }), /*#__PURE__*/ createElement("rect", {
        width: 4,
        height: 5.5,
        x: 6.75,
        y: 5.25,
        fill: "#E0045F",
        fillOpacity: 0.25,
        rx: 0.5
    }), /*#__PURE__*/ createElement("path", {
        fill: "#FF809E",
        fillRule: "nonzero",
        d: "M11 4.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H6.5A.5.5 0 0 1 6 11V5a.5.5 0 0 1 .5-.5zM10 6H7.5v4H10z"
    })));
const WidgetPlacementBottomCorner_16 = SvgWidgetPlacementBottomCorner16;
export { WidgetPlacementBottomCorner_16 as default };
