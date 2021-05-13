// Sentence string as argument
// Returns string with every occurance of number word

const NUM_WORDS = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

function wordToDigit(string) {
  Object.keys(NUM_WORDS).forEach(numString => {
    let regex = new RegExp('\\b' + numString + '\\b', 'g');
    string = string.replace(regex, NUM_WORDS[numString]);
  });
  return string;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."


//How to capture either a period or a 