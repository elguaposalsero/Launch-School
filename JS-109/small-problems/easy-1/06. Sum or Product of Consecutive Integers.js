// Write a program that asks the user to enter an integer greater than 0,
// then asks whether the user wants to determine the sum or the product of
// all numbers between 1 and the entered integer, inclusive.

let readlineSync = require('readline-sync');
console.log("Please enter an integer greater than 0:");

let integer = parseInt(readlineSync.question(), 10);
console.log('Enter "s" to compute sum, or "p" to compute product');

let selection = readlineSync.question().toLowerCase();

let output;

function calcSumOrProduct(maxNumber, selection) {
  let output = 1;
  for (let index = 1; index <= maxNumber; index += 1) {
    if (selection === 's') {
      output += index;
    } else if (selection === 'p') {
      output *= index;
    }
  }
  return output;
}

let answer = calcSumOrProduct(integer, selection);
console.log(`The product of the integers between 1 and ${integer} is ${answer}`);

