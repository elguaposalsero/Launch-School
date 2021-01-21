let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
// [ 'Barney', 2 ]
console.log(Object.entries(flintstones));
/**
  [
  [ 'Fred', 0 ],
  [ 'Wilma', 1 ],
  [ 'Barney', 2 ],
  [ 'Betty', 3 ],
  [ 'Bambam', 4 ],
  [ 'Pebbles', 5 ]
]
 */


flintstones = Object.entries(flintstones).filter(pair => {
  return (pair[0] === 'Barney'); //If it returns true it will filter for this.
}).shift();

console.log(flintstones);