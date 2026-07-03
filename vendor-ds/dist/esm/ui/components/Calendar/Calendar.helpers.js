import { addDays, addWeeks, eachDayOfInterval, isMonday, isSunday, previousMonday, previousSunday, subDays, subWeeks } from "date-fns";
import { DAYS_PER_PAGE, SUNDAY_INDEX, startOfWeekIndex } from "./Calendar.consts.js";
const getPageStartDate = (date)=>{
    if (startOfWeekIndex === SUNDAY_INDEX) return isSunday(date) ? date : previousSunday(date);
    return isMonday(date) ? date : previousMonday(date);
};
const getDateList = (month, year)=>{
    const firstDayOfMonth = new Date(year, month, 1);
    const start = getPageStartDate(firstDayOfMonth);
    const end = addDays(start, DAYS_PER_PAGE - 1);
    return eachDayOfInterval({
        start,
        end
    });
};
const getPreviousDay = (date)=>subDays(date, 1);
const getNextDay = (date)=>addDays(date, 1);
const getDayWeekAgo = (date)=>subWeeks(date, 1);
const getDayWeekAfter = (date)=>addWeeks(date, 1);
const isValidDate = (date)=>date instanceof Date && !Number.isNaN(date.getTime());
const getFirstDayOfMonth = (date)=>new Date(date.getFullYear(), date.getMonth(), 1);
const getLastDayOfMonth = (date)=>new Date(date.getFullYear(), date.getMonth() + 1, 0);
export { getDateList, getDayWeekAfter, getDayWeekAgo, getFirstDayOfMonth, getLastDayOfMonth, getNextDay, getPreviousDay, isValidDate };
