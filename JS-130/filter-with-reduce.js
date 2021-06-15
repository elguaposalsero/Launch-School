// Writing a function that works like filter
// But instead i'm using reduce to do it

function filter(array, callback) {
  return array.reduce((accumulator, current) => {
    if (callback(current)) {
      accumulator.push(current);
    }
    return accumulator;
  }, []);
}

let number = [1, 2, 3, 4, 5];

function evenNumber(number) {
  return number % 2 === 0;
}

let newList = filter(number, evenNumber);
console.log(newList);
