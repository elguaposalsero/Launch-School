// Take a positive integer
// Return the next bigger number formed with the same integers.
// Return -1 if does not exist

function nextBiggerNumber(number) {
  let incremented = number + 1;
  while (!largerThanMax(number, incremented)) {
    if (compareDigits(number, incremented)) {
      return incremented;
    } else {
      incremented += 1;
    }
  }
  return -1;
}

function largerThanMax(number, incremented) {
  let numAsList = numToList(number); //['2', '0', '1', '8']
  let sortedNumber = numAsList.sort((a,b) => b - a);
  let maxNumber = Number(sortedNumber.join(''));

  if (incremented > maxNumber) {
    return true;
  } else {
    return false;
  }
}

function compareDigits(number, incremented) {
  let sortedNum = numToList(number).sort((a,b) => a - b).join('');
  let sortedIncremented = numToList(incremented).sort((a, b) => a - b).join('');

  return sortedNum === sortedIncremented;
}

function numToList (number) {
  return number.toString().split('');
}


console.log(nextBiggerNumber(9) === -1); // true
console.log(nextBiggerNumber(2017) === 2071); // true
console.log(nextBiggerNumber(513) === 531); // true

