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
const SvgTick16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#000",
        fillRule: "evenodd",
        d: "M12.297 3.791a.76.76 0 0 0-.368.254 409 409 0 0 0-2.368 3.728 1086 1086 0 0 1-2.316 3.662c-.021.027-.436-.373-1.763-1.697C3.541 7.801 3.662 7.902 3.3 7.925c-.147.01-.22.029-.3.08-.359.227-.481.632-.294.976.099.182 4.166 4.243 4.332 4.326.263.131.6.08.808-.122.097-.094 5.272-8.257 5.344-8.43a.8.8 0 0 0 .036-.254.736.736 0 0 0-.929-.71"
    }));
const Tick_16 = SvgTick16;
export { Tick_16 as default };
