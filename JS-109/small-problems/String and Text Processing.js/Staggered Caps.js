// Takes a string as an argument
// Returns a string with a staggered capitalization scheme
// First character is capitalized
// Non alphabetical characters remain unchanged
// Non alphabeticals SHOULD be counted as characters to determine switch

function staggeredCase(string) {
  let caps = true;
  let output = string.split('').map(char => {
    if (caps === true) {
      caps = false;
      return char.toUpperCase();
    } else {
      caps = true;
      return char.toLowerCase();
    }
  });
  return output.join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"

// I LoVe lAuNcH ScHoOl!
// AlL_CaPs
// IgNoRe 77 ThE 4444 nUmBeRs