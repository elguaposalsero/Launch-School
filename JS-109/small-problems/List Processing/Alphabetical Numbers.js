// Write a function that takes array of integers 0 - 19
// Sorts that array based on the english words linked to those numbers.
// ---
// Place the numbers into an object
// Loop through each number in the array
// Create an array with the words associated
// Sort that new array
// Link that array back to numbers


let numsToWords = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen'
};


function sortByWords(array) {
  return array.sort(compare);
}

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

console.log(sortByWords(array));

function sortByWords(array) {
  return array.sort((a,b) => {
    if (numsToWords[a] > numsToWords[b] > 0) {
      return 1;
    } else {
      return -1;
    }
  });
}
