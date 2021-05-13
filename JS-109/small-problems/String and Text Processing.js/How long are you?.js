// Takes a string as an argument
// Returns an array with every word + word length
// If the argument is empty, return an empty array.
// Assume that every word is followed by a single space

function wordLengths(string = '') {
  let output = [];
  let wordList = string.split(' ');

  if (string === '') {
    return output;
  }

  wordList.forEach(word => {
    output.push(word + ' ' + word.length);
  });

  return output;
}


console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []