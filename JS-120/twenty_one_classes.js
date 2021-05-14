let readline = require('readline-sync');

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
      this.removeCardAtIndex(randIndex);
      numCards -= 1;
    }

    return selectedCards;
  }

  removeCardAtIndex(index) {
    this.deck.splice(index, 1);
  }
}

class Player {
  constructor() {
    this.reset();
  }

  acceptCards(cards) {
    this.hand.push(...cards);
  }

  displayHand() {
    console.log(`${this.constructor.name}: ${this.hand.join(', ')}`);
  }

  stillPlaying() {
    return this.playStatus;
  }

  reset() {
    this.hand = [];
    this.playStatus = true;
  }

  getHand() {
    return this.hand;
  }

}

class Human extends Player {
  constructor() {
    super();
  }

  hitOrStay() {
    let selection;

    while (true) {
      selection = (readline.question('Hit Or Stay (h/s)? ')).toLowerCase()[0];
      if (selection === Game.HIT || selection === Game.STAY) break;
    }

    if (selection === Game.STAY) {
      this.playStatus = false;
    }

    return selection;
  }

}

class Dealer extends Player {
  constructor() {
    super();
  }

  getPartialHand() {
    return this.hand.slice(0, -1);
  }

  displayPartialHand() {
    console.log(`${this.constructor.name}: ${this.getPartialHand().join(', ')} + Unknown`);
  }
}

class Game {
  constructor() {
    this.humanAccountBalance = 5;
    this.human = new Human;
    this.dealer = new Dealer;
    this.deck = new Deck;
  }

  static TARGET_SCORE = 21;
  static HIT = 'h';
  static STAY = 's';
  static MIN_ACE_VALUE = 1;
  static MAX_ACE_VALUE = 11;
  static DEALER_STOP_VALUE = 17

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

  // play() { // Need to refresh
  //   this.displayWelcome();
  //   this.displayRules();
  //   do {
  //     this.playRound();
  //     this.human.displayHand();
  //     this.dealer.displayHand();
  //     this.calculateRoundWinner();
  //     this.displayRoundWinner();
  //     this.adjustHumanAccountBalance();
  //     this.displayAccountBalance();
  //   } while (!this.gameOver());
  //   this.displayGoodbye();
  // }

  playRound() {
    this.dealInitialCards();
    while (!this.roundOver()) {
      this.human.displayHand();
      this.dealer.displayPartialHand();
      this.humanTurn();
      this.dealerTurn();
      this.clearScreen();
    }
    this.displayRoundResult();
  }

  displayFullHand(player) {
    console.log(`${this.player.displayHand()} — ${this.valueOfHand(player)} points`);
  }

  displayPartialHand(player) {
    console.log(`${this.player.displayPartialHand()} — ${this.valueOfHand(player)} points`);
  }


  displayWelcome() {
    console.log("Welcome to the game Twenty One");
  }

  displayRules() {
    console.log("You'll start with $5. You can keep playing until you go broke ($0) or become rich ($10)");
  }

  dealCards(player, numCards) {
    player.acceptCards(this.deck.dealCards(numCards));
  }

  dealInitialCards() {
    this.dealCards(this.human, 2);
    this.dealCards(this.dealer, 2);
  }

  isBusted(player) {
    return this.valueOfHand(player) > Game.TARGET_SCORE;
  }

  humanTurn() {
    if (!this.human.stillPlaying()) return;

    if (this.human.hitOrStay() === Game.HIT) {
      this.dealCards(this.human, 1);
    }
  }

  dealerTurn() {
    if ((this.valueOfHand(this.dealer) <= Game.DEALER_STOP_VALUE) &&
        (!this.isBusted(this.human))) {
      this.dealCards(this.dealer, 1);
    }
  }

  displayRoundResult() {
    this.human.displayHand();
    this.dealer.displayHand();

    if (this.calculateRoundWinner() === 'human') {
      console.log ('Congratulations, you won the round');
    } else if (this.calculateRoundWinner() === 'dealer') {
      console.log('Ha! The dealer won!');
    } else {
      console.log('Well Played ... this round was a tie');
    }
  }

  valueOfHand(player) { 
    let noAces = player.getHand().filter(card => card[0] !== 'A');
    let aces = player.getHand().filter(card => card[0] === 'A');

    let valueWithoutAces = noAces.reduce((sum, card) => {
      return sum + Game.CARD_VALUES[card.slice(0, -1)];
    }, 0);

    return this.valueWithAces(valueWithoutAces, aces);

  }

  valueWithAces(valueWithoutAces, aces) {
    let valueWithAces = valueWithoutAces;
    aces.forEach(ace => {
      if (valueWithAces + Game.MAX_ACE_VALUE <= Game.TARGET_SCORE) {
        valueWithAces += Game.MAX_ACE_VALUE;
      } else {
        valueWithAces += Game.MIN_ACE_VALUE;
      }
    });
    return valueWithAces;
  }

  roundOver() {
    if (this.isBusted(this.human) || !this.human.stillPlaying()) {
      return true;
    }
    return false;
  }

  clearScreen() {
    console.clear();
  }

  calculateRoundWinner() {
    let human = this.valueOfHand(this.human);
    let dealer = this.valueOfHand(this.dealer);

    if ((human > dealer && human <= Game.TARGET_SCORE) ||
        (human <= Game.TARGET_SCORE && dealer > Game.TARGET_SCORE)) {
      return 'human';
    } else if ((dealer > human && dealer <= Game.TARGET_SCORE) ||
               (dealer <= Game.TARGET_SCORE && human > Game.TARGET_SCORE)) {
      return 'dealer';
    } else {
      return undefined;
    }
  }


  // adjustHumanAccountBalance() {
  //   if (this.roundWinner === 'human') {
  //     this.adjustAccountBalance(1);
  //   } else if (this.roundWinner === 'dealer') {
  //     this.adjustAccountBalance(-1);
  //   }
  // }

  // gameOver() {
  //   if (this.humanAccountBalance === 10 || this.humanAccountBalance === 0) {
  //     return true;
  //   }

  //   let playAgain;

  //   while (true) {
  //     playAgain = readline.question('Would you like to play again (y/n)? ').toLowerCase()[0];
  //     if (playAgain === 'y' || playAgain === 'n') break;
  //   }

  //   if (playAgain === 'y') {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  // displayRoundWinner() {
  //   if (this.roundWinner === undefined) {
  //     console.log ('This round was a tie');
  //   } else if (this.roundWinner === 'human') {
  //     console.log('Congrats, you won this round! You win $1');
  //   } else {
  //     console.log('Ha! The dealer won. You lose $1');
  //   }
  // }

  // displayGoodbye() {
  //   console.log("The game is over. Thanks for Playing!");
  //   // Explain why the game is over
  // }

  // adjustAccountBalance(adjustment) {
  //   this.humanAccountBalance += adjustment;
  // }

  // displayAccountBalance() {
  //   console.log(`Your current balance is: $${this.humanAccountBalance}`);
  // }

}

let game = new Game();
game.playRound()

// dealerTurn() {
//   this.dealer.revealAllCards();

//   console.clear();
//   this.showCards();

//   while (true) {
//     let score = this.computeScoreFor(this.dealer);
//     if (score >= TwentyOneGame.DEALER_MUST_STAY_SCORE) break;
//     this.dealerContinue();
//     this.hit(this.dealer);
//   }
// }