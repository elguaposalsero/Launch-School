// Function takes a grocery list containing fruit and quantity
// Returns a one dimensional array of fruit
// Each fruit appears a number of times equal to its quantity

function buyFruit(fruits) {
  let output = [];
  fruits.forEach(subArray => {
    for (let index = 0; index < subArray[1]; index++) {
      output.push(subArray[0]);
    }
  });
  return output;
}


console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]