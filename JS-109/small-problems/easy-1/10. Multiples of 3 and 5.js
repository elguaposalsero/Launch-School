// Input a number greater than 1
// Output the sum of all numbers that that are multiples of 3 and 5, inclusive


function multisum(upperLimit) {
  let output = 0;
  for (let index = 1; index <= upperLimit; index += 1) {
    if (index % 3 === 0 || index % 5 === 0) {
      output += index;
    }
  }
  return output;
}
n


console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168