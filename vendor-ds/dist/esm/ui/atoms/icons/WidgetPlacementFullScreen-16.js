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
const SvgWidgetPlacementFullScreen16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#FF809E",
        fillOpacity: 0.25,
        fillRule: "evenodd",
        d: "M11.911 1.334c.786 0 1.423.596 1.423 1.333v10.667c0 .736-.637 1.333-1.423 1.333H4.09c-.785 0-1.422-.597-1.422-1.333V2.667c0-.737.637-1.333 1.422-1.333z",
        clipRule: "evenodd"
    }), /*#__PURE__*/ createElement("path", {
        fill: "#FF809E",
        fillRule: "evenodd",
        d: "M11.834 2.834H4.167v10.333h7.667zm1.5-.167c0-.737-.637-1.333-1.423-1.333H4.09c-.785 0-1.422.596-1.422 1.333v10.667c0 .736.637 1.333 1.422 1.333h7.822c.786 0 1.423-.597 1.423-1.333z",
        clipRule: "evenodd"
    }));
const WidgetPlacementFullScreen_16 = SvgWidgetPlacementFullScreen16;
export { WidgetPlacementFullScreen_16 as default };
