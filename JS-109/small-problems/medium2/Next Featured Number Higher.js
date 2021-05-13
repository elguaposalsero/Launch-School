MAX_FEATURE_NUMBER = 9876543201;

function featured(number) {
  do {
    number += 1;
    if (isOdd(number) && isMultipleOf7(number) && !duplicatesExist(number)) {
      return number;
    }
  }
  while (number <= MAX_FEATURE_NUMBER);
  return "There is no possible number that fulfills those requirements";
}

function isOdd(number) {
  return (number % 2 !== 0);
}s

function isMultipleOf7(number) {
  return (number % 7 === 0);
}

function duplicatesExist(number) { // [1, 2, 3, 2]
  let splitNumber = number.toString().split('');
  let index = 0;
  while (index < splitNumber.length) {
    let currentNumber = splitNumber.pop()
    if (splitNumber.includes(currentNumber)) {
      return true;
    }
  }
  return false;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."
