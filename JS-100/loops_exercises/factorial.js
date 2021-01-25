// Create a function that computes a factorial. Assume that the argument is a non-negative integer

// Take a number (like 5)
// Multiple it by that number minus 1: 5 * 5 -1
// Assign the variable to the new number that you got

function factorial (number){
  let answer = 1 ;
  for(let index = number; index > 0; index -= 1) {
    answer *= index; // 20
  }
  return answer;
}

console.log(factorial(0));     // => 1
console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320