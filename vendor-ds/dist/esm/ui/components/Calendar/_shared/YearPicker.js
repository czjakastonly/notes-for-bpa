import react, { useCallback, useEffect, useRef, useState } from "react";
import { useDomId } from "../../../utils/domId.js";
import { CalendarStyles } from "./styles.js";
import { Header } from "./Header.js";
import { MIDDLE_YEAR_INDEX, YEARS_PER_COLUMN, YEARS_PER_PAGE, today } from "../Calendar.consts.js";
const getYearList = (activeYear)=>{
    const currentYear = today.getFullYear();
    const isCurrentYearWithinRange = currentYear - 18 <= activeYear && activeYear <= currentYear + 1;
    if (isCurrentYearWithinRange) return Array.from({
        length: YEARS_PER_PAGE
    }, (_, i)=>currentYear - 18 + i);
    return Array.from({
        length: YEARS_PER_PAGE
    }, (_, i)=>activeYear - MIDDLE_YEAR_INDEX + i);
};
const YearPicker = ({ onYearClick, activeYear, selectedDate, currentYearLabel = 'Current year', calendarNavigationLabel, previousLabel, nextLabel })=>{
    const domId = useDomId();
    const [yearRange, setYearRange] = useState(()=>getYearList(activeYear));
    const gridRef = useRef(null);
    const [focusableYear, setFocusableYear] = useState((null == selectedDate ? void 0 : selectedDate.getFullYear()) || today.getFullYear());
    useEffect(()=>{
        if (!focusableYear || !yearRange.includes(focusableYear)) setFocusableYear(yearRange[0]);
    }, [
        focusableYear,
        yearRange
    ]);
    const onPrevClick = useCallback(()=>setYearRange((curr)=>curr.map((year)=>year - YEARS_PER_PAGE)), []);
    const onNextClick = useCallback(()=>setYearRange((curr)=>curr.map((year)=>year + YEARS_PER_PAGE)), []);
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
        let yearToFocus;
        if ('ArrowLeft' === event.key) yearToFocus = focusableYear - 1;
        if ('ArrowRight' === event.key) yearToFocus = focusableYear + 1;
        if ('ArrowUp' === event.key) yearToFocus = focusableYear - YEARS_PER_COLUMN;
        if ('ArrowDown' === event.key) yearToFocus = focusableYear + YEARS_PER_COLUMN;
        if ('Home' === event.key) yearToFocus = yearRange[0];
        if ('End' === event.key) yearToFocus = yearRange[yearRange.length - 1];
        if (void 0 === yearToFocus) return;
        setFocusableYear(yearToFocus);
        requestAnimationFrame(()=>{
            var _gridRef_current;
            const buttonToFocus = null == (_gridRef_current = gridRef.current) ? void 0 : _gridRef_current.querySelector('button[tabIndex="0"]');
            null == buttonToFocus || buttonToFocus.focus();
        });
        if (yearToFocus < yearRange[0]) onPrevClick();
        if (yearToFocus > yearRange[yearRange.length - 1]) onNextClick();
    }, [
        focusableYear,
        yearRange,
        onPrevClick,
        onNextClick
    ]);
    return /*#__PURE__*/ react.createElement("div", {
        role: "application",
        id: domId
    }, /*#__PURE__*/ react.createElement(Header, {
        onPrevClick: onPrevClick,
        onNextClick: onNextClick,
        calendarNavigationLabel: calendarNavigationLabel,
        previousLabel: previousLabel,
        nextLabel: nextLabel
    }, yearRange[0], ' - ', yearRange[yearRange.length - 1]), /*#__PURE__*/ react.createElement(CalendarStyles.YearGrid, {
        onKeyDown: onGridKeyDown,
        ref: gridRef,
        role: "grid",
        "aria-label": `${yearRange[0]} - ${yearRange[yearRange.length - 1]}`,
        "aria-activedescendant": `${domId}-year-${focusableYear}`
    }, yearRange.map((year)=>/*#__PURE__*/ react.createElement(CalendarStyles.YearButton, {
            key: year,
            id: `${domId}-year-${year}`,
            tabIndex: year === focusableYear ? 0 : -1,
            onClick: onYearClick ? ()=>onYearClick(year) : void 0,
            isCurrentYear: year === today.getFullYear(),
            isSelected: year === activeYear,
            role: "gridcell",
            "aria-selected": year === activeYear,
            "aria-label": `${year}${year === today.getFullYear() ? `, ${currentYearLabel}` : ''}`
        }, year))));
};
export { YearPicker };
