"use strict";
var __webpack_require__ = {};
(()=>{
    __webpack_require__.n = (module)=>{
        var getter = module && module.__esModule ? ()=>module['default'] : ()=>module;
        __webpack_require__.d(getter, {
            a: getter
        });
        return getter;
    };
})();
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
    Calendar: ()=>Calendar
});
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/ __webpack_require__.n(external_react_namespaceObject);
const DayPicker_cjs_namespaceObject = require("./_shared/DayPicker.cjs");
const MonthPicker_cjs_namespaceObject = require("./_shared/MonthPicker.cjs");
const YearPicker_cjs_namespaceObject = require("./_shared/YearPicker.cjs");
const external_Calendar_consts_cjs_namespaceObject = require("./Calendar.consts.cjs");
const styles_cjs_namespaceObject = require("./_shared/styles.cjs");
const external_Calendar_helpers_cjs_namespaceObject = require("./Calendar.helpers.cjs");
function _object_without_properties(source, excluded) {
    if (null == source) return {};
    var target = {}, sourceKeys, key, i;
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        sourceKeys = Reflect.ownKeys(Object(source));
        for(i = 0; i < sourceKeys.length; i++){
            key = sourceKeys[i];
            if (!(excluded.indexOf(key) >= 0)) {
                if (Object.prototype.propertyIsEnumerable.call(source, key)) target[key] = source[key];
            }
        }
        return target;
    }
    target = _object_without_properties_loose(source, excluded);
    if (Object.getOwnPropertySymbols) {
        sourceKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceKeys.length; i++){
            key = sourceKeys[i];
            if (!(excluded.indexOf(key) >= 0)) {
                if (Object.prototype.propertyIsEnumerable.call(source, key)) target[key] = source[key];
            }
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (null == source) return {};
    var target = {}, sourceKeys = Object.getOwnPropertyNames(source), key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (!(excluded.indexOf(key) >= 0)) {
            if (Object.prototype.propertyIsEnumerable.call(source, key)) target[key] = source[key];
        }
    }
    return target;
}
const Calendar = (_0)=>{
    let { value, onSelect, isFutureDisabled, isPastDisabled, translations } = _0, restDivAttributes = _object_without_properties(_0, [
        "value",
        "onSelect",
        "isFutureDisabled",
        "isPastDisabled",
        "translations"
    ]);
    const [currentScreen, setCurrentScreen] = (0, external_react_namespaceObject.useState)(external_Calendar_consts_cjs_namespaceObject.CALENDAR_SCREEN_TYPE.DAY);
    const [activeMonth, setActiveMonth] = (0, external_react_namespaceObject.useState)(()=>(0, external_Calendar_helpers_cjs_namespaceObject.isValidDate)(value) ? value.getMonth() : external_Calendar_consts_cjs_namespaceObject.today.getMonth());
    const [activeYear, setActiveYear] = (0, external_react_namespaceObject.useState)(()=>(0, external_Calendar_helpers_cjs_namespaceObject.isValidDate)(value) ? value.getFullYear() : external_Calendar_consts_cjs_namespaceObject.today.getFullYear());
    const onDayClick = (0, external_react_namespaceObject.useCallback)((date)=>{
        if ('function' == typeof onSelect) onSelect(date);
        if (date) {
            setActiveMonth(date.getMonth());
            setActiveYear(date.getFullYear());
        }
    }, [
        onSelect
    ]);
    const onMonthClick = (0, external_react_namespaceObject.useCallback)((monthIndex)=>{
        setActiveMonth(monthIndex);
        setCurrentScreen(external_Calendar_consts_cjs_namespaceObject.CALENDAR_SCREEN_TYPE.DAY);
    }, []);
    const onYearClick = (0, external_react_namespaceObject.useCallback)((year)=>{
        setActiveYear(year);
        setCurrentScreen(external_Calendar_consts_cjs_namespaceObject.CALENDAR_SCREEN_TYPE.MONTH);
    }, []);
    const getIsDateDisabled = (0, external_react_namespaceObject.useCallback)((date)=>isPastDisabled && date < external_Calendar_consts_cjs_namespaceObject.today || isFutureDisabled && date > external_Calendar_consts_cjs_namespaceObject.today || false, [
        isFutureDisabled,
        isPastDisabled
    ]);
    (0, external_react_namespaceObject.useEffect)(()=>{
        if ((0, external_Calendar_helpers_cjs_namespaceObject.isValidDate)(value)) {
            setActiveMonth(value.getMonth());
            setActiveYear(value.getFullYear());
        }
    }, [
        value
    ]);
    if (!currentScreen) return null;
    return /*#__PURE__*/ external_react_default().createElement(styles_cjs_namespaceObject.CalendarStyles.CalendarWrapper, restDivAttributes, currentScreen === external_Calendar_consts_cjs_namespaceObject.CALENDAR_SCREEN_TYPE.DAY && /*#__PURE__*/ external_react_default().createElement(DayPicker_cjs_namespaceObject.DayPicker, {
        onDayClick: onDayClick,
        selectedDate: (0, external_Calendar_helpers_cjs_namespaceObject.isValidDate)(value) ? value : void 0,
        activeYear: activeYear,
        setActiveYear: setActiveYear,
        activeMonth: activeMonth,
        setActiveMonth: setActiveMonth,
        onTitleClick: ()=>setCurrentScreen(external_Calendar_consts_cjs_namespaceObject.CALENDAR_SCREEN_TYPE.MONTH),
        getIsDateDisabled: getIsDateDisabled,
        todayLabel: null == translations ? void 0 : translations.todayLabel,
        calendarNavigationLabel: null == translations ? void 0 : translations.calendarNavigationLabel,
        previousLabel: null == translations ? void 0 : translations.previousLabel,
        nextLabel: null == translations ? void 0 : translations.nextLabel
    }), currentScreen === external_Calendar_consts_cjs_namespaceObject.CALENDAR_SCREEN_TYPE.MONTH && /*#__PURE__*/ external_react_default().createElement(MonthPicker_cjs_namespaceObject.MonthPicker, {
        onMonthClick: onMonthClick,
        selectedDate: (0, external_Calendar_helpers_cjs_namespaceObject.isValidDate)(value) ? value : void 0,
        activeYear: activeYear,
        activeMonth: activeMonth,
        setActiveYear: setActiveYear,
        onTitleClick: ()=>setCurrentScreen(external_Calendar_consts_cjs_namespaceObject.CALENDAR_SCREEN_TYPE.YEAR),
        calendarNavigationLabel: null == translations ? void 0 : translations.calendarNavigationLabel,
        previousLabel: null == translations ? void 0 : translations.previousLabel,
        nextLabel: null == translations ? void 0 : translations.nextLabel,
        currentMonthLabel: null == translations ? void 0 : translations.currentMonthLabel,
        monthsInYearLabel: null == translations ? void 0 : translations.monthsInYearLabel
    }), currentScreen === external_Calendar_consts_cjs_namespaceObject.CALENDAR_SCREEN_TYPE.YEAR && /*#__PURE__*/ external_react_default().createElement(YearPicker_cjs_namespaceObject.YearPicker, {
        onYearClick: onYearClick,
        selectedDate: (0, external_Calendar_helpers_cjs_namespaceObject.isValidDate)(value) ? value : void 0,
        activeYear: activeYear,
        calendarNavigationLabel: null == translations ? void 0 : translations.calendarNavigationLabel,
        previousLabel: null == translations ? void 0 : translations.previousLabel,
        nextLabel: null == translations ? void 0 : translations.nextLabel,
        currentYearLabel: null == translations ? void 0 : translations.currentYearLabel
    }));
};
exports.Calendar = __webpack_exports__.Calendar;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "Calendar"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
