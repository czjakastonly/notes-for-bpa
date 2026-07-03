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
const SvgGlossary16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M2 1.75C2 .784 2.784 0 3.75 0h9.465c.967 0 1.75.784 1.75 1.75v8.75a1 1 0 0 1-.015.15.75.75 0 0 1-.735.9H4.75c-.69 0-1.25.56-1.25 1.25v.488c0 .69.56 1.25 1.25 1.25h9.465a.75.75 0 0 1 0 1.5H4.75A2.75 2.75 0 0 1 2 13.288V1.75m1.5 8.6c.375-.192.8-.3 1.25-.3h.002L4.75 10V1.5h-1a.25.25 0 0 0-.25.25zm2.748-.3h7.217v-8.3a.25.25 0 0 0-.25-.25H6.25V10zm-.748 2.2a.75.75 0 0 0 0 1.5h7.366a.75.75 0 0 0 0-1.5z",
        clipRule: "evenodd"
    }), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        d: "M12.185 8.179a1 1 0 0 1 .007.1 1 1 0 0 1 .008.102.33.33 0 0 1-.054.185.4.4 0 0 1-.062.084.4.4 0 0 1-.093.059.6.6 0 0 1-.411.084.5.5 0 0 1-.194-.11q-.015-.015-.023-.016a.1.1 0 0 1-.016-.026l-.015-.017a.708.708 0 0 1-.085-.1L11.2 8.44a.3.3 0 0 0-.04-.076 1 1 0 0 0-.038-.084l-.03-.059a.3.3 0 0 1-.024-.067.6.6 0 0 1-.039-.135l-.163-.411q-.534 0-1.07.008-.527 0-1.062-.008l-.163.411a.4.4 0 0 0-.023.068.2.2 0 0 1-.016.067l-.03.067a1 1 0 0 1-.024.059l-.047.084-.038.076a1 1 0 0 1-.04.084 1 1 0 0 1-.084.1l-.016.017a.1.1 0 0 1-.015.026q-.008 0-.024.016a.5.5 0 0 1-.194.11.6.6 0 0 1-.41-.084.4.4 0 0 1-.094-.06.4.4 0 0 1-.062-.083.33.33 0 0 1-.054-.185V8.28l.016-.101q.015-.075.038-.151l.024-.076L9.09 3.65l.047-.135a.5.5 0 0 1 .039-.092.4.4 0 0 0 .039-.1 1.3 1.3 0 0 1 .14-.287l.061-.084a.34.34 0 0 1 .132-.109.7.7 0 0 1 .248-.042q.147 0 .256.042.085.042.132.11.054.075.116.176.047.084.085.193.015.06.04.101a.5.5 0 0 1 .038.092l.047.135 1.613 4.303.023.076q.023.075.038.151m-1.838-2.06-.21-.503q-.101-.26-.217-.53l-.062-.151-.062-.16q-.023.075-.054.16l-.062.151q-.117.27-.225.53a24 24 0 0 1-.202.504l-.14.37h1.373z"
    }));
const Glossary_16 = SvgGlossary16;
export { Glossary_16 as default };
