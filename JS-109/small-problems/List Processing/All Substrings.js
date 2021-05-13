 // Returns all substrings for a string
// Ordered by where substrings start (e.g. all that start with 0 first)
// Return from shortest to longest

function leadingSubstrings(string) {
  let output = [];
  for (let length = 1; length <= string.length; length++) {
    output.push(string.slice(0, length));
  }
  return output;
}


function substrings(string) {
  let substrings = [];
  for (let index = 0; index < string.length; index++) {
    substrings.push(...leadingSubstrings(string.slice(index)));
  }
  return substrings;
}


console.log(substrings('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]