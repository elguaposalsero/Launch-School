// Create a towMixin
// This will contain a method called "tow"
// This method will return "I can tow a trailer!" when invoked
// Include it in the "truck" class

let towMixin = {
  tow() {
    console.log('I can tow a trailer');
  }
};

class Truck {
  constructor() {
    Object.assign(this, towMixin);
  }
}

class Car {}


let truck = new Truck();
truck.tow();



// I can tow a trailer!