// Given an array of integers
// Find the index N where the sum to the left is equal to sum on the right
// If no index, return -1
// Empty arrays are equal to zero

function sum(array) { // [1, 2, 3]
  return array.reduce(function (accumulator, currentVal) {
    return (accumulator + currentVal);
  }, 0);
}

function findEvenIndex(array) {
  for (let idx = 0; idx <= array.length; idx += 1) {
    let leftArray = array.slice(0, idx);
    let rightArray = array.slice(idx + 1);
    if (sum(leftArray) === sum(rightArray)) {
      return idx;
    }
  }
  return -1;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]) === 3); // true
console.log(findEvenIndex([1, 100, 50, -51, 1, 1,]) === 1); // true
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]) === -1); // true
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]) === 3); // true
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]) === 0); // true