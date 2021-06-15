class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello! My name is ${this.name}!`;
  }
}


let walkMixin = {
  walk() {
    return "Let's go for a walk";
  }
};

Object.assign(Cat.prototype, walkMixin);
let kitty = new Cat();

console.log(kitty.greet());
console.log(kitty.walk());

// Create a mixin named "walkMixin" that contains a method called "walk"
// The method should return "let's go for a walk!" when invoked
// Inclue this mixin into Cat