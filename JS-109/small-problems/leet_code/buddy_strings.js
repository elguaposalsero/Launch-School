// Buddy Strings
// Given two strings, a and b, return true if you can swap two letters
// in "a" so that the result is equal to b
// Otherwise, return false
// E.g. a = "aaaabc", b = "aaaacb"

let first = 'aaaabc';
let second = 'aaaacb';


function buddyStrings (first, second) {
  if (first.length !== second.length) {
    return false;
  }

  let secondArray = second.split('');
  let beg = 0;
  let end = 1;


  while (end < first.length) {
    let firstArray = first.split('');
    [firstArray[beg], firstArray[end]] = [firstArray[end], firstArray[beg]];

    if (firstArray.join('') === secondArray.join('')) {
      return true;
    }

    beg++;
    end++;
  }

  return false;
}

console.log(buddyStrings(first, second));

// Check the length. If not the same length, return false
// Loop through first
// Switch index and index + 1
// Compare to the second
// If they're now equal, return true

// abcde => bacde => acbde => abdce
// abdce

// Data Structure: Use an array 

// If you finish the whole loop and it's not equal, return false

