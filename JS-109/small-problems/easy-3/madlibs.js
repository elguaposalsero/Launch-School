// Madlib program that prompts for: noun, verb, adjective, adverb
// Injects those into a story that you create

let readlineSync = require('readline-sync');

console.log('Enter a noun');
let noun = readlineSync.prompt();

console.log('Enter a verb');
let verb = readlineSync.prompt();

console.log('Enter an adjective');
let adjective = readlineSync.prompt();

console.log('Enter an adverb');
let adverb = readlineSync.prompt();

console.log(`Do you walk your ${adjective} ${noun} ${adverb}?`);

// PROMPTS
// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: bluen
// Enter an adverb: quickly

// CONSOLE OUTPUT
//Do you walk your blue dog quickly? That's hilarious!
// The blue dog walks quickly over the lazy dog.
// The dog quickly walks up blue Joe's turtle.