// Replicate the "map" function with "reudce"
// Need to map elements based on some criterea

function map(array, callback) {
  return array.reduce((accumulator, current) => {
    accumulator.push(callback(current));
    return accumulator;
  }, []);
}

function timesTwo(number) {
  return number * 2;
}

let numbers = [1, 2, 3, 4, 5];

console.log(map(numbers, timesTwo));
