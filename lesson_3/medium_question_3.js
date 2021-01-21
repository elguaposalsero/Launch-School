// Code fails when the input is 0 or a negative number. 
// Don't use a do/while loop. 
// Bonus: What is the purpose of number % divisor === 0 in the code?

function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}

console.log(factors(-5));