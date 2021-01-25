// Exercise 4: Create an array of evens or odds corresponding with the values
let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0
]

let evenArray = myArray.map(function(currentValue) {
  if (currentValue % 2 === 0) {
    return 'even'
  }
  else {
    return 'odd'
  }
})
console.log(evenArray);
