// Reverse an array
// Don't use array.prototype.revese


function reverseArray(array) {
  let reversed = [];
  for (let idx = array.length - 1; idx >= 0; idx -= 1) {
    reversed.push(array[idx]);
  }
  return reversed;
}

console.log(reverseArray([1, 2, 3, 4, 5]));


