// Convert a string to an integer
// The string might have a leading + or - sign
// If the first character is a "+" return a positive num
// If the first character is a "-" return a negative num
// If no sign is given, return a negative num

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

function stringToSignedInteger(string) {
  if (string[0] === '-') {
    return (stringToInteger(string.slice(1)) * -1);
  } else if (string[0] === '+') {
    return (stringToInteger(string.slice(1)));
  } else {
    return (stringToInteger(string));
  }
}


console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
