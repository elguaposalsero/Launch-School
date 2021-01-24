let flinstones = ["Fred", "Wilma"];
flinstones.push(["Barney", "Betty"]);
flinstones.push(["Bambam", "Pebbles"]);
// ['Fred', 'Wilma', ['Barney', 'Betty'] ['Bambam', 'Pebbles']]

/*let flatArray = [];
for (let i = 0; i < flinstones.length; i++) {
  flatArray = flatArray.concat(flinstones[i]);
}

console.log(flatArray);
*/

/*let newFlinstones = []
flinstones.forEach(element => {
  newFlinstones = newFlinstones.concat(element);
});

console.log(newFlinstones);
*/

/*flinstones = [].concat(...flinstones);
console.log(flinstones); */

flinstones = flinstones.reduce((accum, element) => {
  return accum.concat(element); //The value actually returned by reduce, is the last value of the callback.
},[]);