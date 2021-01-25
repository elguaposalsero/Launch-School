
// My version of the function ----
function randomNumberBetween(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result = 0;

while (result <= 2) {
  result = randomNumberBetween(1,6);
  tries += 1
}

console.log(`It took ${tries} tries to get a number greater than 2`);

// Try to generate a number that is greater or equal than 2
// Keep track of the number of tries that you've taken so far
// Once you've gotten a number, print the number of tries that it took