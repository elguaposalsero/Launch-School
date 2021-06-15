// Implement an ancestors method
// Returns the prototype chain (ancestors)
// Returns as an array of object names

// name property added to make objects easier to identify
let foo = {name: 'foo'};
let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';


// eslint-disable-next-line no-extend-native
Object.prototype.ancestors = function() { // Adding this to the Object prototype to give everyone access
  let ancestor = Object.getPrototypeOf(this);

  if (Object.getPrototypeOf(ancestor)) {
    return [ancestor.name].concat(ancestor.ancestors());
  } else {
    return ['Object.prototype'];
  }
};




console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']

