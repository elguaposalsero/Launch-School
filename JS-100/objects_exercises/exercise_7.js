/*
Create a function that creates and returns a copy of an object.
The function takes two arguments: object and array of keys you want to copy.
If you omit the array of keys it would copy the whole object.
*/


function copyObj (obj, keys){
  let newObj = {}
  if (keys === undefined) { // This runs if keys was not passed, and returns a copy of the original object
    return obj
  } else {
    for (let i = 0; i < keys.length; i++){ // If keys were passed in, this loop assigns a new key/value pair for each key that was passed
      newObj[keys] = obj[keys];
    return newObj
    }
  }
}
// Note: I checked to see whether keys is equal to undefined. But you can also write it like this: if (keys), and achieve the same result

let objToCopy = {
  foo: 1,
  bar: 2,
};

let newObj = copyObj(objToCopy);
console.log(newObj.foo);    // => 1
console.log(newObj.bar);    // => 2

let newObj2 = copyObj(objToCopy, [ 'foo' ]);
console.log(newObj2.foo);   // => 1
console.log(newObj2.bar);   // => undefined
