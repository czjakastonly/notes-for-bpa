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
const SvgKnowledgeBase24 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none",
        viewBox: "0 0 24 24"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M21.5 2.75a.75.75 0 0 1 .743.648l.007.102v15a.75.75 0 0 1-.75.75c-2.463 0-4.373.304-6.017.845l-.325.112-1.062.435-.599.235-.198.074-.377.133c-.296.1-.543.166-.672.166a1.7 1.7 0 0 1-.41-.083l-.288-.091-.158-.055-.391-.144-.402-.156-1.259-.514c-1.716-.61-3.714-.957-6.342-.957a.75.75 0 0 1-.743-.648L2.25 18.5v-15A.75.75 0 0 1 3 2.75c2.628 0 4.747.333 6.572.92l.51.174.276.101.395.156.421.18.736.328.34.141.108-.042.968-.428.42-.179.198-.08.403-.152.22-.077c1.906-.663 4.13-1.042 6.933-1.042M3.75 4.261V17.76l.27.007c1.986.07 3.64.345 5.107.79l.362.115.356.121.368.142 1.287.53V6.033l-.1-.037-.403-.158-1.17-.48-.282-.111-.105-.039c-1.42-.494-3.045-.818-5.017-.922l-.462-.02zm17 0-.211.005c-2.027.07-3.695.364-5.148.831l-.398.136-.168.065-.907.372-.62.25-.298.112v13.432l1.426-.584.229-.087c1.526-.542 3.243-.892 5.335-1.004l.49-.022.27-.007z",
        clipRule: "evenodd"
    }));
const KnowledgeBase_24 = SvgKnowledgeBase24;
export { KnowledgeBase_24 as default };
