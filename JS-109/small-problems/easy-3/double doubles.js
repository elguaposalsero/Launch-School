// Double number is even lengths, and right and left digits are the same
// Returns number provided multiplied by two, unless double number
// If double number, returns it as-is.

//NOTES:
// I misinterpreted what a double number is




function isDouble(num) {
  let string = num.toString();
  let left = 0;
  let right = string.length - 1;

  if (string.length % 2 !== 0) return false;

  while (right > left) {
    if (string[left] !== string[right]) {
      return false;
    }
    right -= 1;
    left += 1;
  }

  return true;
}

function twice(num) {
  if (isDouble(num)) {
    return num;
  } else {
    return num * 2;
  }
}

console.log(twice(37));          // 74
console.log(twice(44));          // 444
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676