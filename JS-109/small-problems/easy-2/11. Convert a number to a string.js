// Convert a non-negative integer value to the string of that integer
// You cannot use String()
// You cannot do '' + number

function integerToString(integer) {
  //4321
  let strings = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let character;
  let output = '';
  let currInteger = integer;

  do {
    character = currInteger % 10; //1
    output = strings[character] + output;
    currInteger = (currInteger - character) / 10;
  }
  while (currInteger > 0);
  
  return output;
}

// Test Cases
console.log(integerToString(4s321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"
console.log(integerToString(1234567890)); // "1234567890"

// Notes
// Can use Math.floor here instead of my solution


