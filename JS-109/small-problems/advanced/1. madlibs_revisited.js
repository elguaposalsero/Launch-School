// Takes a text template
// Plugs in randomized nouns and versbs and adjectives
// Returns it

let replacementWords = {
  adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
  noun: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
  verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
  adverb: ['easily', 'lazily', 'noisily', 'excitedly']
};

let template = "The noun verb the noun's noun";

function pickRandom(array) {
  let index = Math.floor(Math.random() * (array.length));
  return array[index];
}

function madlibs(template) {
  let toBeReplaced = template.match(/(adjective|noun|verb|adverb)/g);

  for (let partOfSpeech of toBeReplaced) {
    let wordList = replacementWords[partOfSpeech];
    template = template.replace(partOfSpeech, pickRandom(wordList));
  }

  return template;
}

console.log(madlibs(template));

/*

// These examples use the following list of replacement texts:
adjectives: quick lazy sleepy noisy hungry
nouns: fox dog head leg tail cat
verbs: jumps lifts bites licks pats
adverbs: easily lazily noisily excitedly
------

madlibs(template1);
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

madlibs(template1);
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

madlibs(template2);      // The "fox" "bites" the "dog"'s "tail".

madlibs(template2);      // The "cat" "pats" the "cat"'s "head".
*/