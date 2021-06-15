// Only emmulate the most basic behaviour of map
// Transform the elements of an array by using the array values

let obj = {
  multiplyer: 5
};


// Added thisArg
function map(arr, callback, thisArg) {
  let mapped = [];
  for (let val of arr) {
    mapped.push(callback.call(thisArg, val));
  }
  return mapped;
}


function cb(number) {
  return number * this.multiplyer;
}

let numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, cb, obj)); // => [ 5, 10, 15, 20, 25 ]
console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers, () => false));
// => [ false, false, false, false, false ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]