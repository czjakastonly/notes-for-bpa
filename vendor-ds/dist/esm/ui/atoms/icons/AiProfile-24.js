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
const SvgAiProfile24 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none",
        viewBox: "0 0 24 24"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#fff",
        d: "M12 .25a.75.75 0 0 1 0 1.5C6.34 1.75 1.75 6.34 1.75 12c0 2.65 1.006 5.065 2.656 6.884A9.73 9.73 0 0 1 12 15.25a9.73 9.73 0 0 1 7.594 3.634A10.2 10.2 0 0 0 22.25 12a.75.75 0 0 1 1.5 0c0 6.49-5.26 11.75-11.75 11.75S.25 18.49.25 12C.25 5.511 5.51.25 12 .25m0 16.5a8.23 8.23 0 0 0-6.502 3.173A10.2 10.2 0 0 0 12 22.25c2.468 0 4.732-.873 6.501-2.326A8.23 8.23 0 0 0 12 16.75m.161-10.5a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.501 2.25 2.25 0 0 0 0-4.5M18.79.767a.87.87 0 0 1 1.422 0l.067.112.88 1.762.038.062a.45.45 0 0 0 .163.14l1.762.879a.87.87 0 0 1 .112 1.49l-.112.067-1.762.88a.45.45 0 0 0-.163.14l-.038.06-.88 1.762a.87.87 0 0 1-1.556 0l-.88-1.761a.45.45 0 0 0-.14-.163l-.061-.038-1.762-.88a.87.87 0 0 1 0-1.557l1.762-.88a.45.45 0 0 0 .2-.201l.88-1.762zm.394 2.544a1.95 1.95 0 0 1-.872.872l-.635.317.635.318.138.076c.314.19.569.466.734.796l.317.634.317-.634.077-.139a1.95 1.95 0 0 1 .796-.733l.633-.318-.634-.317a1.95 1.95 0 0 1-.795-.733l-.077-.14-.317-.634z"
    }));
const AiProfile_24 = SvgAiProfile24;
export { AiProfile_24 as default };
