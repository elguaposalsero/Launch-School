const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const GAMES_TO_WIN = 3;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7] //diagonals
];
const FIRST_MOVER_SETTING = 'choose'// Valid Options: 'player', 'computer', 'choose'

let readlineSync = require('readline-sync');

function displayBoard(board) {
  console.clear();
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');  
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square += 1) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function prompt(message) {
  console.log(message);
}

function playerChoosesSquare(board) {
  let square;
  let empty = emptySquares(board);

  while (true) {
    prompt(`Choose one of the following squares: ${joinOr(empty)}`);
    square = readlineSync.question();

    if (empty.includes(square)) break;
    console.log('Your selection was invalid');
  }
  board[square] = HUMAN_MARKER;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => {
    return board[key] === INITIAL_MARKER;
  });
}


function atRiskSquare(line, board, marker) { //line: [1, 2, 3] board: ['X', ' ', 'X', '0', 'O', ' ', ' ', ' ', ' ']
  let markerSquares = line.filter(val => board[val] === marker); //[1, 3]
  if (markerSquares.length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }
  return null;
}

function offensiveMove(board) {
  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    let square = atRiskSquare(line, board, COMPUTER_MARKER);
    if (square) return square;
  }
  return null;
}

function defensiveMove(board) {
  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    let square = atRiskSquare(line, board, HUMAN_MARKER);
    if (square) return square;
  }
  return null;
}

function takeCenterSquare(board) {
  let square;
  if (emptySquares(board).includes('5')) {
    square = '5';
    if (square) return square;
  }
  return null;
}

function takeRandomSquare(board) {
  let square;
  let empty = emptySquares(board);
  square = empty[Math.floor(Math.random() * empty.length)];
  return square;
}


function computerChoosesSquare(board) {
  let square;
  if (!square) square = offensiveMove(board);
  if (!square) square = defensiveMove(board);
  if (!square) square = takeCenterSquare(board);
  if (!square) square = takeRandomSquare(board);
  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWonGame(board) {
  return !!returnWinnerGame(board);
}

function detectWinner(moves) {
  return WINNING_LINES.some(winningCombo => { //checks if at least one is true
    return winningCombo.every(coordinate => {
      return moves.includes(coordinate);
    });
  });
}

function currentPositions(board) {
  let currentPositions = {
    humanSquares: [],
    computerSquares: []
  }

  for (let square in board) {
    if (board[square] === HUMAN_MARKER) {
      currentPositions.humanSquares.push(Number(square));
    } else if (board[square] === COMPUTER_MARKER) {
      currentPositions.computerSquares.push(Number(square));
    }
  }

  return currentPositions;
}

function returnWinnerGame(board) {
  let currPositions = currentPositions(board);

  if (detectWinner(currPositions.humanSquares)) {
    return "Human";
  } else if (detectWinner(currPositions.computerSquares)) {
    return "Computer";
  }
  return false;
}

function joinOr(array, delimiter = ', ', word = 'or') {
  switch (array.length) {
    case 0:
      return '';
    case 1:
      return `${array[0]}`;
    case 2:
      return array.join(` ${word} `);
    default:
      return array.slice(0, array.length - 1).join(delimiter) +
                  `${delimiter}${word} ${array[array.length - 1]}`;
  }
}

function someoneWonMatch(numGamesWon) {
  if (numGamesWon['human'] < GAMES_TO_WIN && numGamesWon['computer'] < GAMES_TO_WIN) {
    return false;
  } else {
    return true;
  }
}

// Main Gameplay
let numGamesWon = {human: 0, computer: 0};
let currentPlayer;

// Determine who goes first based on game setting
if (FIRST_MOVER_SETTING === 'choose') {
  prompt ('Who should go first? Player or Computer?');
  currentPlayer = readlineSync.question().toLowerCase();
} else {
  currentPlayer = FIRST_MOVER_SETTING;
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === 'player') {
    playerChoosesSquare(board);
  } else {
    computerChoosesSquare(board);
  }
}

function alternatePlayer(currentPlayer) {
  return (currentPlayer === 'player' ? 'computer' : 'player');
}

main:
while (true) { // Continue Game (y/n)
  let board = initializeBoard();

  displayBoard(board);
  while (true) { // Single Game
    console.log(`Human Score: ${numGamesWon['human']}\nComputer Score: ${numGamesWon['computer']}`);
    chooseSquare(board, currentPlayer);
    currentPlayer = alternatePlayer(currentPlayer);
    displayBoard(board);
    if (someoneWonGame(board) || boardFull(board)) break;
  }

  if (someoneWonGame(board)) {
    prompt(`${returnWinnerGame(board)} won the game!`);
    returnWinnerGame(board) === 'Human' ? numGamesWon['human'] += 1 : numGamesWon['computer'] += 1;
    if (someoneWonMatch(numGamesWon)) {
      numGamesWon['human'] = 0;
      numGamesWon['computer'] = 0;
      prompt(`${returnWinnerGame(board)} won the match!`);
    }
  } else {
    prompt("It's a tie");
  }

  while (true) {
    prompt('Would you like to play again? (y/n)');
    let answer = readlineSync.question().toLowerCase()[0];
    if (answer === 'y') {
      break;
    } else if (answer === 'n') {
      break main;
    }
  }
}


