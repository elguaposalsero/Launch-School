let readline = require('readline-sync');

const VALID_CHOICES = ['rock', 'paper', 'scissors'];

const WINNING_CHOICES = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper'
}

let gameplay = {
  winner: null,
  human: createHuman(),
  computer: createComputer(),
  playAgainStatus: true,

  displayWelcome() {
    console.log("Welcome to Rock Paper Scissors");
  },

  selectMoves() {
    this.human.selectMove();
    this.computer.selectMove();
  },

  evaluateWinner() {
    let humanMove = this.human.currentMove;
    let computerMove = this.computer.currentMove;
    if (WINNING_CHOICES[humanMove] === computerMove) {
      this.winner = this.human;
    } else if (humanMove === computerMove) {
      this.winner = null;
    } else {
      this.winner = this.computer;
    }
  },

  displayWinner() {
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
  },

  playAgain() {
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
  },

  updateHistory() {
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
  },

  displayScore() {
    console.log('Score:');
    console.log(`You: ${this.human.score}`);
    console.log(`Computer: ${this.computer.score}`);
  },

  displayGoodbye() {
    console.log("Thank you for playing Rock, Paper, Scissors");
  },


  play() {
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
  }
};

function createPlayer() {
  return {
    currentMove: null,
    score: 0,
    moveHistory: [], // [[[rock, win], [paper, loss], [scissors, tie]]]
  };
}

function createHuman() {
  let genericPlayer = createPlayer();
  let human = {
    selectMove() {
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
    }
  };
  return Object.assign(genericPlayer, human);
}

// eslint-disable-next-line max-lines-per-function
function createComputer() { // These can get really long. How do we split these out?
  let genericPlayer = createPlayer();

  let computer = {
    adjustmentThreshold: 0.3, // If the win % of a move falls below this threshold, the adjustment kicks in
    weightAdjustment: 8,      // The amount that we adjust when the threshold gets met

    percentageWeighting: {
      rock: 33,
      paper: 33,
      scissors: 33,
    },

    selectMove() { // Selects a move (takes the weighting into account)
      let total = 0;

      for (let move in this.percentageWeighting) {
        total += this.percentageWeighting[move];
      }
      let threshold = Math.random() * total;

      let runningSum = 0;
      for (let move in this.percentageWeighting) {
        runningSum += this.percentageWeighting[move]; //33
        if (threshold < runningSum) {
          this.currentMove = move;
          break;
        }
      }
    },

    updateWeighting() {
      let historyOfCurrentMove = this.moveHistory.filter(record => {
        return record[0] === this.currentMove;
      }); //[['rock', 'loss'], ['rock', 'win']]

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
    }
  };
  return Object.assign(genericPlayer, computer);
}

gameplay.play();
