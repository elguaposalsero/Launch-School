// Refactor the fibonacci function to use Memoization
// Recursive Fibonacci

let memoization = {
  1: 1,
  2: 1
};

//ALBERT's SOLUTION
function fibonacci (nth) {
  if (nth <= 2) {
    return 1;
  }
  if (memoization[nth - 1]) {
    let previous1 = memoization[nth - 1];
  } else {
    (memoization[nth - 1] = fibonacci(nth - 1));
  }

  if (memoization[nth - 2]) {
    let previous2 = memoization[nth - 2];
  } else {
    (memoization[nth - 2] = fibonacci(nth - 2)); //You don't need to do this. Because if you 
  }
  return (memoization[nth - 2] + memoization [nth - 1]);
}

//SOLUTION

let memo = {};
function fibonacci(nth) {
  if (nth <= 2) {
    return 1;
  } else if (memo[nth]) { // If it exists, then return the value
    return memo[nth];
  } else {
    memo[nth] = fibonacci(nth - 1) + fibonacci(nth - 2); // 
    return memo[nth];
  }
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
console.log(fibonacci(60));