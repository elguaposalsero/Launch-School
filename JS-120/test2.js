function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

console.log(Dog.prototype);


Dog.prototype.bark = function() { // prototype is the property from which sub-objects inherit
  console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
};

let maxi = new Dog('Maxi', 'German Shepherd', 32);
console.log(maxi);
