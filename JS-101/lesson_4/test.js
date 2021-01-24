// Write a function called changeMe which returns the same string
// But all palindromes need to be uppercased
// changeMe("We will meet at noon") == "We will meet at NOON"
// changeMe("No palindromes here") = "No palindromes here"
// changeMe("") == ""
// changeMe("I LOVE my mom and dad eaqully") == "I LOVE my MOM and DAD equaLLy"
// ----
// Find every substring of the string that you input and put it into an array
// Loop through the array and check if each element is a palindrome

function palindromeSubstring(string) {
  // Returns all of the substrings from a string that are palindromes
  let result = [];
  let substrings = substring(string);
  substrings.forEach(substring => {
    if (isPalindrome(substring)) {
      result.push(substring);
    }
  });
  return result;
}

function isPalindrome(string) { //madam
  return string === string.split('').reverse().join('');
}

function substring (string) { //halo: ha, hal, halo, al, alo, lo
  let substrings = [];
  for (let start = 0; start <= string.length - 2; start++) { //halo => h
    for (let end = start + 2; end <= string.length; end++) { //
      substrings.push(string.slice(start, end)); //ha
    }
  }
  return substrings;
}

console.log(palindromeSubstring('madam'));
