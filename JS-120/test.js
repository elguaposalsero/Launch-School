class Dog {
  constructor() {
    alive: true;
  }
}

let mitzi = new Dog();

console.log(typeof mitzi.constructor.name);