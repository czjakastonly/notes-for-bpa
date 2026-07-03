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
const SvgTable16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 14,
        height: 14,
        fill: "none",
        viewBox: "0 0 14 14"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        d: "M1.923 13.75c-.82 0-1.673-.597-1.673-1.55V1.8C.25.847 1.103.25 1.923.25h10.154c.82 0 1.673.597 1.673 1.55v10.4c0 .953-.853 1.55-1.673 1.55zM12.25 1.813l-.012-.012a.25.25 0 0 0-.16-.051H7.75v4.5h4.5zm-6-.063H1.923a.25.25 0 0 0-.161.05l-.012.012V6.25h4.5zm5.827 10.5a.25.25 0 0 0 .161-.05l.012-.013V7.75h-4.5v4.5zM6.25 7.75h-4.5v4.437l.012.012a.25.25 0 0 0 .16.051H6.25z"
    }));
const Table_16 = SvgTable16;
export { Table_16 as default };
