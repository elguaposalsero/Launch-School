const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',      'spock'],
  scissors: ['paper',    'lizard'],
  lizard:   ['paper',     'spock'],
  spock:    ['rock',   'scissors']
};


function displayWinner(choice, computerChoice) {
  if (WINNING_COMBOS[choice].includes(computerChoice)) {
    prompt(`You chose ${choice} and computer choise ${computerChoice}. You win!`);
  } else if (choice === computerChoice) {
    prompt(`You both choise ${choice}. It's a tie!`);
  } else {
    prompt (`You choise ${choice} and computer chose ${computerChoice}. You lose!`);
  };
};

let computerChoice = Object.keys(WINNING_COMBOS)[Math.floor(Math.random()) * 5];
let choice = readline.question (prompt(`Please select ${Object.keys(WINNING_COMBOS).join(', ')}`));

displayWinner(choice, computerChoice);

