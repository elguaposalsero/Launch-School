// Return a string that swaps the case fo the letters
let munstersDescription = "The Munsters are creepy and spooky.";

// INITIAL SOLUTION
/* let newString = '';
for (let i = 0; i < munstersDescription.length; i++) {
  if (munstersDescription[i].toUpperCase() === munstersDescription[i]) {
    newString += munstersDescription[i].toLowerCase();
  } else {
    newString += munstersDescription[i].toUpperCase();
  }
} 
console.log(newString); */

// LAUNCH SCHOOL SOLUTION
let newString = munstersDescription.split('').map(char => {
  if (char.toUpperCase() === char) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join('');

console.log(newString);