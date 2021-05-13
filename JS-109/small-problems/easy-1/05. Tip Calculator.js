let readlineSync = require('readline-sync');

console.log("What is the bill?");
let bill = readlineSync.question();

console.log("What is the tip percentage?");
let tipPercentage = readlineSync.question();

let totalTip = bill * (tipPercentage / 100);

console.log(`The tip is $${totalTip}`);
console.log(`The total is $${Number(bill) + totalTip}`);
