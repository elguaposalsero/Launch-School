let readline = require('readline-sync');


function Board() {
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

Board.prototype.displayBoard = function() {
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
};

Board.prototype.addMove = function(square, marker) {
  let emptySpaces = this.openSpaces();

  if (emptySpaces.includes(square)) {
    this.state[square] = marker;
  }
};

Board.prototype.openSpaces = function() {
  let openSpaces = Object.keys(this.state).filter(key => this.state[key] === ' ');

  if (openSpaces.length === 0) {
    return null;
  } else {
    return openSpaces;
  }
};

function Player() {
  this.moves = [];
}

Player.prototype.allMoves = function() {
  return this.moves;
};

function Human() {
  Player.call(this);
}

Human.prototype = Object.create(Player.prototype);
Human.prototype.constructor = Human;
Human.HUMAN_MOVE = 'X';

Human.prototype.move = function(board) {
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

function Computer() {
  Player.call(this);
}

Computer.prototype = Object.create(Player.prototype);
Computer.prototype.constructor = Computer;

Computer.COMPUTER_MOVE = '0';
Computer.prototype.move =  function(board) {
  let openSpaces = board.openSpaces();
  // eslint-disable-next-line max-len
  let square = (openSpaces[(Math.floor(Math.random() * openSpaces.length))]).toString();
  board.addMove(square, Computer.COMPUTER_MOVE);
  this.moves.push(square);
};

function Game() {
  this.human = new Human();
  this.computer = new Computer();
  this.board = new Board();
}

Game.WINNING_COMBOS = [
  [ "1", "2", "3" ],            // top row of board
  [ "4", "5", "6" ],            // center row of board
  [ "7", "8", "9" ],            // bottom row of board
  [ "1", "4", "7" ],            // left column of board
  [ "2", "5", "8" ],            // middle column of board
  [ "3", "6", "9" ],            // right column of board
  [ "1", "5", "9" ],            // diagonal: top-left to bottom-right
  [ "3", "5", "7" ],            // diagonal: bottom-left to top-right
];

Game.prototype.play = function() {
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
};

Game.prototype.displayGreeting = function() {
  console.log('Welcome to tic tac toe');
};

Game.prototype.isWinner = function(player) {
  for (let combo of Game.WINNING_COMBOS) {
    if (combo.every(move => player.allMoves().includes(move))) return true;
  }
  return false;
}

Game.prototype.findWinner = function() {
  if (this.isWinner(this.human)) {
    return 'human';
  } else if (this.isWinner(this.computer)) {
    return 'computer';
  } else {
    return undefined;
  }
}

Game.prototype.displayWinner = function() {
  if (this.findWinner() === 'human') {
    console.log ('Sigh... congrats, you won the game');
  } else if (this.findWinner() === 'computer') {
    console.log('I Won! I Won! Ha!');
  } else {
    console.log("It's a tie. Good game!");
  }
}

Game.prototype.gameOver = function() {
  if (this.findWinner() || !this.board.openSpaces()) {
    return true;
  } else {
    return false;
  }
};

let game = new Game();
game.play();