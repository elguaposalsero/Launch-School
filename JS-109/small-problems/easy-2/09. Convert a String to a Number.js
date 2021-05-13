// Function takes a string of digits
// Returns the appropriate number as an integer
// You cannot use "Number" or "parseInt"
// Assume all characters will be numeric


// eslint-disable-next-line max-lines-per-function
function stringToInteger(string) {
  let magnitude = string.length - 1;
  let output = 0;
  let stringMatching = {
    0 : 0,
    1 : 1,
    2 : 2,
    3 : 3,
    4 : 4,
    5 : 5,
    6 : 6,
    7 : 7,
    8 : 8,
    9 : 9
  };

  string.split('').forEach(char => {
    output += (stringMatching[char] * (10 ** (magnitude))); //570
    magnitude -= 1;
  });

  return output;
}

console.log(stringToInteger('570'));