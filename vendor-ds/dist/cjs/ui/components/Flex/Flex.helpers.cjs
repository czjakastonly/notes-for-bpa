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
    combineSpacingValues: ()=>combineSpacingValues,
    calcValue: ()=>calcValue
});
const external_Flex_consts_cjs_namespaceObject = require("./Flex.consts.cjs");
const calcValue = (value)=>{
    if ('number' == typeof value) return `${value * external_Flex_consts_cjs_namespaceObject.PIXEL_MULTIPLICATOR}px`;
    return value || 0;
};
const combineSpacingValues = (value, valueX, valueY, valueTop, valueRight, valueBottom, valueLeft)=>{
    const valueArray = Array.from({
        length: 4
    }).fill(calcValue(value));
    if (void 0 !== valueX) {
        valueArray[1] = calcValue(valueX);
        valueArray[3] = calcValue(valueX);
    }
    if (void 0 !== valueY) {
        valueArray[0] = calcValue(valueY);
        valueArray[2] = calcValue(valueY);
    }
    if (void 0 !== valueTop) valueArray[0] = calcValue(valueTop);
    if (void 0 !== valueRight) valueArray[1] = calcValue(valueRight);
    if (void 0 !== valueBottom) valueArray[2] = calcValue(valueBottom);
    if (void 0 !== valueLeft) valueArray[3] = calcValue(valueLeft);
    return valueArray.join(' ');
};
exports.calcValue = __webpack_exports__.calcValue;
exports.combineSpacingValues = __webpack_exports__.combineSpacingValues;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "calcValue",
    "combineSpacingValues"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
