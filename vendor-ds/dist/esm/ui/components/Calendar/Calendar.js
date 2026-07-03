import react, { useCallback, useEffect, useState } from "react";
import { DayPicker } from "./_shared/DayPicker.js";
import { MonthPicker } from "./_shared/MonthPicker.js";
import { YearPicker } from "./_shared/YearPicker.js";
import { CALENDAR_SCREEN_TYPE, today } from "./Calendar.consts.js";
import { CalendarStyles } from "./_shared/styles.js";
import { isValidDate } from "./Calendar.helpers.js";
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
    const [currentScreen, setCurrentScreen] = useState(CALENDAR_SCREEN_TYPE.DAY);
    const [activeMonth, setActiveMonth] = useState(()=>isValidDate(value) ? value.getMonth() : today.getMonth());
    const [activeYear, setActiveYear] = useState(()=>isValidDate(value) ? value.getFullYear() : today.getFullYear());
    const onDayClick = useCallback((date)=>{
        if ('function' == typeof onSelect) onSelect(date);
        if (date) {
            setActiveMonth(date.getMonth());
            setActiveYear(date.getFullYear());
        }
    }, [
        onSelect
    ]);
    const onMonthClick = useCallback((monthIndex)=>{
        setActiveMonth(monthIndex);
        setCurrentScreen(CALENDAR_SCREEN_TYPE.DAY);
    }, []);
    const onYearClick = useCallback((year)=>{
        setActiveYear(year);
        setCurrentScreen(CALENDAR_SCREEN_TYPE.MONTH);
    }, []);
    const getIsDateDisabled = useCallback((date)=>isPastDisabled && date < today || isFutureDisabled && date > today || false, [
        isFutureDisabled,
        isPastDisabled
    ]);
    useEffect(()=>{
        if (isValidDate(value)) {
            setActiveMonth(value.getMonth());
            setActiveYear(value.getFullYear());
        }
    }, [
        value
    ]);
    if (!currentScreen) return null;
    return /*#__PURE__*/ react.createElement(CalendarStyles.CalendarWrapper, restDivAttributes, currentScreen === CALENDAR_SCREEN_TYPE.DAY && /*#__PURE__*/ react.createElement(DayPicker, {
        onDayClick: onDayClick,
        selectedDate: isValidDate(value) ? value : void 0,
        activeYear: activeYear,
        setActiveYear: setActiveYear,
        activeMonth: activeMonth,
        setActiveMonth: setActiveMonth,
        onTitleClick: ()=>setCurrentScreen(CALENDAR_SCREEN_TYPE.MONTH),
        getIsDateDisabled: getIsDateDisabled,
        todayLabel: null == translations ? void 0 : translations.todayLabel,
        calendarNavigationLabel: null == translations ? void 0 : translations.calendarNavigationLabel,
        previousLabel: null == translations ? void 0 : translations.previousLabel,
        nextLabel: null == translations ? void 0 : translations.nextLabel
    }), currentScreen === CALENDAR_SCREEN_TYPE.MONTH && /*#__PURE__*/ react.createElement(MonthPicker, {
        onMonthClick: onMonthClick,
        selectedDate: isValidDate(value) ? value : void 0,
        activeYear: activeYear,
        activeMonth: activeMonth,
        setActiveYear: setActiveYear,
        onTitleClick: ()=>setCurrentScreen(CALENDAR_SCREEN_TYPE.YEAR),
        calendarNavigationLabel: null == translations ? void 0 : translations.calendarNavigationLabel,
        previousLabel: null == translations ? void 0 : translations.previousLabel,
        nextLabel: null == translations ? void 0 : translations.nextLabel,
        currentMonthLabel: null == translations ? void 0 : translations.currentMonthLabel,
        monthsInYearLabel: null == translations ? void 0 : translations.monthsInYearLabel
    }), currentScreen === CALENDAR_SCREEN_TYPE.YEAR && /*#__PURE__*/ react.createElement(YearPicker, {
        onYearClick: onYearClick,
        selectedDate: isValidDate(value) ? value : void 0,
        activeYear: activeYear,
        calendarNavigationLabel: null == translations ? void 0 : translations.calendarNavigationLabel,
        previousLabel: null == translations ? void 0 : translations.previousLabel,
        nextLabel: null == translations ? void 0 : translations.nextLabel,
        currentYearLabel: null == translations ? void 0 : translations.currentYearLabel
    }));
};
export { Calendar };
