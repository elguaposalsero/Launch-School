// String that contains non-alphabetical characters
// Function that returns a string — all non alphabeticals replcaed by spaces
// Can't have two spaces in a row

function cleanUp(string) {
  let output = '';

  for (let index = 0; index < string.length; index++) {
    let ascii = string.charCodeAt(index);
    if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
      output += string[index];
      prevChar = string[index]
    } else if (output[output.length - 1] !== ' ') {
      output += ' ';
    }
  }
  return output;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "

