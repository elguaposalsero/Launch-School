// Use arithmetic operators to determine the individual digits of a 4-digit number like 3946
let myNumber = 4936;
let ones = (myNumber % 10) //6

myNumber = (myNumber - ones)/10 //493
tens = (myNumber % 10) //3

myNumber = (myNumber - tens) / 10 //49
hundreds = (myNumber % 10) //9

myNumber = (myNumber - hundreds) //40
thousands = (myNumber / 10) //4

console.log (`thousands: ${thousands}`);
console.log (`hundreds: ${hundreds}`);
console.log (`tens: ${tens}`);
console.log (`ones: ${ones}`);