// Find the longest common prefix in array of strings
// If there is none, return an empty string
// If there is one, return the prefix
// All inputs are in lowercase letters
// [flower, flow, flight] => 'fl'

function prefixExists(prefix, string) {
  if (string.substring(0, prefix.length) === prefix) {
    return true;
  } else {
    return false;
  }
}

function commonPrefix(array) { //['flower', 'flow', 'flight']
  let testString = array.pop(); // flight; ['flower', 'flow']
  let longestPrefix = '';

  for (let end = 1; end <= testString.length; end++) {
    let prefix = testString.slice(0, end);
    for (let string of array) {
      if (!prefixExists(prefix, string)) {
        break;
      }
      longestPrefix = prefix;
    }
  }
  return longestPrefix;

}

console.log(commonPrefix(['flower', 'flow', 'flight']));
console.log(commonPrefix(['dog', 'racecar', 'car']));
console.log(commonPrefix(['interspecies', 'interstellar', 'interstate']));