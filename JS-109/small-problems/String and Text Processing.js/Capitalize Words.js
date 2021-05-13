// Take a string as an argument
// Return that string with the first chaacter of every word capitalized
// All subsequent characters should be in lowercase

function wordCap(string) {
  // Split the string and loop through each character
  // Create a variable called precedingSpace and set it to false
  // Loop through the array using Map
  // Check if precedingSpace is true
  // If true, map an uppercase letter
  // If false, map a lowercase letter
  // If its a space, set precedingSpace to true.
  let precedingSpace = true;

  let output = string.split('').map(char => {
    if (char === ' ') {
      precedingSpace = true;
      return ' ';
    } else if (precedingSpace) {
      precedingSpace = false;
      return char.toUpperCase();
    } else {
      precedingSpace = false;
      return char.toLowerCase();
    }
  });
  return output.join('');
}


console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'

// Note: This was somewhat of a dumb way of doing it
// Instead of slpitting every character, I could have split by spaces
// Then, I would have been able to capitalize from slice(0,1) of each word.