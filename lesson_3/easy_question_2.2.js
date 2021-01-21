let numbers = [1, 2, 3, 4, 5];

function reverse(array) {
  let numbersCopy = [...array];
  return numbersCopy.reverse();
}

console.log(reverse(numbers));
console.log(numbers);