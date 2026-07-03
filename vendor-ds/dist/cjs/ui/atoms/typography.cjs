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
    typography: ()=>typography
});
const fontWeight = {
    regular: 400,
    medium: 500,
    bold: 700
};
const typography = {
    h0: {
        fontSize: '32px',
        lineHeight: '48px',
        letterSpacing: '-0.02em',
        fontWeight: fontWeight.regular
    },
    h1: {
        fontSize: '28px',
        lineHeight: '40px',
        letterSpacing: '-0.02em',
        fontWeight: fontWeight.regular
    },
    h2: {
        fontSize: '24px',
        lineHeight: '32px',
        letterSpacing: '-0.02em',
        fontWeight: fontWeight.regular
    },
    h3: {
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '-0.02em',
        fontWeight: fontWeight.regular
    },
    h3Strong: {
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '-0.02em',
        fontWeight: fontWeight.medium
    },
    text0: {
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: fontWeight.regular
    },
    text1: {
        fontSize: '14px',
        lineHeight: '24px',
        fontWeight: fontWeight.regular
    },
    text1Strong: {
        fontSize: '14px',
        lineHeight: '24px',
        fontWeight: fontWeight.medium
    },
    text2: {
        fontSize: '12px',
        lineHeight: '20px',
        fontWeight: fontWeight.regular
    },
    label: {
        fontSize: '12px',
        lineHeight: '16px',
        textTransform: 'uppercase',
        fontWeight: fontWeight.medium
    },
    textSmall: {
        fontSize: '11px',
        lineHeight: '16px',
        fontWeight: fontWeight.medium
    },
    labelSmall: {
        fontSize: '10px',
        lineHeight: '12px',
        textTransform: 'uppercase',
        fontWeight: fontWeight.bold
    },
    uiElement: {
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: fontWeight.regular
    },
    uiElementStrong: {
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: fontWeight.medium
    },
    uiElementSmall: {
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: fontWeight.regular
    },
    uiElementSmallStrong: {
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: fontWeight.medium
    },
    uiElementLabel: {
        fontSize: '12px',
        lineHeight: '16px',
        textTransform: 'uppercase',
        fontWeight: fontWeight.medium
    },
    uiElementLabelSmall: {
        fontSize: '10px',
        lineHeight: '12px',
        textTransform: 'uppercase',
        fontWeight: fontWeight.bold
    },
    paragraph0: {
        fontSize: '16px',
        lineHeight: '28px',
        fontWeight: fontWeight.regular
    },
    paragraph1: {
        fontSize: '14px',
        lineHeight: '24px',
        fontWeight: fontWeight.regular
    },
    paragraph1Strong: {
        fontSize: '14px',
        lineHeight: '24px',
        fontWeight: fontWeight.medium
    },
    paragraph2: {
        fontSize: '12px',
        lineHeight: '20px',
        fontWeight: fontWeight.regular
    },
    paragraphSmall: {
        fontSize: '11px',
        lineHeight: '16px',
        fontWeight: fontWeight.medium
    }
};
exports.typography = __webpack_exports__.typography;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "typography"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
