// Ask for a user's name
// If the user adds an exclamation point, you ask why they're scraming.

// What is your name? Bob
// Hello Bob.

// What is your name? Bob!
// HELLO BOB. WHY ARE WE SCREAMING?

let readlineSync = require('readline-sync');

console.log('What is your name?');
let name = readlineSync.prompt();

if (name[name.length - 1] === '!') {
  name = name.slice(0, -1);
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING`);
} else {
  console.log(`Hello ${name}`);
}