// Take a string as an argument
// Return a string with every lowercase changed to upper and vice versa

function swapCase(string) {
  // Split into an array and loop through each char
  // Check if upper case, and return a lower case if yes
  // Check if lower case, and return upper case if yes
  let swappedCases = string.split('').map(char => {
    if (char === char.toLowerCase()) {
      return char.toUpperCase();
    } else if (char === char.toUpperCase()) {
      return char.toLowerCase();
    } else {
      return char;
    }
  });

  return swappedCases.join('');
}


console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"