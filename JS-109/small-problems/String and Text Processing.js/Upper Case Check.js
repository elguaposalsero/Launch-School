// Takes a string argument
// Returns true if all characters are upper case
// False Otherwise
// Ignore non-alphabetical characters

function isUppercase(string) {
  let output = true;
  string.split('').forEach(char => {
    if (typeof (char) === 'string' && (char !== char.toUpperCase())) {
      output = false;
    }
  });
  return output;
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true
