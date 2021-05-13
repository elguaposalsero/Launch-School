// Function that takes an integer and converts it to a string
// Think about using the Math.sign() function

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

function signedIntegerToString(number) {
  switch (Math.sign(number)) {
    case -1:
      return `-${integerToString(-number)}`;
    case +1:
      return `+${integerToString(number)}`;
    default:
      return integerToString(number);
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
