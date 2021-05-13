// Prior to 1752, leap years occured in any year that was evenly divisible by 4.
// Update the function to determine leap years before and after 1752


// Leap Year: Every year that is divisible by 4 (unless divisible by 100)
// If the year is divisble by 100 it is not a leap year (unless by 400).

function isLeapYear(year) {
  if (year >= 1752) {
    if (year % 400 === 0) {
      return true;
    } else if (year % 100 === 0) {
      return false;
    } else if (year % 4 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
      if (year % 4 === 0) {
        return true;
    }
  }
  return false;
}

console.log(isLeapYear(1));
console.log(isLeapYear(2016));
console.log(isLeapYear(2015));
console.log(isLeapYear(2100));
console.log(isLeapYear(2400));
console.log(isLeapYear(240000));
console.log(isLeapYear(240001));
console.log(isLeapYear(2000));
console.log(isLeapYear(1900));
console.log(isLeapYear(1752));
console.log(isLeapYear(1700));
console.log(isLeapYear(1));
console.log(isLeapYear(100));
console.log(isLeapYear(400));