// Parameter to constructor()
// Provides the name for the Cat object



class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`My name is ${this.name}`);
  }
}

let kitty = new Cat('Sophie');
kitty.greet();