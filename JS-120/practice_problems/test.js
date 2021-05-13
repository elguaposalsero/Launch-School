// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     let self = this;

//     function bar() {
//       console.log(this);
//       console.log(self.a + ' ' + self.b);
//       console.log(self);
//     }

//     bar();
//   },
// };

// obj.foo(); // => hello world

let obj = {
  name: 'albert',

  f1() {
    return this;
  }

};

console.log(obj.f1());

