let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

function hasExclamation(string) {
  if (string.charAt(string.length - 1) === "!") {
    return true;
  } else {
    return false;
  }
}

console.log(hasExclamation(str1));
console.log(hasExclamation(str2));

// You can also use the str.endsWith() method to achieve the same result.