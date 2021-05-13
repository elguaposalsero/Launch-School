// Takes an array of numbers
// Returns a sum of sums of all combinations
// Assume that the array always contains at least one number

function sumOfSums(array) { //[3, 5, 2]
  let output = 0;
  for (let index = 1; index <= array.length; index++) {
    output += array.slice(0, index).reduce((acc, curr) => acc + curr);
  }
  return output;
}


console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35