// Returns a list of all Palindromic substrings
// Substrings should be sorted in their order of appearance
// Single characters are not palindromes
// Case sensitive
// Use the substring function you previouslty wrote


function leadingSubstrings(string) {
  let output = [];
  for (let length = 1; length <= string.length; length++) {
    output.push(string.slice(0, length));
  }
  return output;
}


function substrings(string) {
  let substrings = [];
  for (let index = 0; index < string.length; index++) {
    substrings.push(...leadingSubstrings(string.slice(index)));
  }
  return substrings;
}

// SOLUTION
// Create an array of all possible substrings
// Create an "is palindrome" function
// Use the "filter" higher order function to find palindromes


function isPalindrome(string) {
  let start = 0;
  let end = string.length - 1;
  if (start === end) {
    return false;
  }
  while (start < end) {
    if (string[start] !== string[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

function palindromes(string) {
  return(substrings(string).filter(isPalindrome));
}


// TEST CASES
console.log(palindromes('abcd'));     // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
