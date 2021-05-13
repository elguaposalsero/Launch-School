
function xor(val1, val2) {
  return !!(val1 && !val2) || (!val1 && val2);
}

console.log(xor(5, 0) === true);
console.log(xor(false, true));
console.log(xor(1, 1));
console.log(xor(true, true));