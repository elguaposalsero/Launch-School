let readline = require('readline-sync');

class Card {
  
  static SUITS = ['♦', '♣', '♥', '♠']
  static RANKS = ["2", "3", "4", "5", "6", "7", "8", "9", "10",
                  "Jack", "Queen", "King", "Ace"];
  
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }

  reveal() {
    this.hidden = false;
  }

  getRank() {
    return this.rank;
  }

  getSuit() {
    return this.suit;
  }

  toString() {
    if (this.hidden) return "Hidden";
    return `${this.getRank()}${this.getSuit()}`;
  }

  isHidden() {
    return this.hidden;
  }
}

class Deck {
  constructor() {
    this.cards = [];
    Card.SUITS.forEach(suit => {
      Card.RANKS.forEach(rank => {
        this.cards.push(new Card(rank, suit));
      });
    });
  }

  dealCardFaceUp(faceUp = true) {
    let idx = Math.floor(Math.random() * this.cards.length);
    let dealingCard = this.cards[idx];

    if (!faceUp) dealingCard.hide();

    this.removeCardAtIndex(idx);
    return dealingCard;
  }

  removeCardAtIndex(idx) {
    this.cards.splice(idx, 1);
  }
}

class Player {
  constructor() {
    this.reset();
  }

  reset() {
    this.hand = [];
    this.playStatus = true;
  }

  toString() {
    return `${this.constructor.name}: ${this.hand.join(', ')}`;
  }

  addToHand(card) {
    this.hand.push(card);
  }

  stillPlaying() {
    return this.playStatus;
  }

  getHand() {
    return this.hand;
  }

  revealAllCards() {
    this.getHand().forEach(card => card.reveal());
  }
}

class Human extends Player {
  constructor() {
    super();
    this.accountBalance = Human.INITIAL_BALANCE;
  }

  static WINNING_BALANCE = 10
  static INITIAL_BALANCE = 5;

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

  isRich() {
    if (this.accountBalance === Human.WINNING_BALANCE) return true;
    return false;
  }

  isBroke() {
    if (this.accountBalance === 0) return true;
    return false;
  }

  displayAccountBalance() {
    console.log(`You have $${this.accountBalance} remaining`)
  }

  addDollar() {
    this.accountBalance += 1;
  }

  subtractDollar() {
    this.accountBalance -= 1;
  }
}

class Dealer extends Player {
  constructor() {
    super();
  }
}

class Game {
  constructor() {
    this.human = new Human();
    this.dealer = new Dealer();
  }

  static TARGET_SCORE = 21;
  static HIT = 'h';
  static STAY = 's';
  static MIN_ACE_VALUE = 1;
  static MAX_ACE_VALUE = 11;
  static DEALER_STOP_VAL = 17


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
    Jack: 10,
    Queen: 10,
    King: 10,
  }

  play() {
    this.displayWelcome();
    this.displayRules();
    this.readRules();
    while (true) {
      this.playRound();
      this.adjustHumanAccountBalance();
      this.human.displayAccountBalance();
      if (this.human.isBroke() || this.human.isRich()) break;
      if (!this.playAgain()) break;
    }
    this.displayGoodbye();
  }

  playRound() {
    this.dealInitialCards();
    while (!this.roundOver()) {
      this.displayHand(this.human, true);
      this.displayHand(this.dealer, false);
      this.humanTurn();
      if (this.isBusted(this.human)) break;
      this.dealerTurn();
      this.clearScreen();
    }
    this.clearScreen();
    this.displayRoundResult();
  }

  displayWelcome() {
    console.log("Welcome to the game Twenty One");
  }

  displayRules() {
    console.log("You'll start with $5. You can keep playing until you go broke ($0) or become rich ($10)");
  }

  dealInitialCards() {
    this.deck = new Deck();
    this.human.reset();
    this.dealer.reset();
    this.human.addToHand(this.deck.dealCardFaceUp());
    this.human.addToHand(this.deck.dealCardFaceUp());
    this.dealer.addToHand(this.deck.dealCardFaceUp());
    this.dealer.addToHand(this.deck.dealCardFaceUp(false));
  }

  humanTurn() {
    if (!this.human.stillPlaying()) return;
    if (this.human.hitOrStay() === Game.HIT) {
      this.human.addToHand(this.deck.dealCardFaceUp());
    }
  }

  dealerTurn() {
    if ((this.computeScore(this.dealer) < Game.DEALER_STOP_VAL) &&
        (!this.isBusted(this.human))) {
      this.dealer.revealAllCards();
      this.dealer.addToHand(this.deck.dealCardFaceUp(false));
    }
  }

  roundOver() {
    if ((!this.human.stillPlaying() || this.isBusted(this.human)) &&
        (this.computeScore(this.dealer) >= Game.DEALER_STOP_VAL)) {
          return true;
      }
    return false;
  }

  computeScore(player, includeHiddenCards = true) {
    let hand = player.getHand();

    let numAces = this.countAces(hand);
    let handWithoutAces = this.withoutAces(hand);

    if (!includeHiddenCards) {
      numAces = this.countAces(this.faceUpCards(hand));
      handWithoutAces = this.faceUpCards(this.withoutAces(hand));
    }

    let valueWithoutAces = handWithoutAces.reduce((sum, card) => {
      return sum + Game.CARD_VALUES[card.getRank()];
    }, 0);

    return this.valueWithAces(valueWithoutAces, numAces);
  }

  countAces(hand) {
    return hand.filter(card => card.getRank() === 'Ace').length;
  }

  withoutAces(hand) {
    return hand.filter(card => card.getRank() !== 'Ace');
  }

  faceUpCards(hand) {
    return hand.filter(card => card.isHidden() === false);
  }

  valueWithAces(valueWithoutAces, numAces) {
    let valueWithAces = valueWithoutAces;
    while (numAces > 0) {
      if (valueWithAces + Game.MAX_ACE_VALUE <= Game.TARGET_SCORE) {
        valueWithAces += Game.MAX_ACE_VALUE;
      } else {
        valueWithAces += Game.MIN_ACE_VALUE;
      }
      numAces -= 1;
    }
    return valueWithAces;
  }

  isBusted(player) {
    return this.computeScore(player) > Game.TARGET_SCORE;
  }

  displayHand(player, fullScore) {
    console.log(`${player}: (${this.computeScore(player, fullScore)} points)`);
  }

  revealHands() {
    this.dealer.revealAllCards();
    this.displayHand(this.human);
    this.displayHand(this.dealer);
  }

  roundWinner() {
    let humanScore = this.computeScore(this.human);
    let dealerScore = this.computeScore(this.dealer);

    if (this.isBusted(this.human) && this.isBusted(this.dealer)) {
      return null;
    } else if (this.isBusted(this.human)) {
      return this.dealer;
    } else if (this.isBusted(this.dealer)) {
      return this.human;
    } else if (humanScore > dealerScore) {
      return this.human;
    } else if (dealerScore > humanScore) {
      return this.dealer;
    } else {
      return null;
    }
  }

  displayRoundResult() {
    this.revealHands();
    let humanScore = this.computeScore(this.human);
    let dealerScore = this.computeScore(this.dealer);

    if (this.isBusted(this.human) && this.isBusted(this.dealer)) {
      console.log('Both Busted: The game is a tie!');
    } else if (this.isBusted(this.human)) {
      console.log('You busted! Dealer wins.');
    } else if (this.isBusted(this.dealer)) {
      console.log('Dealer Busted! You win.');
    } else if (humanScore > dealerScore) {
      console.log('Human wins with higher score');
    } else if (dealerScore > humanScore) {
      console.log('Dealer wins with higher score');
    } else {
      console.log('Same score: Game is a tie');
    }
  }

  clearScreen() {
    console.clear();
  }

  adjustHumanAccountBalance() {
    if (this.roundWinner() === this.human) {
      this.human.addDollar();
    } else if (this.roundWinner() === this.dealer) {
      this.human.subtractDollar();
    }
  }

  playAgain() {
    let answer;

    while (true) {
      answer = readline.question('Would you like to play again? (y/n): ').toLowerCase()[0];
      if (['y', 'n'].includes(answer)) break;
      console.log('Please enter a valid choice');
    }
    console.log(answer);
    this.clearScreen();
    return answer === 'y';
  }

  displayGoodbye() {
    console.log('Thanks for playing!');
  }

  readRules() {
    readline.question('Press return to continue...');
    this.clearScreen();
  }
}

let game = new Game();
game.play();