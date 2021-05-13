// Takes two strings, and returns the longer of the two strings
// Returns the result of concatonating the shorter string with the longer string
// And then short string once again

function shortLongShort(firstString, secondString) {
  let output = '';
  let firstStringLength = firstString.length;
  let secondStringLength = secondString.length;

  if (firstStringLength < secondStringLength) {
    output += firstString + secondString + firstString;
  } else {
    output += secondString + firstString + secondString;
  }
  console.log(output);
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"
