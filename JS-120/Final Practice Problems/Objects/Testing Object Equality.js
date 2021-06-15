// Write a function
// Accepts two objects, and checks if same key value pair

function objectsEqual(obj1, obj2) {
  let shortObject, longObject;
  [shortObject, longObject] = (longestObject(obj1, obj2));

  for (let key in longObject) {
    // eslint-disable-next-line max-len
    if (!shortObject.hasOwnProperty(key) || !longObject[key] === shortObject[key]) return false
  }

  return true;

}

function longestObject(obj1, obj2) {
  let lengthObj1 = Object.keys(obj1).length;
  let lengthObj2 = Object.keys(obj2).length;

  // Array with shortest object first
  if (lengthObj1 < lengthObj2) return [obj1, obj2];
  return [obj2, obj1];
}


// val2 should be 1
console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo', b: 'bar'})); // true