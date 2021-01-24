// A terminal-based calculator

// 00. Load in all packages
const readline = require('readline-sync'); // Import all the functions from the readline-sync file as an object
const MESSAGES = require('./calculator_messages.json');

// 01. Create the necessary functions
function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number)); // Returns true when the user enters an invalid number or empty string
}

function messages (message, lang = "en") {
  return (MESSAGES[lang][message]);
}

// 02. Start receiving user-inputs


while (true) { // Always runs unless you break out of the loop. Will have a break-out condition at the end of this.
  prompt(messages('welcome'));
  prompt("What's the first number?");
  let number1 = readline.question(); //Call the question method from the readline object

  while (invalidNumber(number1)) {
    prompt(MESSAGES.invalidNumber);
    number1 = readline.question();//You capture the new number, and overwrite number1, and then return to while loop and check.
  }

  prompt("What's the second number?");
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt("Hmm... that doesn't look like a valid number. Please enter another one");
    number2 = readline.question();
  }

  prompt('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt("Hmm, you entered an invalid option. Please enter another one and try again");
    operation = readline.question();
  }

  // Perforom the calculation
  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  // Output a result
  console.log(`The result is: ${output}`);

  // Ask if the user wants to continue
  prompt('Would you like to perform another calculation? Enter "y" for yes or "n" for no');
  let answer = readline.question(); //Yes, y, Y

  if (answer[0].toLowerCase() !== "y") break;
}
// Ask the user to perform another calculation
// In order to do this, the whole thing has to be inside of a while loop