// Improvements:
  // Added a small comment here
  // Purse should be calculated in the player class, not in the game class
  // Don't create a new player every game.
  // Improve names
  // Get rid of all constants
  // The game should be computing all of the scores
  // Get rid of all magic numbers.

// Questions
    // If I display constant in "game" but want to use it somewhere before
    // For example, maybe I want to use it in "player"
    // What do I do then in that case?

let readline = require('readline-sync');

class Player {
  constructor() {
    this.hand = [];
    this.playingStatus = true; //TK Change name
  }

  acceptCards(cards) {
    this.hand.push(...cards);
  }

  displayHand() {
    console.log(`${this.constructor.name}: ${this.hand.join(', ')}`);
  }

  stillPlaying() {
    return this.playingStatus;
  }

  valueOfHand() {
    let acesExcluded = this.hand.filter(card => card[0] !== 'A'); // Array without aces
    let aces = this.hand.filter(card => card[0] === 'A'); // Array with aces

    let valueWithoutAces = acesExcluded.reduce((sum, card) => {
      return sum + Game.CARD_VALUES[card.slice(0, -1)];
    }, 0);

    return this.valueWithAces(valueWithoutAces, aces);

  }

  valueWithAces(valueWithoutAces, numAces) { // Make winning score equal to 21 as a static variable
    let MIN_ACE_VALUE = 1;
    let MAX_ACE_VALUE = 11;

    let valueWithAces = valueWithoutAces;

    numAces.forEach(ace => {
      if (valueWithAces + MAX_ACE_VALUE <= 21) {
        valueWithAces += MAX_ACE_VALUE;
      } else {
        valueWithAces += MIN_ACE_VALUE;
      }
    });

    return valueWithAces;
  }

}

class Human extends Player {
  constructor() {
    super();
  }

  hitDecision() {
    let selection;

    if (this.valueOfHand() > 21) {
      this.playingStatus = false;
    }

    if (!this.playingStatus) {
      return false;
    }

    while (true) {
      selection = (readline.question('Hit Or Stay (h/s)? ')).toLowerCase()[0];
      if (selection === 'h' || selection === 's') break;
    }

    if (selection === 'h') {
      return true;
    } else {
      this.playingStatus = false;
      return false;
    }
  }

}

class Dealer extends Player {
  constructor() {
    super();
  }

  displayPartialHand() {
    let visibleHand = this.hand.slice(0, -1);
    console.log(`${this.constructor.name}: ${visibleHand.join(', ')} + Unknown`);
  }

  hitDecision() {
    if (this.valueOfHand() < 17) {
      return true;
    } else {
      this.playingStatus = false;
      return false;
    }
  }
}

class Deck {
  constructor() {
    this.deck = [];
    ['♦', '♣', '♥', '♠'].forEach(suit => {
      ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'].forEach(value => {
        this.deck.push(`${value}${suit}`);
      });
    });
  }

  dealCards(numCards) {
    let selectedCards = [];

    while (numCards > 0) {
      let randIndex = Math.floor(Math.random() * this.deck.length);
      selectedCards.push(this.deck[randIndex]);
      this.deck.splice(randIndex, 1);
      numCards -= 1;
    }

    return selectedCards;
  }
}

class Game {
  constructor() {
    this.humanAccountBalance = 5;
  }

  static TARGET_SCORE = 21;
  static HIT = 'h'
  static STAY = 's'

  static CARD_VALUES = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 10,
    Q: 10,
    K: 10,
  }

  play() {
    this.displayWelcome();
    this.displayRules();
    do {
      this.setupGame();
      this.playRound();
      this.human.displayHand();
      this.dealer.displayHand();
      this.calculateRoundWinner();
      this.displayRoundWinner();
      this.adjustHumanAccountBalance();
      this.displayAccountBalance();
    } while (!this.gameOver());
    this.displayGoodbye();
  }

  setupGame() {
    this.human = new Human();
    this.dealer = new Dealer();
    this.roundWinner = undefined;
    this.deck = new Deck();
  }

  playRound() {
    this.dealInitialCards();

    while (!this.roundOver()) {
      this.human.displayHand();
      this.dealer.displayPartialHand();

      if (this.human.hitDecision()) {
        this.dealCards(this.human, 1);
      }
      if (this.dealer.hitDecision()) {
        this.dealCards(this.dealer, 1);
      }
      console.clear();
    }
  }

  displayWelcome() {
    console.log("Welcome to the game Twenty One");
  }

  displayRules() {
    console.log("You'll start with $5. You can keep playing until you go broke ($0) or become rich ($10)");
  }


  dealCards(player, numCards) {
    let cards = this.deck.dealCards(numCards);
    player.acceptCards(cards);
  }

  dealInitialCards() {
    this.dealCards(this.human, 2);
    this.dealCards(this.dealer, 2);
  }

  roundOver() {
    if (this.dealer.stillPlaying() || this.human.stillPlaying()) {
      return false;
    }
    return true;
  }

  calculateRoundWinner() {
    let human = this.human.valueOfHand();
    let dealer = this.dealer.valueOfHand();

    console.log(human);
    console.log(dealer);

    if ((human > dealer && human <= 21) || (human <= 21 && dealer > 21)) {
      this.roundWinner = 'human';
    // eslint-disable-next-line max-len
    } else if ((dealer > human && dealer <= 21) || (dealer <= 21 && human > 21)) {
      this.roundWinner = 'dealer';
    } else {
      this.roundWinner = undefined;
    }
  }

  adjustHumanAccountBalance() {
    if (this.roundWinner === 'human') {
      this.adjustAccountBalance(1);
    } else if (this.roundWinner === 'dealer') {
      this.adjustAccountBalance(-1);
    }
  }

  gameOver() {
    if (this.humanAccountBalance === 10 || this.humanAccountBalance === 0) {
      return true;
    }

    let playAgain;

    while (true) {
      playAgain = readline.question('Would you like to play again (y/n)? ').toLowerCase()[0];
      if (playAgain === 'y' || playAgain === 'n') break;
    }

    if (playAgain === 'y') {
      return false;
    } else {
      return true;
    }
  }

  displayRoundWinner() {
    if (this.roundWinner === undefined) {
      console.log ('This round was a tie');
    } else if (this.roundWinner === 'human') {
      console.log('Congrats, you won this round! You win $1');
    } else {
      console.log('Ha! The dealer won. You lose $1');
    }
  }

  displayGoodbye() {
    console.log("The game is over. Thanks for Playing!");
    // Explain why the game is over
  }

  adjustAccountBalance(adjustment) {
    this.humanAccountBalance += adjustment;
  }

  displayAccountBalance() {
    console.log(`Your current balance is: $${this.humanAccountBalance}`);
  }

}

let game = new Game();
game.play();