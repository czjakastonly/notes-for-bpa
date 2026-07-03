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
const SvgAiWriting16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#848296",
        d: "M13.053 11.894a.5.5 0 0 1 .894 0l.312.623a.5.5 0 0 0 .223.224l.623.312a.5.5 0 0 1 0 .894l-.597.298-.026.014a.5.5 0 0 0-.223.223l-.312.623-.038.065a.5.5 0 0 1-.857-.065l-.311-.623a.5.5 0 0 0-.224-.223l-.623-.312a.5.5 0 0 1 0-.894l.596-.3.027-.012a.5.5 0 0 0 .182-.154l.042-.07zM3.289.766a.87.87 0 0 1 1.422 0l.067.113.714 1.427a.45.45 0 0 0 .201.202l1.428.713a.87.87 0 0 1 0 1.557l-1.428.714a.45.45 0 0 0-.201.201l-.714 1.428a.87.87 0 0 1-1.557 0l-.713-1.428a.45.45 0 0 0-.202-.201L.88 4.778a.87.87 0 0 1 0-1.556l1.427-.714a.45.45 0 0 0 .202-.202L3.22.88zm.56 2.211a1.95 1.95 0 0 1-.872.872l-.3.15.3.151c.378.189.684.495.872.872l.15.301.151-.3a1.95 1.95 0 0 1 .872-.873L5.323 4l-.3-.15a1.95 1.95 0 0 1-.873-.873l-.15-.3z"
    }), /*#__PURE__*/ createElement("path", {
        fill: "#848296",
        fillRule: "evenodd",
        d: "M9.713 4.852c.26-.26.68-.259.94 0l2.504 2.505c.26.26.26.68 0 .94l-6.89 6.89a.67.67 0 0 1-.338.183l-3.132.626a.665.665 0 0 1-.782-.783l.626-3.131a.67.67 0 0 1 .182-.34zM3.905 12.54l-.391 1.957 1.957-.39 6.277-6.28-1.566-1.566zm8.457-10.344c.26-.26.68-.26.94-.001L15.808 4.7c.26.259.26.678.002.937l-1.04 1.048a.665.665 0 0 1-.942-.936l.572-.577-1.565-1.567-.572.573a.665.665 0 0 1-.94-.937z",
        clipRule: "evenodd"
    }));
const AiWriting_16 = SvgAiWriting16;
export { AiWriting_16 as default };
