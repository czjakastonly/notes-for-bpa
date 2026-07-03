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
const SvgCursorHover16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#fff",
        stroke: "#515358",
        d: "M7.272 13.322a.75.75 0 0 1-.586.219l-.106-.015a.75.75 0 0 1-.538-.45L1.807 2.79a.753.753 0 0 1 .983-.983l10.286 4.235a.753.753 0 0 1 .246 1.23l-1.254 1.253-.353.354.353.354 1.961 1.96a.75.75 0 0 1 .215.436l.006.11a.75.75 0 0 1-.22.52l-1.771 1.771a.755.755 0 0 1-1.066 0v-.001l-1.961-1.96-.354-.354-.354.354zM3.146 2.494l-1.11-.457.458 1.11 3.869 9.396.285.694.53-.53 1.524-1.523a.25.25 0 0 1 .314-.032l.053.045 2.303 2.304.354.353.353-.353 1.422-1.421.353-.354-.353-.354-2.316-2.316a.25.25 0 0 1-.033-.314l.045-.053 1.51-1.51.53-.53-.694-.286z"
    }));
const CursorHover_16 = SvgCursorHover16;
export { CursorHover_16 as default };
