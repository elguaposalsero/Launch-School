// Using Array Functions //
let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
//myArray.filter(element => element % 2 === 0).forEach(element => console.log(element)); */
//I'm calling the forEach function on the filter function which doesn't mutate the caller

//Using a for loop
let evenNumbers = []
for (let index = 0; index < myArray.length; index++){
  if (myArray[index] % 2 === 0) {
    evenNumbers.push(myArray[index])
  }
}
console.log(evenNumbers);