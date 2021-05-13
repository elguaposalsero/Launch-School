// Takes an integer
// Returns the maximum rotation of that number (feels recursive?)

// ITERATIVELY
// 735291
// 352917
// 329175
// 321759
// 321597
// 321579


function maxRotation(number) {
  let string = String(number);
  let currString = rotateRight(string); //352917
  for (let index = 1; index < string.length; index++) {
    let staticString = currString.slice(0, index);
    let rotateString = currString.slice(index);
    currString = staticString.concat(rotateRight(rotateString));
  }
  return currString;
}

function rotateRight(string) { //'1234'
  return string.slice(1).concat(string[0]);
}





console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845