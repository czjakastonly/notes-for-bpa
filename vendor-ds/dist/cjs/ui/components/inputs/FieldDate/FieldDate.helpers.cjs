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
    parseDateString: ()=>parseDateString,
    userDateFormat: ()=>userDateFormat,
    getDateString: ()=>getDateString
});
const external_date_fns_namespaceObject = require("date-fns");
const Calendar_consts_cjs_namespaceObject = require("../../Calendar/Calendar.consts.cjs");
const Calendar_helpers_cjs_namespaceObject = require("../../Calendar/Calendar.helpers.cjs");
const getUserDateFormat = ()=>{
    const userLocale = window.navigator.language;
    const formatParts = new Intl.DateTimeFormat(userLocale).formatToParts(new Date());
    const formatMap = {
        year: 'yyyy',
        month: 'MM',
        day: 'dd'
    };
    return formatParts.map((part)=>formatMap[part.type] || part.value).join('');
};
const userDateFormat = getUserDateFormat();
const LITERAL_REGEXP = /[\s,./-]/;
const lowerCasedMonthNameList = Calendar_consts_cjs_namespaceObject.monthNameList.map((name)=>name.toLowerCase());
const lowerCasedEnglishMonthNameList = Calendar_consts_cjs_namespaceObject.englishMonthNameList.map((name)=>name.toLowerCase());
const isYear = (num)=>num > 1900 && num < 9999;
const isDay = (num)=>num > 12 && num <= 31;
const isMonth = (num)=>num >= 1 && num <= 12;
const getMonthIndexFromString = (monthString)=>{
    const lowerCased = monthString.toLowerCase();
    let index = lowerCasedMonthNameList.findIndex((name)=>name.startsWith(lowerCased));
    if (-1 === index) index = lowerCasedEnglishMonthNameList.findIndex((name)=>name.startsWith(lowerCased));
    return -1 === index ? null : index;
};
const parseDateString = (dateString, dateFormat = userDateFormat)=>{
    if (!dateString) return;
    const parts = dateString.split(LITERAL_REGEXP).filter(Boolean);
    if (3 !== parts.length) return;
    let day = null;
    let month = null;
    let year = null;
    const formatOrder = Array.from(new Set(dateFormat.replaceAll(/[^dmy]/gi, '')));
    if (3 !== formatOrder.length) return;
    parts.forEach((part, index)=>{
        const num = Number.parseInt(part, 10);
        if (isYear(num)) {
            year = num;
            return;
        }
        if (Number.isNaN(num)) {
            const monthIndex = getMonthIndexFromString(part);
            if (null !== monthIndex) month = monthIndex + 1;
            return;
        }
        if (isDay(num)) {
            day = num;
            return;
        }
        if (isMonth(num)) {
            const isDayOrder = 'd' === formatOrder[index];
            if (isDayOrder && null === day) day = num;
            else if (!isDayOrder && null === month) month = num;
        }
    });
    const remainingPart = parts.find((part)=>{
        const num = Number.parseInt(part, 10);
        return !Number.isNaN(num) && num !== year && num !== day && num !== month;
    });
    if (remainingPart) {
        const num = Number.parseInt(remainingPart, 10);
        if (null === day) day = num;
        else if (null === month) month = num;
    }
    if (null === day || null === month || null === year) return;
    const date = new Date(year, month - 1, day);
    return (0, Calendar_helpers_cjs_namespaceObject.isValidDate)(date) ? date : void 0;
};
const getDateString = (dateValue, dateFormat)=>{
    if (!dateValue) return;
    const potentialDate = 'string' == typeof dateValue ? parseDateString(dateValue, dateFormat) : dateValue;
    if (potentialDate) return (0, external_date_fns_namespaceObject.format)(potentialDate, dateFormat);
    if ('string' == typeof dateValue) return dateValue;
};
exports.getDateString = __webpack_exports__.getDateString;
exports.parseDateString = __webpack_exports__.parseDateString;
exports.userDateFormat = __webpack_exports__.userDateFormat;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "getDateString",
    "parseDateString",
    "userDateFormat"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
