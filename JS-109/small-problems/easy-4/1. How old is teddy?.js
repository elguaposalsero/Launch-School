// Randomly generate Teddy's age
// Print the age to the console
// The ages need to be between 20 and 120

// Create an array with numbers 20 to 120
// Pick an index from that array randomly
// Return that value at the index

let age = 20;
let possibleAges = [];

while (age <= 120) {
  possibleAges.push(age);
  age++;
}


let index = Math.floor(Math.random() * 101);
console.log(`Teddy is ${possibleAges[index]} years old`);

