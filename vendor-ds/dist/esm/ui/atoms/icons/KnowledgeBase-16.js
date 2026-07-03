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
const SvgKnowledgeBase16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M15.25.75a.75.75 0 0 1 .743.648L16 1.5v12a.75.75 0 0 1-.75.75c-2.054 0-3.529.223-4.726.623l-.236.082-.566.244-.427.17-.378.141-.365.122c-.23.071-.43.118-.552.118s-.321-.047-.552-.118l-.142-.045-.298-.104-.303-.114-.291-.115-.377-.156-.324-.142-.236-.083c-1.198-.4-2.673-.623-4.727-.623a.75.75 0 0 1-.743-.648L0 13.5v-12A.75.75 0 0 1 .75.75c2.216 0 3.902.25 5.288.7l.401.139.332.126.347.148.58.265.243.103L8 2.25l.06-.019.243-.103.44-.201.378-.168.214-.086.354-.13C11.126 1.036 12.886.75 15.25.75M1.5 2.26v10.501l.105.002c1.652.053 2.96.26 4.077.6l.275.089.334.119.63.263.329.135V3.543l-.06-.021-.349-.137-.34-.14-.304-.128-.385-.16c-1.028-.362-2.263-.6-3.859-.679zm13 0-.453.018c-1.463.072-2.623.278-3.597.591l-.288.098-.663.278-.515.21-.234.087v10.427l.959-.398.334-.12c1.085-.362 2.35-.593 3.946-.671l.511-.02z",
        clipRule: "evenodd"
    }));
const KnowledgeBase_16 = SvgKnowledgeBase16;
export { KnowledgeBase_16 as default };
