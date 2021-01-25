// Check if the number 3 appears inside the arrays
let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = []
let numbers3 = [2, 4, 6, 8]

function isThree(arr){
  if((arr.filter(element => element === 3)).length > 0){
    return true;
  } else {
    return false;
  }
}

console.log(isThree(numbers1));
console.log(isThree(numbers2));
console.log(isThree(numbers3));