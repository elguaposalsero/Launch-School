// A function that returns the next last word in a string
// The string contains at least two words

function penultimate(sentence) {
  let stringArray = sentence.split(' ');
  return stringArray[stringArray.length - 2];
}


console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true