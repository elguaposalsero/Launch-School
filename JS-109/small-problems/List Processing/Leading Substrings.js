// Takes a string argument
// Returns a list of substrings that start from beginning
// Ordered from shortest to longest

//SOLUTION
// Loop through indeces up to string.length
// Use Slice: string.slice(i)

function leadingSubstrings(string) { 
  let output = [];
  for (let index = 0; index < string.length; index++) {
    output.push(string.slice(0, index + 1));
  }
  return output;
}


console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]