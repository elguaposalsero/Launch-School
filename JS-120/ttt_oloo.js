let readline = require('readline-sync');

let Board = {

  init() {
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
    return this;
  },

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
  },

  addMove(square, marker) {
    let emptySpaces = this.openSpaces();
    if (emptySpaces.includes(square)) {
      this.state[square] = marker;
    }
  },

  openSpaces() {
    let openSpaces = Object.keys(this.state).filter(key => this.state[key] === ' ');
    if (openSpaces.length === 0) {
      return null;
    } else {
      return openSpaces;
    }
  },
};


let PlayerPrototype = {
  initialize() {
    this.moves = [];
    return this;
  },

  allMoves() {
    return this.moves;
  }
};

let Human = Object.create(PlayerPrototype); // A human object inhereting from Player Prototype.
Human.init = function() {
  return this.initialize();
};

Human.HUMAN_MOVE = 'X' // This is equivalent to a static variable

Human.move = function(board) {
  let square;
  while (true) {
    let openSpaces = board.openSpaces();
    square = (readline.question(`Please enter a move in an open space(${openSpaces.join(', ')}): `));

    if (openSpaces.includes(square)) break;

    console.log(' ');
    console.log('Invalid Move');
  }

  board.addMove(square, Human.HUMAN_MOVE);
  this.moves.push(square);
};

let Computer = Object.create(PlayerPrototype);

Computer.init = function() {
  return this.initialize();
};

Computer.COMPUTER_MOVE = '0';


Computer.move = function(board) {
  let openSpaces = board.openSpaces();
  // eslint-disable-next-line max-len
  let square = (openSpaces[(Math.floor(Math.random() * openSpaces.length))]).toString();
  board.addMove(square, Computer.COMPUTER_MOVE);
  this.moves.push(square);
};

let Game = {
  WINNING_COMBOS: [
    [ "1", "2", "3" ],            // top row of board
    [ "4", "5", "6" ],            // center row of board
    [ "7", "8", "9" ],            // bottom row of board
    [ "1", "4", "7" ],            // left column of board
    [ "2", "5", "8" ],            // middle column of board
    [ "3", "6", "9" ],            // right column of board
    [ "1", "5", "9" ],            // diagonal: top-left to bottom-right
    [ "3", "5", "7" ],            // diagonal: bottom-left to top-right
  ],

  init() {
    this.human = Object.create(Human).init();
    this.computer = Object.create(Computer).init();
    this.board = Object.create(Board).init();
    return this;
  },

  play() {
    this.displayGreeting();
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
  },

  displayGreeting() {
    console.log('Welcome to tic tac toe');
  },

  isWinner(player) {
    for (let combo of Game.WINNING_COMBOS) {
      if (combo.every(move => player.allMoves().includes(move))) return true;
    }
    return false;
  },

  findWinner() {
    if (this.isWinner(this.human)) {
      return 'human';
    } else if (this.isWinner(this.computer)) {
      return 'computer';
    } else {
      return undefined;
    }
  },

  displayWinner() {
    if (this.findWinner() === 'human') {
      console.log ('Sigh... congrats, you won the game');
    } else if (this.findWinner() === 'computer') {
      console.log('I Won! I Won! Ha!');
    } else {
      console.log("It's a tie. Good game!");
    }
  },

  gameOver() {
    if (this.findWinner() || !this.board.openSpaces()) {
      return true;
    } else {
      return false;
    }
  }
};

let game = Object.create(Game).init();
game.play();