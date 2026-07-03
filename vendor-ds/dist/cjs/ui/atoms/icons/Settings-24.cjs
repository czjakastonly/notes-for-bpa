"use strict";
var __webpack_require__ = {};
(()=>{
    __webpack_require__.d = (exports1, definition)=>{
        for(var key in definition)if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports1, key)) Object.defineProperty(exports1, key, {
            enumerable: true,
            get: definition[key]
        });
    };
})();
(()=>{
    __webpack_require__.o = (obj, prop)=>Object.prototype.hasOwnProperty.call(obj, prop);
})();
(()=>{
    __webpack_require__.r = (exports1)=>{
        if ("u" > typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports1, Symbol.toStringTag, {
            value: 'Module'
        });
        Object.defineProperty(exports1, '__esModule', {
            value: true
        });
    };
})();
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
    default: ()=>Settings_24
});
const external_react_namespaceObject = require("react");
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
const SvgSettings24 = (props)=>/*#__PURE__*/ external_react_namespaceObject.createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none",
        viewBox: "0 0 24 24"
    }, props), /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#706D84",
        fillRule: "evenodd",
        d: "m11.852 19.714-.758.88a2 2 0 0 1-.383.298c-.514.318-1.106.423-1.7.134-.332-.162-.73-.353-1.273-.614l-.911-.438A1.6 1.6 0 0 1 6 19.09a1.75 1.75 0 0 1-.05-1.05l.178-1.094-.241-.314-1.137-.085a2 2 0 0 1-.8-.3 1.76 1.76 0 0 1-.8-1.108c-.068-.29-.15-.647-.249-1.08l-.016-.072-.295-1.307c-.142-.627.096-1.152.536-1.504.188-.15.37-.242.445-.263l.896-.42.055-.274-.635-.75a2 2 0 0 1-.194-.324c-.186-.386-.257-.804-.118-1.238q.072-.227.218-.425.258-.35.865-1.103l.862-1.063c.218-.27.502-.445.819-.525.323-.083.64-.064.939.012.099.025.178.052.246.08l.993.427.365-.15.3-1.021c.028-.205.109-.44.28-.674.316-.436.84-.686 1.521-.686h2.304c.62 0 1.103.268 1.4.703.156.227.236.45.27.638l.318 1.106.283.136.997-.461q.088-.036.242-.075c.282-.07.576-.092.878-.033a1.5 1.5 0 0 1 .896.533c.268.332 1.394 1.749 1.413 1.772.503.632.519 1.324.235 1.916-.068.142-.14.252-.172.287l-.68.957.06.284 1.024.527c.142.07.318.19.494.368.399.405.606.945.473 1.571a60 60 0 0 1-.349 1.548l-.165.704c-.12.517-.431.896-.85 1.131a1.95 1.95 0 0 1-.854.255l-1.148.053-.212.247.206 1.142c.006.035.006.035.014.11.03.289.008.606-.113.927a1.64 1.64 0 0 1-.831.915c-.357.175-.737.358-1.218.59l-.227.108-.633.303c-.631.302-1.244.185-1.747-.168a2 2 0 0 1-.369-.33l-.703-.832zm-.915-1.237a.75.75 0 0 1 .566-.262l1.061-.004a.75.75 0 0 1 .576.266l.934 1.104a1 1 0 0 0 .079.065c.098.069.16.08.238.043l.633-.303.226-.108c.478-.23.854-.411 1.207-.585a.15.15 0 0 0 .087-.096.6.6 0 0 0 .025-.244q0-.012-.268-1.49a.75.75 0 0 1 .169-.62l.654-.765a.75.75 0 0 1 .535-.262l1.47-.067a.6.6 0 0 0 .191-.064.23.23 0 0 0 .125-.165l.165-.704.159-.689c.067-.297.127-.567.183-.83.017-.081-.003-.133-.075-.206a.5.5 0 0 0-.104-.084l-1.347-.693a.75.75 0 0 1-.39-.51l-.204-.955a.75.75 0 0 1 .122-.59l.903-1.267c.064-.138.063-.223-.044-.357-.022-.027-1.144-1.439-1.408-1.765a.6.6 0 0 0-.249.014q-.02.005-1.288.588a.75.75 0 0 1-.639-.004l-.904-.433a.75.75 0 0 1-.397-.469l-.425-1.474-.023-.11c.002.012-.009-.022-.029-.051-.025-.037-.05-.051-.163-.051h-2.304c-.215 0-.282.032-.309.068a2 2 0 0 0-.033.148L10.22 5.93a.75.75 0 0 1-.435.482l-.99.406a.75.75 0 0 1-.58-.005l-1.272-.547a.5.5 0 0 0-.233-.022c-.092.1-.664.805-.85 1.036l-.033.04c-.39.484-.667.836-.823 1.048 0 .014.01.063.042.128.015.03.028.053.02.045l.835.985a.75.75 0 0 1 .164.63l-.2 1.002a.75.75 0 0 1-.417.534l-1.314.61c.001 0-.037.018-.07.044-.01.003.214.998.285 1.309l.016.071c.098.43.179.782.247 1.07.018.079.06.132.138.181.082.052.174.08.157.079l1.426.105a.75.75 0 0 1 .539.29l.644.837a.75.75 0 0 1 .146.579l-.238 1.453-.024.103a.3.3 0 0 0 .006.142c.007.019.017.03.07.056l2.19 1.055c.057.027.137.013.257-.061.05-.031.088-.06.076-.046zm5.009-6.371a3.926 3.926 0 1 1-7.853 0 3.926 3.926 0 0 1 7.853 0m-1.5 0a2.426 2.426 0 1 0-4.852 0 2.426 2.426 0 0 0 4.852 0",
        clipRule: "evenodd"
    }));
const Settings_24 = SvgSettings24;
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
