// Rotate the last "count" digits of a number

function rotateRightmostDigits(numbers, location) {
  let string = String(numbers); // "735291"
  let staticSection = string.slice(0, string.length - location); // 735
  let rotatedSection = string.slice(string.length - location); // 291

  return staticSection.concat(rotateString(rotatedSection));
}

function rotateString(string) {
  return string.slice(1).concat(string[0]);
}


console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917