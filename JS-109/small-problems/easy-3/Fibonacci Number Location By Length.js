// Find the first Fib number that has the number of digits identified
// E.g. (2): 1, 1, 2, 3, 5, 8, 13 => 7 numbers

function findFibonacciIndexByLength(length) { // 2

  let prevNum = 1;
  let currNum = 1;
  let index = 2;
  let currNumLength = 1;

  if (length === 1) return 1;

  while (currNumLength < length) {
    currNum += prevNum;
    prevNum = currNum - prevNum;
    // I didn't adjust prevNum
    index += 1;
    currNumLength = currNum.toString().length;
  }
  return index;
}


console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74

