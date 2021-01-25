let numbers = [3, 5, 7];

function sumOfSquares(array){
 return array.reduce((accumulator, currentValue) => accumulator + (currentValue * currentValue),0);
 //Note: If you don't provide an initial value you'll start with the first value as accumulator, and will be skipped for current value.
}

console.log(sumOfSquares(numbers)); // => 83
