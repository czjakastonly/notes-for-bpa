import { format } from "date-fns";
import { englishMonthNameList, monthNameList } from "../../Calendar/Calendar.consts.js";
import { isValidDate } from "../../Calendar/Calendar.helpers.js";
const getUserDateFormat = ()=>{
    const userLocale = window.navigator.language;
    const formatParts = new Intl.DateTimeFormat(userLocale).formatToParts(new Date());
    const formatMap = {
        year: 'yyyy',
        month: 'MM',
        day: 'dd'
    };
    return formatParts.map((part)=>formatMap[part.type] || part.value).join('');
};
const userDateFormat = getUserDateFormat();
const LITERAL_REGEXP = /[\s,./-]/;
const lowerCasedMonthNameList = monthNameList.map((name)=>name.toLowerCase());
const lowerCasedEnglishMonthNameList = englishMonthNameList.map((name)=>name.toLowerCase());
const isYear = (num)=>num > 1900 && num < 9999;
const isDay = (num)=>num > 12 && num <= 31;
const isMonth = (num)=>num >= 1 && num <= 12;
const getMonthIndexFromString = (monthString)=>{
    const lowerCased = monthString.toLowerCase();
    let index = lowerCasedMonthNameList.findIndex((name)=>name.startsWith(lowerCased));
    if (-1 === index) index = lowerCasedEnglishMonthNameList.findIndex((name)=>name.startsWith(lowerCased));
    return -1 === index ? null : index;
};
const parseDateString = (dateString, dateFormat = userDateFormat)=>{
    if (!dateString) return;
    const parts = dateString.split(LITERAL_REGEXP).filter(Boolean);
    if (3 !== parts.length) return;
    let day = null;
    let month = null;
    let year = null;
    const formatOrder = Array.from(new Set(dateFormat.replaceAll(/[^dmy]/gi, '')));
    if (3 !== formatOrder.length) return;
    parts.forEach((part, index)=>{
        const num = Number.parseInt(part, 10);
        if (isYear(num)) {
            year = num;
            return;
        }
        if (Number.isNaN(num)) {
            const monthIndex = getMonthIndexFromString(part);
            if (null !== monthIndex) month = monthIndex + 1;
            return;
        }
        if (isDay(num)) {
            day = num;
            return;
        }
        if (isMonth(num)) {
            const isDayOrder = 'd' === formatOrder[index];
            if (isDayOrder && null === day) day = num;
            else if (!isDayOrder && null === month) month = num;
        }
    });
    const remainingPart = parts.find((part)=>{
        const num = Number.parseInt(part, 10);
        return !Number.isNaN(num) && num !== year && num !== day && num !== month;
    });
    if (remainingPart) {
        const num = Number.parseInt(remainingPart, 10);
        if (null === day) day = num;
        else if (null === month) month = num;
    }
    if (null === day || null === month || null === year) return;
    const date = new Date(year, month - 1, day);
    return isValidDate(date) ? date : void 0;
};
const getDateString = (dateValue, dateFormat)=>{
    if (!dateValue) return;
    const potentialDate = 'string' == typeof dateValue ? parseDateString(dateValue, dateFormat) : dateValue;
    if (potentialDate) return format(potentialDate, dateFormat);
    if ('string' == typeof dateValue) return dateValue;
};
export { getDateString, parseDateString, userDateFormat };
