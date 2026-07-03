import react, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useDomId } from "../../../utils/domId.js";
import { DECEMBER_INDEX, JANUARY_INDEX, monthNameList, today, weekDayNameList } from "../Calendar.consts.js";
import { CalendarStyles } from "./styles.js";
import { getDateList, getDayWeekAfter, getDayWeekAgo, getFirstDayOfMonth, getLastDayOfMonth, getNextDay, getPreviousDay } from "../Calendar.helpers.js";
import { Header } from "./Header.js";
const getDayIdFromDateStr = ({ dateStr, domId })=>`${domId}-${dateStr.replaceAll(/\s/g, '-')}`;
const DayPicker = ({ activeMonth, activeYear, selectedDate, onDayClick, setActiveMonth, setActiveYear, onTitleClick, getIsDateDisabled, todayLabel = 'Today', calendarNavigationLabel, previousLabel, nextLabel })=>{
    const domId = useDomId();
    const gridRef = useRef(null);
    const dayList = useMemo(()=>getDateList(activeMonth, activeYear).map((date)=>{
            const dateStr = date.toDateString();
            return {
                dateObj: date,
                dateNumber: date.getDate(),
                dateStr,
                isToday: dateStr === today.toDateString(),
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
    const [focusableDay, setFocusableDay] = useState();
    const onPrevClick = useCallback(()=>{
        const newMonth = activeMonth === JANUARY_INDEX ? DECEMBER_INDEX : activeMonth - 1;
        const newYear = activeMonth === JANUARY_INDEX ? activeYear - 1 : activeYear;
        setActiveMonth(newMonth);
        setActiveYear(newYear);
    }, [
        activeMonth,
        activeYear,
        setActiveMonth,
        setActiveYear
    ]);
    const onNextClick = useCallback(()=>{
        const newMonth = activeMonth === DECEMBER_INDEX ? JANUARY_INDEX : activeMonth + 1;
        const newYear = activeMonth === DECEMBER_INDEX ? activeYear + 1 : activeYear;
        setActiveMonth(newMonth);
        setActiveYear(newYear);
    }, [
        activeMonth,
        activeYear,
        setActiveMonth,
        setActiveYear
    ]);
    const onGridKeyDown = useCallback((event)=>{
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
        if ('ArrowLeft' === event.key) dayToFocus = getPreviousDay(currentDay.dateObj);
        if ('ArrowRight' === event.key) dayToFocus = getNextDay(currentDay.dateObj);
        if ('ArrowUp' === event.key) dayToFocus = getDayWeekAgo(currentDay.dateObj);
        if ('ArrowDown' === event.key) dayToFocus = getDayWeekAfter(currentDay.dateObj);
        if ('Home' === event.key) dayToFocus = getFirstDayOfMonth(currentDay.dateObj);
        if ('End' === event.key) dayToFocus = getLastDayOfMonth(currentDay.dateObj);
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
    useEffect(()=>{
        if (dayList.some((day)=>day.dateStr === focusableDay && day.isCurrentMonth)) return;
        const selectedDay = dayList.find((day)=>day.isSelected && !day.isDisabled);
        const firstActiveDayOfCurrentMonth = dayList.find((day)=>day.isCurrentMonth && !day.isDisabled);
        if (selectedDay) setFocusableDay(selectedDay.dateStr);
        else if (firstActiveDayOfCurrentMonth) setFocusableDay(firstActiveDayOfCurrentMonth.dateStr);
    }, [
        dayList,
        focusableDay
    ]);
    return /*#__PURE__*/ react.createElement("div", {
        role: "application",
        id: domId
    }, /*#__PURE__*/ react.createElement(Header, {
        onPrevClick: onPrevClick,
        onNextClick: onNextClick,
        onTextClick: onTitleClick,
        calendarNavigationLabel: calendarNavigationLabel,
        previousLabel: previousLabel,
        nextLabel: nextLabel
    }, monthNameList[activeMonth], " ", activeYear), /*#__PURE__*/ react.createElement(CalendarStyles.DayPickerWrapper, null, /*#__PURE__*/ react.createElement(CalendarStyles.WeekDayWrapper, {
        role: "row"
    }, weekDayNameList.map((weekDay)=>/*#__PURE__*/ react.createElement(CalendarStyles.WeekDay, {
            key: weekDay,
            role: "columnheader",
            "aria-label": weekDay
        }, weekDay))), /*#__PURE__*/ react.createElement(CalendarStyles.DayGrid, {
        onKeyDown: onGridKeyDown,
        ref: gridRef,
        role: "grid",
        "aria-label": `${monthNameList[activeMonth]} ${activeYear}`,
        "aria-activedescendant": focusableDay ? getDayIdFromDateStr({
            dateStr: focusableDay,
            domId
        }) : void 0
    }, dayList.map((day)=>/*#__PURE__*/ react.createElement(CalendarStyles.DayButton, {
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
export { DayPicker };
