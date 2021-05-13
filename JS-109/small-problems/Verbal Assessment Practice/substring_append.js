function repeatedSubstringPattern(string) {
  for (let idx = 1; idx <= (string.length / 2); idx += 1) {
    let substring = string.slice(0, idx);

    if (string.length % substring.length !== 0) {
      continue;
    } else if (checkSubstring(substring, string)) {
      return true;
    }
  }

  return false;
}

function checkSubstring(substring, string) {
  let repetitions = string.length / substring.length //3
  let increment = 0;
  let compareString = '';

  for(let increment = 0; increment < string.length; increment += substring.length)

  while (increment < repetitions) {
    compareString += substring;
    increment += 1;
  }

  return (compareString === string);
}


console.log(repeatedSubstringPattern('abab') === true); // true
console.log(repeatedSubstringPattern('aba') === false); // true
console.log(repeatedSubstringPattern('aabaaba') === false); // true
console.log(repeatedSubstringPattern('abaababaab') === true); // true
console.log(repeatedSubstringPattern('abcabcabcabc') === true) // true