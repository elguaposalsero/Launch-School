// Takes two arguments
// The Object you want to delegate to
// And the method of that object you want to delegate to
// The remaining args are passed in as args to the function that gets delegated
// This is not the same as bind. Bind returns a new function.
// This version maintains the reference

function delegate(context, method, ...args) {
  return function() {
    context[method].apply(context, args);
  };
}


let foo = {
  name: 'test',
  bar: function(greeting) {
    console.log(greeting + ' ' + this.name);
  },
};

delegate(foo, 'bar', 'Hello my name is');

let baz = {
  qux: delegate(foo, 'bar', 'hello'),
};

baz.qux();   // logs 'hello test';

foo.bar = function() { console.log('changed'); };

baz.qux();          // logs 'changed'