import dayjs from 'dayjs';
import _ from 'lodash';

export type TimePosition = {timeFrom: number; timeTo: number};
import duration from 'dayjs/plugin/duration';
import utc from 'dayjs/plugin/utc';
dayjs.extend(duration);
dayjs.extend(utc);
export type TimeBarProps = {
  color: string;
  timeValue: number;
  index: number;
};

export enum TimeColor {
  UNAVAILABLE_TIME = '#C3C3C3',
  BOOKING_TIME = '#2C419A',
  AVAILABLE_TIME = '#D1EAEB',
}
export type UnavailableTime = {
  unavailable_start_time: string;
  unavailable_end_time: string;
};
const NUMBER_ELEMENT_IN_ADAY = 48;

/**
 *
 * @param startBookingTime Time Start booking (YYYY/MM/DD HH:mm)
 * @param endBookingTime Time End Booking (YYYY/MM/DD HH:mm)
 * @param startBusinessTime Time Start business (HH:mm)
 * @param closeBusinessTime Time End business (HH:mm)
 * @param listUnavailableTime List Time Unavailable (YYYY/MM/DD HH:mm)
 * @param startPeriodTime start of showing time (YYYY/MM/DD)
 * @param endPeriodTime end of showingtime (YYYY/MM/DD)
 * @returns
 */
export const handleMakeDataTimeline = (
  startBookingTime: string,
  endBookingTime: string,
  startBusinessTime: string,
  closeBusinessTime: string,
  listUnavailableTime: UnavailableTime[],
  startPeriodTime: string,
  endPeriodTime: string,
): TimeBarProps[][] => {
  // count number of day from startTime to endTime
  const countDay = diffDay(endPeriodTime, startPeriodTime);
  if (countDay < 0) {
    return [];
  }
  const totalElement = (countDay + 1) * NUMBER_ELEMENT_IN_ADAY;

  const bookingTime = getBookingDurationTime(
    startPeriodTime,
    startBookingTime,
    endBookingTime,
  );

  const unAvailableTime = getUnavailableTime(
    startPeriodTime,
    listUnavailableTime,
  );

  // Create Time Data
  const timeData = Array.from(Array(totalElement).keys()).map(item => {
    // setting available Time
    const barItem: TimeBarProps = {
      color: TimeColor.AVAILABLE_TIME,
      timeValue: item / 2,
      index: item,
    };
    // setting bookingTime
    if (
      checkTimeInPeriod(
        barItem.timeValue,
        bookingTime.timeFrom,
        bookingTime.timeTo,
      )
    ) {
      barItem.color = TimeColor.BOOKING_TIME;
    }

    // setting Unavailable Time
    if (unAvailableTime.length > 0) {
      unAvailableTime.forEach((unavailableItem: TimePosition) => {
        if (
          checkTimeInPeriod(
            barItem.timeValue,
            unavailableItem.timeFrom,
            unavailableItem.timeTo,
          )
        ) {
          barItem.color = TimeColor.UNAVAILABLE_TIME;
        }
      });
    }

    return barItem;
  });

  return _.chunk(timeData, NUMBER_ELEMENT_IN_ADAY);
};

function checkTimeInPeriod(
  timeCheck: any,
  startTime: any,
  endTime: any,
): boolean {
  if (timeCheck >= startTime && timeCheck < endTime) {
    return true;
  }
  return false;
}

/**
 *
 * @param startPeriodTime YYYY/MM/DD
 * @param listUnavailableTime YYYY/MM/DD HH:mm
 * @returns TimePosition[]
 */
function getUnavailableTime(
  startPeriodTime: string,
  listUnavailableTime: UnavailableTime[],
): TimePosition[] {
  if (listUnavailableTime.length === 0) {
    return [];
  }
  const beginDay = `${startPeriodTime} 00:00`;
  const result = listUnavailableTime.map((item: UnavailableTime) => {
    const timeFrom = getDurationTime(beginDay, item.unavailable_start_time);
    const timeTo = getDurationTime(beginDay, item.unavailable_end_time);
    return {timeFrom, timeTo};
  });
  return result;
}

/**
 * get number of from startPeriodTime to startTime and endTime
 * @param startPeriodTime YYYY/MM/DD
 * @param startTime YYYY/MM/DD HH:mm
 * @param endTime YYYY/MM/DD HH:mm
 * @returns TimePosition
 */
function getBookingDurationTime(
  startPeriodTime: string,
  startTime: string,
  endTime: string,
): TimePosition {
  const beginDay = `${startPeriodTime} 00:00`;
  const timeFrom = getDurationTime(beginDay, startTime);
  const timeTo = getDurationTime(beginDay, endTime);

  return {timeFrom, timeTo};
}

/**
 * get number of hours from start time to end time
 * @param startTime YYYY/MM/DD HH:mm
 * @param endTime YYYY/MM/DD HH:mm
 * @returns total hours from starttime to endtime
 */
function getDurationTime(startTime: any, endTime: any) {
  // Convert time strings to Date objects
  const gap = dayjs.utc(endTime).diff(dayjs.utc(startTime));
  const hours = dayjs.duration(gap, 'millisecond').asHours();
  // Get the time difference in milliseconds
  // Convert milliseconds to hours
  return hours;
}

/**
 * get list day in range start date to end date
 * @param startDate
 * @param endDate
 * @returns list day from start to end day
 */
export function getDatesInRange(startDate: any, endDate: any) {
  if (startDate && endDate) {
    let date = dayjs(startDate);
    const dates = [];
    while (diffDay(date, endDate) <= 0) {
      dates.push(date.format('YYYY/MM/DD'));
      date = dayjs(date).add(1, 'day');
    }
    return dates;
  }
  return [];
}

/**
 * compare 2 day
 * @param day1 YYYY/MM/DD
 * @param day2 YYYY/MM/DD
 * @returns
 */
const diffDay = (day1: any, day2: any) => {
  return dayjs(day1).diff(day2, 'day');
};
