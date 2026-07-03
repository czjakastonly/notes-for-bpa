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
    MonthPicker: ()=>MonthPicker
});
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/ __webpack_require__.n(external_react_namespaceObject);
const domId_cjs_namespaceObject = require("../../../utils/domId.cjs");
const external_styles_cjs_namespaceObject = require("./styles.cjs");
const external_Calendar_consts_cjs_namespaceObject = require("../Calendar.consts.cjs");
const external_Header_cjs_namespaceObject = require("./Header.cjs");
const MonthPicker = ({ onMonthClick, selectedDate, activeMonth, setActiveYear, activeYear, onTitleClick, currentMonthLabel = 'Current month', monthsInYearLabel = 'Months in', calendarNavigationLabel, previousLabel, nextLabel })=>{
    const domId = (0, domId_cjs_namespaceObject.useDomId)();
    const gridRef = (0, external_react_namespaceObject.useRef)(null);
    const [focusableMonth, setFocusableMonth] = (0, external_react_namespaceObject.useState)((null == selectedDate ? void 0 : selectedDate.getMonth()) || external_Calendar_consts_cjs_namespaceObject.today.getMonth());
    const onPrevClick = (0, external_react_namespaceObject.useCallback)(()=>setActiveYear(activeYear - 1), [
        activeYear,
        setActiveYear
    ]);
    const onNextClick = (0, external_react_namespaceObject.useCallback)(()=>setActiveYear(activeYear + 1), [
        activeYear,
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
        let monthToFocus;
        if ('ArrowLeft' === event.key) monthToFocus = focusableMonth === external_Calendar_consts_cjs_namespaceObject.JANUARY_INDEX ? external_Calendar_consts_cjs_namespaceObject.DECEMBER_INDEX : focusableMonth - 1;
        if ('ArrowRight' === event.key) monthToFocus = focusableMonth === external_Calendar_consts_cjs_namespaceObject.DECEMBER_INDEX ? external_Calendar_consts_cjs_namespaceObject.JANUARY_INDEX : focusableMonth + 1;
        if ('ArrowUp' === event.key) {
            monthToFocus = focusableMonth - external_Calendar_consts_cjs_namespaceObject.MONTHS_PER_COLUMN;
            monthToFocus = monthToFocus < external_Calendar_consts_cjs_namespaceObject.JANUARY_INDEX ? monthToFocus + external_Calendar_consts_cjs_namespaceObject.MONTHS_IN_YEAR : monthToFocus;
        }
        if ('ArrowDown' === event.key) {
            monthToFocus = focusableMonth + external_Calendar_consts_cjs_namespaceObject.MONTHS_PER_COLUMN;
            monthToFocus = monthToFocus > external_Calendar_consts_cjs_namespaceObject.DECEMBER_INDEX ? monthToFocus - external_Calendar_consts_cjs_namespaceObject.MONTHS_IN_YEAR : monthToFocus;
        }
        if ('Home' === event.key) monthToFocus = external_Calendar_consts_cjs_namespaceObject.JANUARY_INDEX;
        if ('End' === event.key) monthToFocus = external_Calendar_consts_cjs_namespaceObject.DECEMBER_INDEX;
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
    }, activeYear), /*#__PURE__*/ external_react_default().createElement(external_styles_cjs_namespaceObject.CalendarStyles.MonthGrid, {
        onKeyDown: onGridKeyDown,
        ref: gridRef,
        role: "grid",
        "aria-label": `${monthsInYearLabel} ${activeYear}`,
        "aria-activedescendant": `${domId}-${focusableMonth + 1}-${activeYear}`
    }, external_Calendar_consts_cjs_namespaceObject.monthNameList.map((month, index)=>/*#__PURE__*/ external_react_default().createElement(external_styles_cjs_namespaceObject.CalendarStyles.MonthButton, {
            key: month,
            id: `${domId}-${index + 1}-${activeYear}`,
            tabIndex: index === focusableMonth ? 0 : -1,
            onClick: onMonthClick ? ()=>onMonthClick(index) : void 0,
            isCurrentMonth: index === external_Calendar_consts_cjs_namespaceObject.today.getMonth(),
            isSelected: index === activeMonth,
            role: "gridcell",
            "aria-selected": index === activeMonth,
            "aria-label": `${month} ${activeYear}${index === external_Calendar_consts_cjs_namespaceObject.today.getMonth() ? `, ${currentMonthLabel}` : ''}`
        }, month))));
};
exports.MonthPicker = __webpack_exports__.MonthPicker;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "MonthPicker"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
