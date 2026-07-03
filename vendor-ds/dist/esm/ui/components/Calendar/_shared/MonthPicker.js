import react, { useCallback, useRef, useState } from "react";
import { useDomId } from "../../../utils/domId.js";
import { CalendarStyles } from "./styles.js";
import { DECEMBER_INDEX, JANUARY_INDEX, MONTHS_IN_YEAR, MONTHS_PER_COLUMN, monthNameList, today } from "../Calendar.consts.js";
import { Header } from "./Header.js";
const MonthPicker = ({ onMonthClick, selectedDate, activeMonth, setActiveYear, activeYear, onTitleClick, currentMonthLabel = 'Current month', monthsInYearLabel = 'Months in', calendarNavigationLabel, previousLabel, nextLabel })=>{
    const domId = useDomId();
    const gridRef = useRef(null);
    const [focusableMonth, setFocusableMonth] = useState((null == selectedDate ? void 0 : selectedDate.getMonth()) || today.getMonth());
    const onPrevClick = useCallback(()=>setActiveYear(activeYear - 1), [
        activeYear,
        setActiveYear
    ]);
    const onNextClick = useCallback(()=>setActiveYear(activeYear + 1), [
        activeYear,
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
        let monthToFocus;
        if ('ArrowLeft' === event.key) monthToFocus = focusableMonth === JANUARY_INDEX ? DECEMBER_INDEX : focusableMonth - 1;
        if ('ArrowRight' === event.key) monthToFocus = focusableMonth === DECEMBER_INDEX ? JANUARY_INDEX : focusableMonth + 1;
        if ('ArrowUp' === event.key) {
            monthToFocus = focusableMonth - MONTHS_PER_COLUMN;
            monthToFocus = monthToFocus < JANUARY_INDEX ? monthToFocus + MONTHS_IN_YEAR : monthToFocus;
        }
        if ('ArrowDown' === event.key) {
            monthToFocus = focusableMonth + MONTHS_PER_COLUMN;
            monthToFocus = monthToFocus > DECEMBER_INDEX ? monthToFocus - MONTHS_IN_YEAR : monthToFocus;
        }
        if ('Home' === event.key) monthToFocus = JANUARY_INDEX;
        if ('End' === event.key) monthToFocus = DECEMBER_INDEX;
        if (void 0 === monthToFocus) return;
        setFocusableMonth(monthToFocus);
        requestAnimationFrame(()=>{
            var _gridRef_current;
            const buttonToFocus = null == (_gridRef_current = gridRef.current) ? void 0 : _gridRef_current.querySelector('button[tabIndex="0"]');
            null == buttonToFocus || buttonToFocus.focus();
        });
    }, [
        focusableMonth
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
    }, activeYear), /*#__PURE__*/ react.createElement(CalendarStyles.MonthGrid, {
        onKeyDown: onGridKeyDown,
        ref: gridRef,
        role: "grid",
        "aria-label": `${monthsInYearLabel} ${activeYear}`,
        "aria-activedescendant": `${domId}-${focusableMonth + 1}-${activeYear}`
    }, monthNameList.map((month, index)=>/*#__PURE__*/ react.createElement(CalendarStyles.MonthButton, {
            key: month,
            id: `${domId}-${index + 1}-${activeYear}`,
            tabIndex: index === focusableMonth ? 0 : -1,
            onClick: onMonthClick ? ()=>onMonthClick(index) : void 0,
            isCurrentMonth: index === today.getMonth(),
            isSelected: index === activeMonth,
            role: "gridcell",
            "aria-selected": index === activeMonth,
            "aria-label": `${month} ${activeYear}${index === today.getMonth() ? `, ${currentMonthLabel}` : ''}`
        }, month))));
};
export { MonthPicker };
