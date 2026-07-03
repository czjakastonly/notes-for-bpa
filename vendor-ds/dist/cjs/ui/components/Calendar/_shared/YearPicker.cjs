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
    YearPicker: ()=>YearPicker
});
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/ __webpack_require__.n(external_react_namespaceObject);
const domId_cjs_namespaceObject = require("../../../utils/domId.cjs");
const external_styles_cjs_namespaceObject = require("./styles.cjs");
const external_Header_cjs_namespaceObject = require("./Header.cjs");
const external_Calendar_consts_cjs_namespaceObject = require("../Calendar.consts.cjs");
const getYearList = (activeYear)=>{
    const currentYear = external_Calendar_consts_cjs_namespaceObject.today.getFullYear();
    const isCurrentYearWithinRange = currentYear - 18 <= activeYear && activeYear <= currentYear + 1;
    if (isCurrentYearWithinRange) return Array.from({
        length: external_Calendar_consts_cjs_namespaceObject.YEARS_PER_PAGE
    }, (_, i)=>currentYear - 18 + i);
    return Array.from({
        length: external_Calendar_consts_cjs_namespaceObject.YEARS_PER_PAGE
    }, (_, i)=>activeYear - external_Calendar_consts_cjs_namespaceObject.MIDDLE_YEAR_INDEX + i);
};
const YearPicker = ({ onYearClick, activeYear, selectedDate, currentYearLabel = 'Current year', calendarNavigationLabel, previousLabel, nextLabel })=>{
    const domId = (0, domId_cjs_namespaceObject.useDomId)();
    const [yearRange, setYearRange] = (0, external_react_namespaceObject.useState)(()=>getYearList(activeYear));
    const gridRef = (0, external_react_namespaceObject.useRef)(null);
    const [focusableYear, setFocusableYear] = (0, external_react_namespaceObject.useState)((null == selectedDate ? void 0 : selectedDate.getFullYear()) || external_Calendar_consts_cjs_namespaceObject.today.getFullYear());
    (0, external_react_namespaceObject.useEffect)(()=>{
        if (!focusableYear || !yearRange.includes(focusableYear)) setFocusableYear(yearRange[0]);
    }, [
        focusableYear,
        yearRange
    ]);
    const onPrevClick = (0, external_react_namespaceObject.useCallback)(()=>setYearRange((curr)=>curr.map((year)=>year - external_Calendar_consts_cjs_namespaceObject.YEARS_PER_PAGE)), []);
    const onNextClick = (0, external_react_namespaceObject.useCallback)(()=>setYearRange((curr)=>curr.map((year)=>year + external_Calendar_consts_cjs_namespaceObject.YEARS_PER_PAGE)), []);
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
        let yearToFocus;
        if ('ArrowLeft' === event.key) yearToFocus = focusableYear - 1;
        if ('ArrowRight' === event.key) yearToFocus = focusableYear + 1;
        if ('ArrowUp' === event.key) yearToFocus = focusableYear - external_Calendar_consts_cjs_namespaceObject.YEARS_PER_COLUMN;
        if ('ArrowDown' === event.key) yearToFocus = focusableYear + external_Calendar_consts_cjs_namespaceObject.YEARS_PER_COLUMN;
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
    return /*#__PURE__*/ external_react_default().createElement("div", {
        role: "application",
        id: domId
    }, /*#__PURE__*/ external_react_default().createElement(external_Header_cjs_namespaceObject.Header, {
        onPrevClick: onPrevClick,
        onNextClick: onNextClick,
        calendarNavigationLabel: calendarNavigationLabel,
        previousLabel: previousLabel,
        nextLabel: nextLabel
    }, yearRange[0], ' - ', yearRange[yearRange.length - 1]), /*#__PURE__*/ external_react_default().createElement(external_styles_cjs_namespaceObject.CalendarStyles.YearGrid, {
        onKeyDown: onGridKeyDown,
        ref: gridRef,
        role: "grid",
        "aria-label": `${yearRange[0]} - ${yearRange[yearRange.length - 1]}`,
        "aria-activedescendant": `${domId}-year-${focusableYear}`
    }, yearRange.map((year)=>/*#__PURE__*/ external_react_default().createElement(external_styles_cjs_namespaceObject.CalendarStyles.YearButton, {
            key: year,
            id: `${domId}-year-${year}`,
            tabIndex: year === focusableYear ? 0 : -1,
            onClick: onYearClick ? ()=>onYearClick(year) : void 0,
            isCurrentYear: year === external_Calendar_consts_cjs_namespaceObject.today.getFullYear(),
            isSelected: year === activeYear,
            role: "gridcell",
            "aria-selected": year === activeYear,
            "aria-label": `${year}${year === external_Calendar_consts_cjs_namespaceObject.today.getFullYear() ? `, ${currentYearLabel}` : ''}`
        }, year))));
};
exports.YearPicker = __webpack_exports__.YearPicker;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "YearPicker"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
