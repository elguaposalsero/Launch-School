// class Vehicle {
//   constructor (make, model, wheels) {
//     this.make = make;
//     this.model = model;
//     this.wheels = wheels;
//   }

//   getWheels() {
//     return this.wheels;
//   }

//   getInfo () {
//     return `${this.make} ${this.model}`;
//   }
// }

// class Car extends Vehicle {
//   constructor(make, model, wheels) {
//     super(make, model, wheels);
//   }
// }

// class Motorcycle extends Vehicle {
//   constructor(make, model, wheels) {
//     super(make, model, wheels);
//   }
// }

// class Truck extends Vehicle {
//   constructor (make, model, wheels, payload) {
//     super(make, model, wheels);
//     this.payload = payload;
//   }
// }

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  info() {
    return `${this.make} ${this.model}`;
  }
}

class Car extends Vehicle {
  getWheels() {
    return 4;
  }
}

class Motorcycle extends Vehicle {
  getWheels() {
    return 2;
  }
}

class Truck extends Vehicle {
  constructor(make, model, payload) {
    super(make, model);
    this.payload = payload;
  }
  getWheels() {
    return 6;
  }
}

let car = new Car('toyota', 'corrola');
console.log(car);