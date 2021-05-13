// Albert's Version of the Function
function fibonacci (nth) {
  let output = [];
  let index = 1;
  while (index <= nth) {
    if (index <= 2) {
      output.push(1);
    } else {
      output.push(output[index - 2] + output[index - 3]);
    }
    index += 1;
  }
  return output[nth - 1];
}
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050