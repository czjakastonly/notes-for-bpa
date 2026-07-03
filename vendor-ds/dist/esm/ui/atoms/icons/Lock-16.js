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
const SvgLock16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M8 1.75c1.86 0 3.395 1.397 3.495 3.174l.005.185.001 1.409a1.75 1.75 0 0 1 1.492 1.578L13 8.25v5a1.75 1.75 0 0 1-1.607 1.744L11.25 15h-6.5a1.75 1.75 0 0 1-1.744-1.607L3 13.25v-5c0-.882.652-1.61 1.5-1.732v-1.41C4.5 3.246 6.076 1.75 8 1.75M11.25 8h-6.5a.25.25 0 0 0-.243.193L4.5 8.25v5a.25.25 0 0 0 .193.243l.057.007h6.5a.25.25 0 0 0 .243-.193l.007-.057v-5a.25.25 0 0 0-.193-.243zM8 9.25a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m0-6c-1.06 0-1.915.763-1.994 1.715L6 5.109V6.5h4V5.109C10 4.09 9.113 3.25 8 3.25",
        clipRule: "evenodd"
    }));
const Lock_16 = SvgLock16;
export { Lock_16 as default };
