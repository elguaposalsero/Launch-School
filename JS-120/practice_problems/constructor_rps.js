let readline = require('readline-sync');

const VALID_CHOICES = ['rock', 'paper', 'scissors'];

const WINNING_CHOICES = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper'
};

function Player() {
  this.currentMove = null;
  this.score = 0;
  this.moveHistory = [];
}

function Human() {
  Player.call(this);
}

// Note: Instead of doing it like this, we could have also just
// created one prototype object.
// However, if you do this, you have to make sure that the prototype points back
// RPSGame.prototype.constructor = RPSGame; RECORD THIS

// Wrote it this way so that each new human would inherit
Human.prototype.selectMove = function() {
  console.log('Please select rock, paper, or scissors');
  while (true) {
    let selected = readline.question().toLowerCase();
    if (VALID_CHOICES.includes(selected)) {
      this.currentMove = selected;
      break;
    } else {
      console.log ('Invalid selection. Please select rock, paper, or scissors');
    }
  }
};

function Computer() {
  Player.call(this);
  this.adjustmentThreshold = 0.4;
  this.weightAdjustment = 8;
  this.percentageWeighting = {
    rock: 33,
    paper: 33,
    scissors: 33,
  };
}

Computer.prototype.selectMove = function() {
  let total = 0;
  for (let move in this.percentageWeighting) {
    total += this.percentageWeighting[move];
  }
  let threshold = Math.random() * total;

  let runningSum = 0;
  for (let move in this.percentageWeighting) {
    runningSum += this.percentageWeighting[move];
    if (threshold < runningSum) {
      this.currentMove = move;
      break;
    }
  }
};

Computer.prototype.updateWeighting = function() {
  let historyOfCurrentMove = this.moveHistory.filter(record => {
    return record[0] === this.currentMove;
  });

  let winRatio = undefined;
  if (historyOfCurrentMove.length > 5) { // More than 5 total attempts to start getting "statistically significant"
    let numWins = historyOfCurrentMove.filter(record => record[1] === 'win').length;
    let totalRounds = this.moveHistory.length;
    winRatio = numWins / totalRounds;
  }

  if (winRatio !== undefined && winRatio <= this.adjustmentThreshold) {
    for (let move in this.percentageWeighting) {
      if (move === this.currentMove) {
        this.percentageWeighting[move] -= this.weightAdjustment;
      } else {
        this.percentageWeighting[move] += this.weightAdjustment / 2;
      }
    }
  }
};

function Gameplay() {
  this.winner = null;
  this.human = new Human();
  this.computer = new Computer();
  this.playAgainStatus = true;
}

Gameplay.prototype.displayWelcome = function() {
  console.log("Welcome to Rock Paper Scissors");
};

Gameplay.prototype.selectMoves = function() {
  this.human.selectMove();
  this.computer.selectMove();
};

Gameplay.prototype.evaluateWinner = function() {
  let humanMove = this.human.currentMove;
  let computerMove = this.computer.currentMove;
  if (WINNING_CHOICES[humanMove] === computerMove) {
    this.winner = this.human;
  } else if (humanMove === computerMove) {
    this.winner = null;
  } else {
    this.winner = this.computer;
  }
};

Gameplay.prototype.displayWinner = function() {
  console.log(`You selected ${this.human.currentMove}`);
  console.log(`Computer selected ${this.computer.currentMove}`);
  if (this.winner === this.human) {
    this.human.score++;
    console.log ('You Win!');
  } else if (this.winner === this.computer) {
    this.computer.score++;
    console.log('Computer Wins');
  } else {
    console.log("It's a tie");
  }
};

Gameplay.prototype.playAgain = function() {
  console.log('Would you like to play again?');
  while (true) {
    let answer = readline.question();
    if (answer === 'y') {
      this.playAgainStatus = true;
      break;
    } else if (answer === 'n') {
      this.playAgainStatus = false;
      break;
    } else {
      console.log('Invalid Selection. Please select either yes, or no');
    }
  }
  console.log('test');
};

Gameplay.prototype.updateHistory = function() {
  let humanMove = this.human.currentMove;
  let computerMove = this.computer.currentMove;

  if (this.winner === null) {
    this.human.moveHistory.push([humanMove, 'tie']);
    this.computer.moveHistory.push([computerMove, 'tie']);
  } else if (this.winner === this.human) {
    this.human.moveHistory.push([humanMove, 'win']);
    this.computer.moveHistory.push([computerMove, 'loss']);
  } else {
    this.human.moveHistory.push([humanMove, 'loss']);
    this.computer.moveHistory.push([computerMove, 'win']);
  }
};

Gameplay.prototype.displayScore = function() {
  console.log('Score:');
  console.log(`You: ${this.human.score}`);
  console.log(`Computer: ${this.computer.score}`)
};

Gameplay.prototype.displayGoodbye = function() {
  console.log("Thank you for playing Rock, Paper, Scissors");
};

Gameplay.prototype.play = function() {
  this.displayWelcome();
  while (this.playAgainStatus) {
    this.selectMoves();
    this.evaluateWinner();
    this.updateHistory();
    this.displayWinner();
    this.playAgain();
    console.clear();
    this.displayScore();
    this.computer.updateWeighting();
  }
  this.displayGoodbye();
};

let game = new Gameplay();
game.play();
