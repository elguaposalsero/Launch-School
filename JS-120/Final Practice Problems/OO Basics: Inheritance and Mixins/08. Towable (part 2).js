// Create a class called vehicle
// Assign the passed in argument to the "year" property
// Both truck and car should inherit from vehicle

class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

const towMixin = {
  tow() {
    return "'I can tow a trailer!'";
  }
};

class Truck extends Vehicle {
  constructor(year) {
    super(year);
    Object.assign(this, towMixin);
  }
}

class Car extends Vehicle {}

let truck = new Truck(2002);
console.log(truck.year);
console.log(truck.tow());

let car = new Car(2015);
console.log(car.year);

