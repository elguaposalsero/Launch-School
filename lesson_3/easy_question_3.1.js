// Three ways to remove all the elements from an array

//METHOD 1: FOR LOOP
/*let numbers = [1, 2, 3, 4];
let length = numbers.length;
for (let i = 0; i < length; i++) {
  numbers.pop();
}
console.log(numbers);
*/

//METHOD 2: LENGTH
/*let numbers = [1, 2, 3, 4];
numbers.length = 0;
*/

// METHOD 3: SPLICE
let numbers = [1, 2, 3, 4];
numbers.splice(0,numbers.length);
console.log(numbers);

while (numbers.length > 0){
  numbers.pop();
}