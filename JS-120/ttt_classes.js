/* eslint-disable max-statements */
let readline = require('readline-sync');

class Board {
  constructor() {
    this.state = {
      1: ' ',
      2: ' ',
      3: ' ',
      4: ' ',
      5: ' ',
      6: ' ',
      7: ' ',
      8: ' ',
      9: ' '
    };
  }

  displayBoard() {
    console.log(' ');
    console.log(`     |     |     `);
    console.log(`  ${this.state['1']}  |  ${this.state['2']}  |  ${this.state['3']}`);
    console.log(`     |     |`);
    console.log(`-----+-----+-----`);
    console.log(`     |     |`);
    console.log(`  ${this.state['4']}  |  ${this.state['5']}  |  ${this.state['6']}`);
    console.log(`     |     |`);
    console.log(`-----+-----+-----`);
    console.log(`     |     |`);
    console.log(`  ${this.state['7']}  |  ${this.state['8']}  |  ${this.state['9']}  `);
    console.log(`     |     |`);
    console.log(' ');
  }

  addMove(square, marker) {
    let emptySpaces = this.findSpaces(" ");

    if (emptySpaces.includes(square)) {
      this.state[square] = marker;
    }
  }

  findSpaces(type = ' ') {
    let found = Object.keys(this.state).filter(key => this.state[key] === type);
    if (found.length === 0) {
      return [];
    } else {
      return found;
    }
  }

}

class Player {
  constructor() {
    this.moves = [];
  }

  allMoves() {
    return this.moves;
  }

  joinOr(array, delimiter = ', ', conjunction = 'or') {
    if (array.length === 1) {
      return array.toString();
    } else if (array.length === 2) {
      return `${array[0]} ${conjunction} ${array[1]}`;
    } else {
      let lastElement = array[array.length - 1];
      let result =  array.slice(0, -1).join(delimiter);
      return `${result}${delimiter}${conjunction} ${lastElement}`;
    }
  }
}

class Human extends Player {
  constructor() {
    super();
  }

  static HUMAN_MOVE = 'X'; // Why can't you use const

  move(board) {
    let square;

    while (true) {
      let openSpaces = board.findSpaces(" ");
      square = (readline.question(`Please enter a move in an open space (${this.joinOr(openSpaces)}): `));

      if (openSpaces.includes(square)) break;

      console.log(' ');
      console.log('Invalid Move');
    }

    board.addMove(square, Human.HUMAN_MOVE);
    this.moves.push(square);
  }

}

class Computer extends Player {
  constructor() {
    super();
  }

  static COMPUTER_MOVE = 'O';

  move(board) { 
    let winningSquare = this.findWinningSquare(board, Computer.COMPUTER_MOVE);
    let atRiskSquare = this.findWinningSquare(board, Human.HUMAN_MOVE);
    let randomSquare = this.randomMove(board);

    if (winningSquare) {
      board.addMove(winningSquare, Computer.COMPUTER_MOVE);
      this.moves.push(winningSquare);
    } else if (atRiskSquare) {
      board.addMove(atRiskSquare, Computer.COMPUTER_MOVE);
      this.moves.push(atRiskSquare);
    } else {
      board.addMove(randomSquare, Computer.COMPUTER_MOVE);
      this.moves.push(randomSquare);
    }
  }

  findWinningSquare(board, marker) {
    for (let winningCombo of Game.WINNING_COMBOS) {
      let optimalMove;
      let count = 0;
      let moves = board.findSpaces(marker);

      for (let square of winningCombo) {
        if (moves.includes(square)) {
          count += 1;
        } else {
          optimalMove = square;
        }
      }
      if (count === 2 && board.findSpaces(' ').includes(optimalMove)) {
        return optimalMove;
      }
    }
    return null;
  }

  randomMove(board) {
    let openSpaces = board.findSpaces(' ');
    let randomSpace = Math.floor(Math.random() * openSpaces.length);
    return openSpaces[randomSpace].toString();
  }
}

class Game {
  static WINNING_COMBOS = [
    [ "1", "2", "3" ],            // top row of board
    [ "4", "5", "6" ],            // center row of board
    [ "7", "8", "9" ],            // bottom row of board
    [ "1", "4", "7" ],            // left column of board
    [ "2", "5", "8" ],            // middle column of board
    [ "3", "6", "9" ],            // right column of board
    [ "1", "5", "9" ],            // diagonal: top-left to bottom-right
    [ "3", "5", "7" ],            // diagonal: bottom-left to top-right
  ];

  constructor() {
    this.human = new Human();
    this.computer = new Computer();
    this.board = new Board();
  }

  play() {
    this.board.displayBoard();
    while (true) {
      this.human.move(this.board);
      if (this.gameOver()) break;
      this.computer.move(this.board);
      if (this.gameOver()) break;
      this.board.displayBoard();
    }
    this.board.displayBoard();
    this.displayWinner();
  }

  isWinner(player) {
    for (let combo of Game.WINNING_COMBOS) {
      if (combo.every(move => player.allMoves().includes(move))) return true;
    }
    return false;
  }

  findWinner() {
    if (this.isWinner(this.human)) {
      return 'human';
    } else if (this.isWinner(this.computer)) {
      return 'computer';
    } else {
      return undefined;
    }
  }

  displayWinner() {
    if (this.findWinner() === 'human') {
      console.log ('Sigh... congrats, you won the game');
    } else if (this.findWinner() === 'computer') {
      console.log('I Won! I Won! Ha!');
    } else {
      console.log("It's a tie. Good game!");
    }
  }

  gameOver() {
    if (this.findWinner() || this.board.findSpaces(" ").length === 0) {
      return true;
    } else {
      return false;
    }
  }

}

class Match {
  constructor() {
    this.score = {
      human: 0,
      computer: 0
    };
  }

  start() {
    do {
      this.displayGreeting();
      let game = new Game();
      game.play();
      this.adjustScore(game);

      console.log("The current score is:");
      console.log(`Human: ${this.score['human']}`);
      console.log(`Computer: ${this.score['computer']}`);

    } while (!this.endMatch());
    this.displayGoodbye();
  }

  endMatch() {
    let playAgain;
    let validAnswers = ['y', 'n'];

    if (this.score['human'] === 3 || this.score['computer'] === 3) {
      return true;
    }

    while (true) {
      playAgain = readline.question('Would you like to play again? (y/n): ') || ' ';
      if (validAnswers.includes(playAgain.toLowerCase())) {
        break;
      } else {
        console.log('Invalid Selection');
      }
    }
    if (playAgain === 'y') {
      return false;
    } else {
      return true;
    }
  }

  displayGreeting() {
    console.log('Welcome to tic tac toe');
  }

  displayGoodbye() {
    console.log('Goodbye. Thanks for playing!');
  }

  adjustScore(game) {
    if (game.findWinner() === 'human') {
      this.score['human'] += 1;
    } else if (game.findWinner() === 'computer') {
      this.score['computer'] += 1;
    }
  }
}

let match = new Match();
match.start();

// Keep Score
// The first player to reach 3 wins is the winner.
// Add swapping to who goes first or second.