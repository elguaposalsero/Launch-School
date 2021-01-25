//Exercise 3: Log all of the even numbers from myArray to the console.
let myArray = [
  [1, 3, 5, 11], 
  [4, 2, 4], 
  [9, 17, 16, 0]
];

// Solution with for loops
/*
let evenNumbers = [];
for (let index = 0; index < myArray.length; index ++){
  for (let subIndex = 0; subIndex < myArray[index].length; subIndex ++){
    if (myArray[index][subIndex] % 2 === 0) {
      evenNumbers.push(myArray[index][subIndex]);
    }
  }
}
console.log(evenNumbers);
*/

// Solution with for each


myArray.forEach(function(nestedArray){
  nestedArray.forEach(function(value)){
    if (value % 2 === 0){
      console.log(value);
    }
  }
}
