/*Write a function that logs whether a number is between 0 and 50
(inclusive), between 51 and 100 (inclusive), greater than 100, or less than 0. */

function numberRange (number){
  if (number >= 0 && number <= 50) {
    console.log("Your number is between 0 and 50");
  } else if (number >= 51 && number <= 100) {
    console.log("Your number is between 51 and 100");
  } else if (number > 100) {
    console.log("Your number is greater than 100");
  } else {
    console.log("Your number is less than 0");
  }
}

numberRange(25);   // '25 is between 0 and 50'
numberRange(75);   // '75 is between 51 and 100'
numberRange(125);  // '125 is greater than 100'
numberRange(-25);  // '-25 is less than 0'