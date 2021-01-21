/**
 * The user makes a choice.
 * The computer makes a choice.
 * The winner is displayed.
 * --------------------------------
 * Lizard Spock: Add lizard and spock to your rock paper scissors game DONE
 * Shorten Input: Update the program so the user can type r for rock, etc.
 * Best of Five: Keep the score of the player's and computer's wins 
 */

const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  lizard:   ['paper',    'spock'],
  spock:    ['rock',     'scissors'],
};





const readline = require('readline-sync');
const VALID_CHOICE = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

function displayPrompt(message) {
  console.log(`=> ${message}`);
}

function playerWins (userChoice, computerChoice) { 
  return  (userChoice === 'rock' && computerChoice === 'scissors') ||
          (userChoice === 'paper' && computerChoice === 'rock') ||
          (userChoice === 'scissors' && computerChoice === 'paper') ||
          (userChoice === 'rock' && computerChoice === 'lizard') ||
          (userChoice === 'lizard' && computerChoice === 'spock') ||
          (userChoice === 'spock' && computerChoice === 'scissors') ||
          (userChoice === 'scissors' && computerChoice === 'lizard') ||
          (userChoice === 'lizard' && computerChoice === 'paper') ||
          (userChoice === 'paper' && computerChoice === 'spock') ||
          (userChoice === 'spock' && computerChoice === 'rock')
}

function displayWinner(userChoice, computerChoice) { 
  if (playerWins(playerChoice, computerChoice)) {
    displayPrompt('You win');
  } else if (userChoice === computerChoice) {
    displayPrompt("It's a tie");
  } else {
    displayPrompt("Computer Wins");
  }




while (true) {
  displayPrompt(`Choose one of ${VALID_CHOICE.join(', ')}`);
  validChoice = VALID_CHOICE.map(element => element.toLowerCase()[0]); // converting everything to lower case
  let userChoice = readline.question().toLowerCase()[0];
  
  while (!validChoice.includes(userChoice)) {
    displayPrompt('Invalid choice, please try again');
    userChoice = readline.question().toLowerCase()[0];
    if (userChoice === 's') {
      while(userChoice !== 'scissors' || userChoice !== 'spock') {
        displayPrompt('Do you mean scissors or spock?')
        userChoice = readline.question().toLowerCase()[0];
      }
    }
  }

  //Computer Choice
  let randomNumber = Math.floor(Math.random() * VALID_CHOICE.length);
  let computerChoice = VALID_CHOICE[randomNumber];

  // Compute and display the winner
  winner(userChoice, computerChoice);

  // Ask to play again
  displayPrompt("Good game. Want to play again? (y/n)");
  let answer = readline.question().toLowerCase()[0];
  while (answer !== 'y' && answer !== 'n') {
    displayPrompt ('Please enter a valid response (y/n)');
    answer = readline.question().toLowerCase()[0];
  }
  if (answer === 'n') break;
}