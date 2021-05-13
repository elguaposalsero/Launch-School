/* eslint-disable indent */
// Function that takes a string
// Returns an object with three properties:
  // Number of lower case letters
  // Number of upper case letters
  // Number that are neither

function letterCaseCount(string) {
  let output = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  };

  string.split('').forEach(char => {
    if (char === char.toLowerCase() && char === char.toUpperCase()) {
      output.neither += 1;
    } else if (char === char.toLowerCase()) {
        output.lowercase += 1;
    } else {
        output.uppercase += 1;
    }
  });
  return output;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }