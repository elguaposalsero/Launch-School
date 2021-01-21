
/*let readlineSync = require('readline-sync');
function prompt (message) {
  console.log(`=> ${message}`); // FF: Figure out how to make this compatible with new lines.
}

prompt('Welcome to the mortgage payment calculator. Please provide three pieces of information:'); // FF: Wait for 2 seconds before we continue.
prompt('1. How much is the loan that you are taking (e.g. $100,000)');
let loan = parseInt(readlineSync.question(), 10);

prompt('What is your annual percentage interest rate (APR)? E.g. 3%.');
let apr = (parseInt(readlineSync.question(), 10) / 100);

prompt('How long is your loan duration in years (e.g. 30 years)'); // TK: What happens if this is a non integer number of years (like 30.5)
let durationInYears = parseInt(readlineSync.question(), 10);

let monthlyRate = apr / 12;
let durationInMonths = durationInYears * 12;
let monthlyPayment = loan * 
                  (monthlyRate / 
                  (1 - Math.pow((1 + monthlyRate), (-durationInMonths))));
console.log(monthlyPayment); */


// Note: need to convert these stings into ints

// Corrections

const readline = require('readline-sync');

function prompt (message) {
  console.log(`=> ${message}`); // FF: Figure out how to make this compatible with new lines.
}

function isInvalidNumber(number) {
  return number.trim() === '' || // Checks for blank strings
         Number(number) < 0   || // Checks for negative numbers
         Number.isNaN(Number(number)); // Checks for improper number formats
}

prompt("Welcome to Mortgage Calculator!");

while (true) {
  prompt('---------------------------------');
  prompt('What is the loan amount?');

  let amount = readline.question();

  while (isInvalidNumber(amount)) {
    prompt('Must enter a positive number');
    amount = readline.question();
  }

  prompt("What is the interest rate?");
  prompt("(Example: 5 for 5% or 2.5 for 2.5%)");
  let interestRate = readline.question();

  while (isInvalidNumber(interestRate)) {
    prompt('Must enter a positive number');
    interestRate = readline.question();
  }

  prompt("What is the loan duration (in years)?");
  let years = readline.question();

  while (isInvalidNumber(years)) {
    prompt('Must enter a positive number');
    years = readline.question();
  }

  let annualInterestRate = Number(interestRate) / 100;
  let monthlyInterestRate = annualInterestRate / 12;
  let months = Number(years) * 12;

  let monthlyPayment = Number(amount) *
                  (monthlyInterestRate /
                  (1 - Math.pow((1 + monthlyInterestRate), (-Number(months)))));

  prompt(`Your monthly payment is: $${monthlyPayment.toFixed(2)}`);

  prompt("Another calculation?");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y'){
    prompt ('Please enter "y" or "n".');
    answer = reqdline.question().toLowerCase();
  }

  if (answer[0] === 'n') break;
}