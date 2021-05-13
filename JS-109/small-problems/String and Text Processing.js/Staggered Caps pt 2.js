// Modify staggered caps function
// Ignore non alphabetical to determine whether to switch
function staggeredCase(string) {
  let caps = true;
  let output = string.split('').map(char => {
    if (char === char.toLowerCase() && char === char.toUpperCase()) {
      return char;
    } else if (caps === true) {
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

