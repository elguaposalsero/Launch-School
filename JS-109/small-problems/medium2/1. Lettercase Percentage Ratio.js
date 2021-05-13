// Takes a string
// Returns object that contains the following:
// Percentage lowercase letters
// Percentage uppercase letters
// Percentage that are neither
// Assume that each string will contain at least one character


function letterPercentages(string) {
  // Count the length of the string with string.length
  // Lowercase = string.Match(/[a-z]/g).length
  // Uppercase = string.Match(/[A-Z]/g).length
  // Neither = string.Match([^a-zA-Z]).length
  let stringLength = string.length;
  let letterPercentage = {};

  let lowercaseRegex = /[a-z]/g;
  let uppercaseRegex = /[A-Z]/g;
  let neitherRegex = /[^a-zA-Z]/g;

  letterPercentage['lowercase'] = string.match(lowercaseRegex) ? ((string.match(lowercaseRegex).length / stringLength * 100).toFixed(2)).toString() : "0.00";
  letterPercentage['uppercase'] = string.match(uppercaseRegex) ? ((string.match(uppercaseRegex).length / stringLength * 100).toFixed(2)).toString() : "0.00";
  letterPercentage['neither'] = string.match(neitherRegex) ? ((string.match(neitherRegex).length / stringLength * 100).toFixed(2)).toString() : "0.00";

  return letterPercentage;

}


console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
