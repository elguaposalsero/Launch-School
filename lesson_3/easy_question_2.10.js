// Count the number of lower-case t characters

let statement1 = "The Flinstones Rock!";
let statement2 = "Easy come, easy go.";

let a = statement1.split('').filter(letter => letter === 't').length;
console.log(a);