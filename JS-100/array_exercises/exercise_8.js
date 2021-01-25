// Write a function that returns the odd lengths, but use reduce to do it
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// Assign the number to the accumulator every time, and then to a new array

function oddLengths(arr){
  arr.reduce(function(accumulator, currentValue) {
    let valueLength = currentValue.length
    if(valueLength % 2 !== 0) {
      accumulator.push(valueLength)
    }
  },0)
  return oddArray;
}
console.log(oddLengths(arr)); // => [1, 5, 3]
// Note: The accumulator can actually be anything. 