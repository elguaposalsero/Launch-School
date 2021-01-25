/* 
In order for an object to act like an array, two things need to be true:
1. The keys need to be numbers
2. The object needs to have a length property.
*/

let myArray = {
  0: "Albert",
  1: "James",
  2: "Elizabeth",
  length: 3
};

for (let i = 0; i < myArray.length; i+= 1){
  console.log(myArray[i]);
};

