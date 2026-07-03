import * as __rspack_external_date_fns_locale_bb195d4e from "date-fns/locale";
const CALENDAR_SCREEN_TYPE = {
    DAY: 'day',
    MONTH: 'month',
    YEAR: 'year'
};
const DAYS_PER_PAGE = 42;
const DAYS_IN_WEEK = 7;
const MONDAY_INDEX = 1;
const SUNDAY_INDEX = 0;
const startOfWeekByLanguageCode = Object.fromEntries(Object.values(__rspack_external_date_fns_locale_bb195d4e).map((locale)=>{
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
export { CALENDAR_SCREEN_TYPE, DAYS_IN_WEEK, DAYS_PER_PAGE, DECEMBER_INDEX, JANUARY_INDEX, MIDDLE_YEAR_INDEX, MONDAY_INDEX, MONTHS_IN_YEAR, MONTHS_PER_COLUMN, SUNDAY_INDEX, YEARS_PER_COLUMN, YEARS_PER_PAGE, englishMonthNameList, monthNameList, startOfWeekIndex, today, weekDayNameList };
