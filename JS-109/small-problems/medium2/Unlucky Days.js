/*
const FIRST_YEAR = 1752;
const FIRST_WEEKDAY_1752 = 6; //Saturday
const DAYS_IN_WEEK = 7;

const daysByMonth = {
  January: 31,
  February: 28,
  March: 31,
  April: 30,
  May: 31,
  June: 30,
  July: 31,
  August: 31,
  September: 30,
  October: 31,
  November: 30,
  December: 31
};

function fridayThe13ths(year) { // 1986
  let weekday = firstWeekday(year); //
  let numFriday13ths = 0;

  for (let month in daysByMonth) {
    let dayOfMonth = 1; // This is the day (eg. 31 would be last day of Jan

    while (!monthOver(year, month, dayOfMonth)) {
      if (isFridayThe13th(dayOfMonth, weekday)) {
        numFriday13ths += 1;
      }
      dayOfMonth += 1; // Increment from say 26th to 28th
      weekday = nextWeekday(weekday); // Increment from say 6th, back to 0 (7 weekdays)
    }
  }
  return numFriday13ths;
}

function monthOver(year, month, dayOfMonth) {
  if (month === 'February' && isLeapYear(year)) {
    return dayOfMonth > 29;
  } else if (dayOfMonth > daysByMonth[month]) {
    return true;
  } else {
    return false;
  }
}

function isLeapYear(year) {
  return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}

function firstWeekday(year) { // 1753
  let weekday = FIRST_WEEKDAY_1752;
  let incrementingYear = FIRST_YEAR;

  while (incrementingYear < year) {
    if (isLeapYear(incrementingYear)) {
      weekday = nextWeekday(weekday, 2);
    } else {
      weekday = nextWeekday(weekday);
    }
    incrementingYear += 1;
  }
  return weekday;
}

function nextWeekday(weekday, increment = 1) {
  let newWeekday = weekday + increment;
  if (newWeekday <= 7) {
    return newWeekday;
  } 
  return newWeekday % DAYS_IN_WEEK;
}

function isFridayThe13th(dayOfMonth, weekday) {
  return (dayOfMonth === 13 && weekday === 5);
}
*/

function fridayThe13ths(year) {
  // Goal is to count the number of friday the 13ths
  let all13ths = [];

  for (let month = 0; month < 12; month += 1) {
    all13ths.push(new Date(year, month, 13));
  }

  return all13ths.reduce((count, date) => {
    return date.getDay() === 5 ? (count + 1) : count;
  }, 0); //Need to start with a zero, because otherwise your first value will be a date

}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2


