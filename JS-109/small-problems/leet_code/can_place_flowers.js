// Can Place Flowers
// Flowers cannot be planted adjacent to each other
// Given an array of integers, and "n" number of flowers
// Figure out if those flowers can be planted without violating the rule

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

//[1, 0, 0]


// [1, 0, 1, 0, 0, 1, 0, 0, 0, 1]
// [0, 0, 1, 1, 0, 0 ,0,  1]
// [0, 0, 0, 0, 0, 0, 1, 1]

let flowerbed = [1, 0, 0];
console.log(flowerbed[-1]);

function canReplaceFlowers(flowerded, n) {
  let flowersPlanted = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (!flowerbed[i - 1] && !flowerbed[i + 1] && !flowerbed[i]) {
      flowerbed[i] = 1;
      flowersPlanted += 1;
    }
    console.log(flowerbed);
    console.log(flowersPlanted);
  }


  if (flowersPlanted >= n) {
    return true;
  }

  return false;
}


console.log(canReplaceFlowers([1,0,0,0,1], 1));

// Note: If you get an undefined and a zero that's fine too (falsey)


// Create a flowersPlanted = 0 variable
// Set a prevFlower = false
// Loop through the array of integers
// Check whether a prev flower exists and a nextFlower exists
// If not, modify the array to place a flower in that spot
// Once you modify the array, increment the flowersPlanted
// Keep going through this process until you hit an index of length - 1
// Once you hit that index, check only if the previous index exists.
// If it does exist, replace the number in the array