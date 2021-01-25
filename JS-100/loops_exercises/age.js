let readlineSync = require('readline-sync');
let age = readlineSync.question('How old are you? ');

age = parseInt(age); //Set the person's current age to the variable age

console.log(`You are ${age} years old.`);
for (let ageMultiplier = 10; ageMultiplier <= 40; ageMultiplier += 10) {
  console.log(`In ${ageMultiplier} years you will be ${age + ageMultiplier} years old`)
}