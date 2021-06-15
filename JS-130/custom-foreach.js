// Iterate through everything in the array
// Apply the function in the second argument to each element

class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    console.log(this.prefix, item);
  }
}

// function forEach(array, callback, thisArg) {
//   for (let index = 0; index < array.length; index += 1) {
//     callback.call(thisArg, array[index]);
//   }
// }

function forEach(array, callback, thisArg) {
  for (let index = 0; index < array.length; index += 1) {
    callback.call(thisArg, array[index], index, array);
    // We pass a bunch of stuff into the callback.
    // This means your callback can use all these things
  }
}

function cb(value, index, arr) {
  console.log(`After ${value} comes ${arr[index + 1]}`);
}

forEach(['a', 'b', 'c'], cb);

