// Function that takes a string
// Collapses consecutive duplicate values into one string

function crunch(string) {
  //Split into an array
  // Loop through each element in the array (i.e. each character)
  // If the value is different than previous value, add previous value to output
  // Else, keep looping
  let arr = string.split('');
  let output = arr[0];
  for (let index = 1; index < arr.length; index++) {
    if (arr[index] !== arr[index - 1]) {
      output += arr[index];
    }
  }
  return output;
}


console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // '';
