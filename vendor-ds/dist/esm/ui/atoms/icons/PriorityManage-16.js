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
const SvgPriorityManage16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M4.5 1.5A.5.5 0 0 1 5 2v5a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V3.75h-1a.5.5 0 0 1-.5-.5v-.5a.5.5 0 0 1 .5-.5h1V2a.5.5 0 0 1 .5-.5zm6.399.083a.26.26 0 0 1 .101.2V3.75a4.75 4.75 0 0 1 .217 9.495l-.237.005h-1.5a.75.75 0 0 1 0-1.5H11a3.25 3.25 0 0 0 .184-6.495L11 5.25v1.967c0 .156-.155.283-.345.283a.4.4 0 0 1-.244-.083L7.1 4.7a.25.25 0 0 1 0-.4l3.31-2.717a.4.4 0 0 1 .488 0M4.82 8.633a2.6 2.6 0 0 0-.86-.133q-.432 0-.745.098-.312.097-.53.256a1.5 1.5 0 0 0-.35.353 1.84 1.84 0 0 0-.309.763 2 2 0 0 0-.026.286q0 .25.182.413.182.158.477.158a.73.73 0 0 0 .421-.14.6.6 0 0 0 .165-.188.6.6 0 0 0 .065-.286q0-.103.018-.213a.5.5 0 0 1 .086-.209.5.5 0 0 1 .2-.153.8.8 0 0 1 .347-.064q.082 0 .2.017a.6.6 0 0 1 .23.077.47.47 0 0 1 .186.187.67.67 0 0 1 .078.35.9.9 0 0 1-.035.242.6.6 0 0 1-.147.24 1.5 1.5 0 0 1-.312.238q-.204.12-.547.251a3.2 3.2 0 0 0-.625.32 2.4 2.4 0 0 0-.481.426 1.714 1.714 0 0 0-.42 1.138v.682q-.001.131.03.268.033.132.116.243a.7.7 0 0 0 .222.179.8.8 0 0 0 .36.068h2.16q.183 0 .365-.017.18-.017.33-.081a.6.6 0 0 0 .238-.183.52.52 0 0 0 .091-.324.5.5 0 0 0-.091-.316.56.56 0 0 0-.239-.178 1.2 1.2 0 0 0-.33-.077 4 4 0 0 0-.364-.017h-1.51v-.264q0-.183.074-.324a.9.9 0 0 1 .191-.252q.117-.111.265-.191.15-.085.303-.145.456-.162.82-.427a3 3 0 0 0 .3-.255 1.8 1.8 0 0 0 .447-.72q.073-.218.073-.473 0-.388-.126-.708a1.5 1.5 0 0 0-.373-.554 1.7 1.7 0 0 0-.62-.362",
        clipRule: "evenodd"
    }));
const PriorityManage_16 = SvgPriorityManage16;
export { PriorityManage_16 as default };
