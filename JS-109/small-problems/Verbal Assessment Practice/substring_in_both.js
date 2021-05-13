// Given two strings, find substrings that appear in both
// Only care about substrings that are > 1 letter
// We don't care about case

function shortestString(str1, str2) {
  if (str1.length < str2.length) {
    return [str1, str2];
  } else {
    return [str2, str1];
  }
}

function substringTest(str1, str2) {
  let [shortest, longest] = shortestString(str1, str2);
  shortest = shortest.toLowerCase();
  longest = longest.toLowerCase();

  for (let beg = 0; beg <= shortest.length - 2; beg++) { //Looping through beg
    for (let end = 2; end <= shortest.length; end++) {
      let substring = shortest.substring(beg, end);
      if (longest.includes(substring)) {
        return true;
      }
    }
  }
  return false;
}

console.log(substringTest('Something', 'Fun')); // false
console.log(substringTest('Something', 'Home')); // true
console.log(substringTest('BANANA ', 'banana')); // true
console.log(substringTest(' ', ' ')); // true
