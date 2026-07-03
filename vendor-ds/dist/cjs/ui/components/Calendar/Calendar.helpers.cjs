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
    getNextDay: ()=>getNextDay,
    getFirstDayOfMonth: ()=>getFirstDayOfMonth,
    getPreviousDay: ()=>getPreviousDay,
    getDateList: ()=>getDateList,
    getDayWeekAfter: ()=>getDayWeekAfter,
    getDayWeekAgo: ()=>getDayWeekAgo,
    getLastDayOfMonth: ()=>getLastDayOfMonth,
    isValidDate: ()=>isValidDate
});
const external_date_fns_namespaceObject = require("date-fns");
const external_Calendar_consts_cjs_namespaceObject = require("./Calendar.consts.cjs");
const getPageStartDate = (date)=>{
    if (external_Calendar_consts_cjs_namespaceObject.startOfWeekIndex === external_Calendar_consts_cjs_namespaceObject.SUNDAY_INDEX) return (0, external_date_fns_namespaceObject.isSunday)(date) ? date : (0, external_date_fns_namespaceObject.previousSunday)(date);
    return (0, external_date_fns_namespaceObject.isMonday)(date) ? date : (0, external_date_fns_namespaceObject.previousMonday)(date);
};
const getDateList = (month, year)=>{
    const firstDayOfMonth = new Date(year, month, 1);
    const start = getPageStartDate(firstDayOfMonth);
    const end = (0, external_date_fns_namespaceObject.addDays)(start, external_Calendar_consts_cjs_namespaceObject.DAYS_PER_PAGE - 1);
    return (0, external_date_fns_namespaceObject.eachDayOfInterval)({
        start,
        end
    });
};
const getPreviousDay = (date)=>(0, external_date_fns_namespaceObject.subDays)(date, 1);
const getNextDay = (date)=>(0, external_date_fns_namespaceObject.addDays)(date, 1);
const getDayWeekAgo = (date)=>(0, external_date_fns_namespaceObject.subWeeks)(date, 1);
const getDayWeekAfter = (date)=>(0, external_date_fns_namespaceObject.addWeeks)(date, 1);
const isValidDate = (date)=>date instanceof Date && !Number.isNaN(date.getTime());
const getFirstDayOfMonth = (date)=>new Date(date.getFullYear(), date.getMonth(), 1);
const getLastDayOfMonth = (date)=>new Date(date.getFullYear(), date.getMonth() + 1, 0);
exports.getDateList = __webpack_exports__.getDateList;
exports.getDayWeekAfter = __webpack_exports__.getDayWeekAfter;
exports.getDayWeekAgo = __webpack_exports__.getDayWeekAgo;
exports.getFirstDayOfMonth = __webpack_exports__.getFirstDayOfMonth;
exports.getLastDayOfMonth = __webpack_exports__.getLastDayOfMonth;
exports.getNextDay = __webpack_exports__.getNextDay;
exports.getPreviousDay = __webpack_exports__.getPreviousDay;
exports.isValidDate = __webpack_exports__.isValidDate;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "getDateList",
    "getDayWeekAfter",
    "getDayWeekAgo",
    "getFirstDayOfMonth",
    "getLastDayOfMonth",
    "getNextDay",
    "getPreviousDay",
    "isValidDate"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
