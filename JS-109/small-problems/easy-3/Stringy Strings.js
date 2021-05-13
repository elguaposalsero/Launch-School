// Function takes a positive integer
// Returns a string of alternating 1's and 0's, always starting with 1's.
// The length of the string should match the given integer

function stringy(num) {
  let prevChar = undefined;
  let output = '';
  for (let index = 0; index < num; index++) {
    if (prevChar !== '1') {
      output += 1;
    } else {
      output += 0;
    }
    prevChar = output[index];
  }
  return output;
}


console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"