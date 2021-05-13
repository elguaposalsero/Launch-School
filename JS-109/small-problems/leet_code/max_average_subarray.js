// Array consisting of n integers
// Find a subarray of length k that has the max avg value
// Output the maximum average value


// Example
// [1,12,-5,-6,50,3], k = 4
// Output = 12.75
// Maximum average is 12 - 5 - 6 + 50


// eslint-disable-next-line id-length
function findMaxAverage(nums, k) {
  let largestAverage = 0;
  let beg = 0;
  let end = beg + k;

  while (end <= nums.length) {
    let subArray = nums.slice(beg, end);
    let sumSubArray = subArray.reduce((acc, curr) => acc + curr);
    let avgSubArray = sumSubArray / k;

    if (avgSubArray > largestAverage) {
      largestAverage = avgSubArray;
    }

    beg++;
    end++;
  }

  return largestAverage;

}

console.log(findMaxAverage([1,12,-5,-6,50,3], 4));

// Logic
// Create a variable with the longest sum
// Start from beg = 0
// Start from end = beg + k
// Keep the loop going as long as beg + k < array.length
// Start slicing subarrays of k length from (beg, end)
// Grab the average of the array
// Check if the average is larger than the previous one
// If yes, replace it
// Return the longest aberage