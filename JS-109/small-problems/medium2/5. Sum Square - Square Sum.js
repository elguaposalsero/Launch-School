// Calculate difference between:
// Square of the sum of the first count integers
// Sum of squares of the first count ingegers

function sumSquareDifference(count) {
  return squareOfSums(count) - sumOfSquares(count);
}

function squareOfSums(count) {
  let sum = 0;
  for (let index = 1; index <= count; index++) {
    sum += index;
  }
  return sum ** 2;
}

function sumOfSquares(count) {
  let sumOfSquares = 0;
  for (let index = 1; index <= count; index++) {
    sumOfSquares += (index ** 2);
  }
  return sumOfSquares;
}


console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150