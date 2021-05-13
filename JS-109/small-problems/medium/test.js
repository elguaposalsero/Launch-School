// Capture all words without punctuation or spaces

let string = 'Please call me at five five five one two three four. Thanks.';

// Capture every word boundary /\b\[a-zA-Z]+\b/
// Or, if it's a non word [\W+]

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

function wordToDigit(sentence) {
  let output = '';
  let splitSentence = sentence.match(/(\b[a-zA-Z]+\b|\W+)/g);
  splitSentence.forEach(element => {
    if (Object.keys(NUM_WORDS).includes(element)) {
      output += NUM_WORDS[element];
    } else {
      output += element;
    }
  });
  return output;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));