import { PIXEL_MULTIPLICATOR } from "./Flex.consts.js";
const calcValue = (value)=>{
    if ('number' == typeof value) return `${value * PIXEL_MULTIPLICATOR}px`;
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
export { calcValue, combineSpacingValues };
