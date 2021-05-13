// Function that takes two lists of numbers
// Returns a new array containing the product of all combinations
// Array is sorted in assending numerical order

// multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]

//SOLUTION
// Loop through the first array
// Loop through the second array as a subloop
// Multiple the numbers together
// Output the numbers to a separate array
// Note: Can probably use map for this since outputting a new array


//CODE
// Note: Don't want to use map because your output array is longer

function multiplyAllPairs(arr1, arr2) {
  let output = [];
  arr1.forEach(num => {
    arr2.forEach(num2 => {
      output.push(num * num2);
    });
  });
 return output.sort((a,b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));