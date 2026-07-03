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
    DECEMBER_INDEX: ()=>DECEMBER_INDEX,
    today: ()=>today,
    MIDDLE_YEAR_INDEX: ()=>MIDDLE_YEAR_INDEX,
    englishMonthNameList: ()=>englishMonthNameList,
    MONTHS_IN_YEAR: ()=>MONTHS_IN_YEAR,
    DAYS_PER_PAGE: ()=>DAYS_PER_PAGE,
    JANUARY_INDEX: ()=>JANUARY_INDEX,
    YEARS_PER_PAGE: ()=>YEARS_PER_PAGE,
    MONDAY_INDEX: ()=>MONDAY_INDEX,
    DAYS_IN_WEEK: ()=>DAYS_IN_WEEK,
    YEARS_PER_COLUMN: ()=>YEARS_PER_COLUMN,
    MONTHS_PER_COLUMN: ()=>MONTHS_PER_COLUMN,
    monthNameList: ()=>monthNameList,
    SUNDAY_INDEX: ()=>SUNDAY_INDEX,
    startOfWeekIndex: ()=>startOfWeekIndex,
    CALENDAR_SCREEN_TYPE: ()=>CALENDAR_SCREEN_TYPE,
    weekDayNameList: ()=>weekDayNameList
});
const locale_namespaceObject = require("date-fns/locale");
const CALENDAR_SCREEN_TYPE = {
    DAY: 'day',
    MONTH: 'month',
    YEAR: 'year'
};
const DAYS_PER_PAGE = 42;
const DAYS_IN_WEEK = 7;
const MONDAY_INDEX = 1;
const SUNDAY_INDEX = 0;
const startOfWeekByLanguageCode = Object.fromEntries(Object.values(locale_namespaceObject).map((locale)=>{
    var _locale_options;
    return [
        locale.code,
        null == (_locale_options = locale.options) ? void 0 : _locale_options.weekStartsOn
    ];
}));
const startOfWeekIndex = (()=>{
    const index = startOfWeekByLanguageCode[navigator.language] || startOfWeekByLanguageCode[navigator.language.split('-')[0]];
    return 1 === index ? MONDAY_INDEX : SUNDAY_INDEX;
})();
const weekDayNameList = Array.from({
    length: DAYS_IN_WEEK
}).map((_, i)=>new Intl.DateTimeFormat(void 0, {
        weekday: 'short'
    }).format(new Date(2024, 0, (startOfWeekIndex + i) % DAYS_IN_WEEK)));
const today = (()=>{
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    return date;
})();
const MONTHS_IN_YEAR = 12;
const MONTHS_PER_COLUMN = 3;
const monthNameList = Array.from({
    length: MONTHS_IN_YEAR
}).map((_, i)=>new Intl.DateTimeFormat(void 0, {
        month: 'long'
    }).format(new Date(2024, i, 1)));
const englishMonthNameList = Array.from({
    length: MONTHS_IN_YEAR
}).map((_, i)=>new Intl.DateTimeFormat('en', {
        month: 'long'
    }).format(new Date(2024, i, 1)));
const YEARS_PER_PAGE = 20;
const YEARS_PER_COLUMN = 4;
const MIDDLE_YEAR_INDEX = 9;
const JANUARY_INDEX = 0;
const DECEMBER_INDEX = 11;
exports.CALENDAR_SCREEN_TYPE = __webpack_exports__.CALENDAR_SCREEN_TYPE;
exports.DAYS_IN_WEEK = __webpack_exports__.DAYS_IN_WEEK;
exports.DAYS_PER_PAGE = __webpack_exports__.DAYS_PER_PAGE;
exports.DECEMBER_INDEX = __webpack_exports__.DECEMBER_INDEX;
exports.JANUARY_INDEX = __webpack_exports__.JANUARY_INDEX;
exports.MIDDLE_YEAR_INDEX = __webpack_exports__.MIDDLE_YEAR_INDEX;
exports.MONDAY_INDEX = __webpack_exports__.MONDAY_INDEX;
exports.MONTHS_IN_YEAR = __webpack_exports__.MONTHS_IN_YEAR;
exports.MONTHS_PER_COLUMN = __webpack_exports__.MONTHS_PER_COLUMN;
exports.SUNDAY_INDEX = __webpack_exports__.SUNDAY_INDEX;
exports.YEARS_PER_COLUMN = __webpack_exports__.YEARS_PER_COLUMN;
exports.YEARS_PER_PAGE = __webpack_exports__.YEARS_PER_PAGE;
exports.englishMonthNameList = __webpack_exports__.englishMonthNameList;
exports.monthNameList = __webpack_exports__.monthNameList;
exports.startOfWeekIndex = __webpack_exports__.startOfWeekIndex;
exports.today = __webpack_exports__.today;
exports.weekDayNameList = __webpack_exports__.weekDayNameList;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "CALENDAR_SCREEN_TYPE",
    "DAYS_IN_WEEK",
    "DAYS_PER_PAGE",
    "DECEMBER_INDEX",
    "JANUARY_INDEX",
    "MIDDLE_YEAR_INDEX",
    "MONDAY_INDEX",
    "MONTHS_IN_YEAR",
    "MONTHS_PER_COLUMN",
    "SUNDAY_INDEX",
    "YEARS_PER_COLUMN",
    "YEARS_PER_PAGE",
    "englishMonthNameList",
    "monthNameList",
    "startOfWeekIndex",
    "today",
    "weekDayNameList"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
