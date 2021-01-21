const CARDS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const SUITS = ['♣', '♦', '♥', '♠'];
const HIGH_VALUE_ACE = 11;
const LOW_VALUE_ACE = 1;
const WINNING_SCORE = 21;
const DEALER_CUTOFF_SCORE = 17;
let player = [];
let dealer = [];
let deck;

let readlineSync = require('readline-sync');

//Initialize Deck ['A♣', 'A♦',  'A♥',  'A♠',  '2♣' ...]
function initializeDeck() {
  return CARDS.flatMap(card => SUITS.map(suit => `${card}${suit}`));
}

function print(message) {
  console.log(message);
}

// Select a random card from the deck
function selectCard() {
  return deck[Math.floor(Math.random() * (deck.length - 1))];
}

function dealCard(user) {
  let card = selectCard();
  user.push(card);
  removeFromDeck(deck.indexOf(card)); // Remove the card that was picked from the deck
}

function removeFromDeck(index) {
  deck.splice(index, 1);
}

function dealInitialHands() {
  dealCard(player);
  dealCard(player);
  dealCard(dealer);
  dealCard(dealer);
}

function displayCards(user) {
  if (user === player) {
    print(`Your Hand: ${player}`);
  } else {
    let dealerDisplay = [];
    dealer.forEach((card, index) => {
      if (index === 1) {
        dealerDisplay.push('--');
      } else {
        dealerDisplay.push(card);
      }
    });
    print(`Dealer Hand: ${dealerDisplay}`);
  }
}

function calculateScore(user) {
  let scoreWithoutAces = 0;
  let numberOfAces = 0;
  user.forEach(card => {
    let slicedCard = card.slice(0, (card.length - 1));
    switch (slicedCard) {
      case 'J':
      case 'Q':
      case 'K':
        scoreWithoutAces += 10;
        break;
      case 'A':
        numberOfAces += 1; // Edit: Will need to call a function to calc ace value
        break;
      default:
        scoreWithoutAces += Number(slicedCard);
    }
  });
  return calculateScoreWithAces(scoreWithoutAces, numberOfAces);
}

function calculateScoreWithAces(scoreWithoutAces, numberOfAces) {
  let score = scoreWithoutAces;
  for (let index = 0; index < numberOfAces; index += 1) {
    if ((scoreWithoutAces + HIGH_VALUE_ACE) > 21) {
      score += LOW_VALUE_ACE;
    } else {
      score += HIGH_VALUE_ACE;
    }
  }
  return score;
}

function determineWinner(player, dealer) {
  let playerScore = calculateScore(player);
  let dealerScore = calculateScore(dealer);
  if (playerScore > 21 && dealerScore > 21) {
    return 'tie';
  } else if (playerScore > 21 && dealerScore <= 21) {
    return 'dealer';
  } else if (playerScore <= 21 && dealerScore > 21) {
    return 'player';
  } else {
    return playerScore > dealerScore ? 'player' : 'dealer';
  }
}

//Start the game
deck = initializeDeck();
dealInitialHands();
displayCards(player);
displayCards(dealer);

let playerContinue = true;
let dealerContinue = true;

while (playerContinue || dealerContinue) {
  if (calculateScore(player) >= WINNING_SCORE) {
    playerContinue = false;
  }
  if (calculateScore(dealer) >= DEALER_CUTOFF_SCORE) {
    dealerContinue = false;
  }
  if (playerContinue) {
    print('Would you like to hit or stay');
    let playerAnswer = readlineSync.question();
    if (playerAnswer  === 'hit') {
      dealCard(player);
    } else {
      playerContinue = false;
    }
  }
  if (dealerContinue) {
    dealCard(dealer);
  } else {
    dealerContinue = false;
  }
  console.clear();
  displayCards(player);
  displayCards(dealer);
}

print('The final board looks like this:');
print (`Player's Cards: ${player}`);
print (`Dealer's Cards ${dealer}`);

let winner = determineWinner(player, dealer);
if (winner === 'tie') {
  print('The game is a tie');
} else if (winner === 'player') {
  print('You Win!');
} else if (winner === 'dealer') {
  print('The dealer wins');
}

