function scramble(str1, str2) {
  let [shortest, longest] = compareStrings(str1, str2);
  return longestIncludesShortest(shortest, longest);
}

function compareStrings (str1, str2) {
  if (str1.length < str2.length) {
    return [str1, str2];
  } else {
    return [str2, str1];
  }
}

function longestIncludesShortest(shortest, longest) {
  let longestAsList = longest.split('');
  for (let char of shortest) {
    if (!longestAsList.includes(char)) {
      return false;
    } else {
      longestAsList.splice(longestAsList.indexOf(char), 1);
    }
  }
  return true;
}

console.log(scramble('javaass', 'jjss') === false);
console.log(scramble('rkqodlw', 'world') === true);
console.log(scramble('cedewaraaossoqqyt', 'codewars') === true);
