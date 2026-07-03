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
const SvgSystemIos16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 17,
        fill: "none",
        viewBox: "0 0 16 17"
    }, props), /*#__PURE__*/ createElement("path", {
        stroke: "#515358",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M10.98 4.543c.84.068 1.483.318 1.972.732-2.274 1.995-1.684 5.384.591 6.811-.435 1.022-.966 1.942-1.728 2.65a1 1 0 0 0-.1.082c-.307.298-.593.397-.866.41-.3.015-.644-.07-1.05-.246l-.01-.005c-1.148-.479-2.244-.51-3.462.001l-.007.003c-.58.25-.92.292-1.15.26-.212-.03-.434-.136-.752-.424-2.021-2.09-2.845-4.686-2.636-6.729.104-1.02.46-1.87 1.014-2.471.538-.584 1.302-.976 2.331-1.039.467.03.88.161 1.297.314l.166.062c.357.134.804.302 1.224.332a.8.8 0 0 0 .202-.013c.43-.088.877-.242 1.264-.376q.2-.07.376-.127c.496-.161.913-.256 1.324-.227Zm-1.502-2.25c-.28.273-.591.478-.88.606.223-.864.87-1.579 1.688-1.93-.137.505-.43.959-.808 1.325Z"
    }));
const System_ios_16 = SvgSystemIos16;
export { System_ios_16 as default };
