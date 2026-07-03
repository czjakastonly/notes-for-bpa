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
    DayPicker: ()=>DayPicker
});
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/ __webpack_require__.n(external_react_namespaceObject);
const domId_cjs_namespaceObject = require("../../../utils/domId.cjs");
const external_Calendar_consts_cjs_namespaceObject = require("../Calendar.consts.cjs");
const external_styles_cjs_namespaceObject = require("./styles.cjs");
const external_Calendar_helpers_cjs_namespaceObject = require("../Calendar.helpers.cjs");
const external_Header_cjs_namespaceObject = require("./Header.cjs");
const getDayIdFromDateStr = ({ dateStr, domId })=>`${domId}-${dateStr.replaceAll(/\s/g, '-')}`;
const DayPicker = ({ activeMonth, activeYear, selectedDate, onDayClick, setActiveMonth, setActiveYear, onTitleClick, getIsDateDisabled, todayLabel = 'Today', calendarNavigationLabel, previousLabel, nextLabel })=>{
    const domId = (0, domId_cjs_namespaceObject.useDomId)();
    const gridRef = (0, external_react_namespaceObject.useRef)(null);
    const dayList = (0, external_react_namespaceObject.useMemo)(()=>(0, external_Calendar_helpers_cjs_namespaceObject.getDateList)(activeMonth, activeYear).map((date)=>{
            const dateStr = date.toDateString();
            return {
                dateObj: date,
                dateNumber: date.getDate(),
                dateStr,
                isToday: dateStr === external_Calendar_consts_cjs_namespaceObject.today.toDateString(),
                isCurrentMonth: date.getMonth() === activeMonth,
                isSelected: dateStr === (null == selectedDate ? void 0 : selectedDate.toDateString()),
                monthNumber: date.getMonth(),
                yearNumber: date.getFullYear(),
                isDisabled: getIsDateDisabled(date)
            };
        }), [
        activeMonth,
        activeYear,
        selectedDate,
        getIsDateDisabled
    ]);
    const [focusableDay, setFocusableDay] = (0, external_react_namespaceObject.useState)();
    const onPrevClick = (0, external_react_namespaceObject.useCallback)(()=>{
        const newMonth = activeMonth === external_Calendar_consts_cjs_namespaceObject.JANUARY_INDEX ? external_Calendar_consts_cjs_namespaceObject.DECEMBER_INDEX : activeMonth - 1;
        const newYear = activeMonth === external_Calendar_consts_cjs_namespaceObject.JANUARY_INDEX ? activeYear - 1 : activeYear;
        setActiveMonth(newMonth);
        setActiveYear(newYear);
    }, [
        activeMonth,
        activeYear,
        setActiveMonth,
        setActiveYear
    ]);
    const onNextClick = (0, external_react_namespaceObject.useCallback)(()=>{
        const newMonth = activeMonth === external_Calendar_consts_cjs_namespaceObject.DECEMBER_INDEX ? external_Calendar_consts_cjs_namespaceObject.JANUARY_INDEX : activeMonth + 1;
        const newYear = activeMonth === external_Calendar_consts_cjs_namespaceObject.DECEMBER_INDEX ? activeYear + 1 : activeYear;
        setActiveMonth(newMonth);
        setActiveYear(newYear);
    }, [
        activeMonth,
        activeYear,
        setActiveMonth,
        setActiveYear
    ]);
    const onGridKeyDown = (0, external_react_namespaceObject.useCallback)((event)=>{
        event.stopPropagation();
        if (![
            'ArrowLeft',
            'ArrowRight',
            'ArrowUp',
            'ArrowDown',
            'Home',
            'End'
        ].includes(event.key)) return;
        event.preventDefault();
        const currentDay = dayList.find((day)=>day.dateStr === focusableDay);
        if (!currentDay) return;
        let dayToFocus;
        if ('ArrowLeft' === event.key) dayToFocus = (0, external_Calendar_helpers_cjs_namespaceObject.getPreviousDay)(currentDay.dateObj);
        if ('ArrowRight' === event.key) dayToFocus = (0, external_Calendar_helpers_cjs_namespaceObject.getNextDay)(currentDay.dateObj);
        if ('ArrowUp' === event.key) dayToFocus = (0, external_Calendar_helpers_cjs_namespaceObject.getDayWeekAgo)(currentDay.dateObj);
        if ('ArrowDown' === event.key) dayToFocus = (0, external_Calendar_helpers_cjs_namespaceObject.getDayWeekAfter)(currentDay.dateObj);
        if ('Home' === event.key) dayToFocus = (0, external_Calendar_helpers_cjs_namespaceObject.getFirstDayOfMonth)(currentDay.dateObj);
        if ('End' === event.key) dayToFocus = (0, external_Calendar_helpers_cjs_namespaceObject.getLastDayOfMonth)(currentDay.dateObj);
        if (!dayToFocus || getIsDateDisabled(dayToFocus)) return;
        const monthOfDayToFocus = dayToFocus.getMonth();
        const yearOfDayToFocus = dayToFocus.getFullYear();
        setFocusableDay(dayToFocus.toDateString());
        requestAnimationFrame(()=>{
            var _gridRef_current;
            const buttonToFocus = null == (_gridRef_current = gridRef.current) ? void 0 : _gridRef_current.querySelector('button[tabIndex="0"]');
            null == buttonToFocus || buttonToFocus.focus();
        });
        if (monthOfDayToFocus !== activeMonth) setActiveMonth(monthOfDayToFocus);
        if (yearOfDayToFocus !== activeYear) setActiveYear(yearOfDayToFocus);
    }, [
        focusableDay,
        dayList,
        activeMonth,
        activeYear,
        setActiveMonth,
        setActiveYear,
        getIsDateDisabled
    ]);
    (0, external_react_namespaceObject.useEffect)(()=>{
        if (dayList.some((day)=>day.dateStr === focusableDay && day.isCurrentMonth)) return;
        const selectedDay = dayList.find((day)=>day.isSelected && !day.isDisabled);
        const firstActiveDayOfCurrentMonth = dayList.find((day)=>day.isCurrentMonth && !day.isDisabled);
        if (selectedDay) setFocusableDay(selectedDay.dateStr);
        else if (firstActiveDayOfCurrentMonth) setFocusableDay(firstActiveDayOfCurrentMonth.dateStr);
    }, [
        dayList,
        focusableDay
    ]);
    return /*#__PURE__*/ external_react_default().createElement("div", {
        role: "application",
        id: domId
    }, /*#__PURE__*/ external_react_default().createElement(external_Header_cjs_namespaceObject.Header, {
        onPrevClick: onPrevClick,
        onNextClick: onNextClick,
        onTextClick: onTitleClick,
        calendarNavigationLabel: calendarNavigationLabel,
        previousLabel: previousLabel,
        nextLabel: nextLabel
    }, external_Calendar_consts_cjs_namespaceObject.monthNameList[activeMonth], " ", activeYear), /*#__PURE__*/ external_react_default().createElement(external_styles_cjs_namespaceObject.CalendarStyles.DayPickerWrapper, null, /*#__PURE__*/ external_react_default().createElement(external_styles_cjs_namespaceObject.CalendarStyles.WeekDayWrapper, {
        role: "row"
    }, external_Calendar_consts_cjs_namespaceObject.weekDayNameList.map((weekDay)=>/*#__PURE__*/ external_react_default().createElement(external_styles_cjs_namespaceObject.CalendarStyles.WeekDay, {
            key: weekDay,
            role: "columnheader",
            "aria-label": weekDay
        }, weekDay))), /*#__PURE__*/ external_react_default().createElement(external_styles_cjs_namespaceObject.CalendarStyles.DayGrid, {
        onKeyDown: onGridKeyDown,
        ref: gridRef,
        role: "grid",
        "aria-label": `${external_Calendar_consts_cjs_namespaceObject.monthNameList[activeMonth]} ${activeYear}`,
        "aria-activedescendant": focusableDay ? getDayIdFromDateStr({
            dateStr: focusableDay,
            domId
        }) : void 0
    }, dayList.map((day)=>/*#__PURE__*/ external_react_default().createElement(external_styles_cjs_namespaceObject.CalendarStyles.DayButton, {
            id: getDayIdFromDateStr({
                dateStr: day.dateStr,
                domId
            }),
            tabIndex: focusableDay === day.dateStr ? 0 : -1,
            key: day.dateStr,
            isCurrentMonth: day.isCurrentMonth,
            isToday: day.isToday,
            onClick: onDayClick ? ()=>onDayClick(day.dateObj) : void 0,
            isSelected: day.isSelected,
            disabled: day.isDisabled,
            role: "gridcell",
            "aria-selected": day.isSelected,
            "aria-label": `${day.dateStr}${day.isToday ? `, ${todayLabel}` : ''}`
        }, day.dateNumber)))));
};
exports.DayPicker = __webpack_exports__.DayPicker;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "DayPicker"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
