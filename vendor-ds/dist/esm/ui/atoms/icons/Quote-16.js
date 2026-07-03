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
const SvgQuote16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 16,
        fill: "none",
        viewBox: "0 0 15 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#706D84",
        d: "M.75 0a.75.75 0 0 1 .75.75v14.5a.75.75 0 0 1-1.5 0V.75A.75.75 0 0 1 .75 0m8.537 4.694q-.728.197-1.361.544a5.1 5.1 0 0 0-1.092.815q-.46.453-.729.981-.268.529-.268 1.087 0 .332.142.589.142.24.333.241a.64.64 0 0 0 .332-.075q.142-.075.285-.166.142-.09.316-.166.19-.076.49-.076.317 0 .586.136.285.12.49.347.222.227.35.543.126.317.126.68 0 .392-.175.724a1.8 1.8 0 0 1-.474.574q-.285.241-.681.392-.38.136-.822.136-.585 0-1.093-.241a3 3 0 0 1-.886-.68 3.5 3.5 0 0 1-.601-.996 3.4 3.4 0 0 1-.222-1.223q0-1.026.396-1.886a5.1 5.1 0 0 1 1.076-1.495 5.2 5.2 0 0 1 1.583-1.026A5.6 5.6 0 0 1 9.288 4zm5.713 0q-.712.197-1.345.544a4.7 4.7 0 0 0-1.092.815 3.8 3.8 0 0 0-.728.981q-.27.529-.27 1.087 0 .332.127.589.143.24.348.241a.65.65 0 0 0 .333-.075q.142-.075.269-.166.142-.09.316-.166.19-.076.491-.076.317 0 .585.136.285.12.491.347.222.227.348.543.127.317.127.68 0 .392-.174.724a1.6 1.6 0 0 1-.459.574q-.285.241-.68.392-.396.136-.84.136-.585 0-1.091-.241a3 3 0 0 1-.887-.68 3.5 3.5 0 0 1-.601-.996 3.4 3.4 0 0 1-.222-1.223q0-1.026.396-1.886a4.9 4.9 0 0 1 1.092-1.495 5.2 5.2 0 0 1 1.567-1.026A5.6 5.6 0 0 1 15 4z"
    }));
const Quote_16 = SvgQuote16;
export { Quote_16 as default };
