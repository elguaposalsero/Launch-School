// Takes an array of strings
// Returns an array with same values but vowels (a,e,i,o,u) removed

function removeVowels(array) {
  let output = [];
  const VOWELS = ['a', 'e', 'i', 'o', 'u'];
  array.forEach(string => {
    let tempVar = '';
    string.split('').forEach(char => {
      if (!VOWELS.includes(char.toLowerCase())) {
        tempVar += char;
      }
    });
    output.push(tempVar);
  });
  return output;
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]