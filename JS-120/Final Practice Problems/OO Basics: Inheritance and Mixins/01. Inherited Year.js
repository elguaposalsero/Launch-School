// Create two classes, truck and car
// Both classes inherit from vehicle.

class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {
  constructor(year) {
    super(year);
  }
}

class Car extends Vehicle {
  constructor(year) {
    super(year);
  }
}

// Note: It looks like you don't actually need to call super. 

let truck = new Truck(2003);
console.log(truck.year); // 2003

let car = new Car(2015);
console.log(car.year); // 2015


class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {}

class Car extends Vehicle {}

let truck = new Truck(2003);
console.log(truck.year); // 2003

let car = new Car(2015);
console.log(car.year); // 2015