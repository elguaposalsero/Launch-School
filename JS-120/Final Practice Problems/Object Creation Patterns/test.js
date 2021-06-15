// Mixins
// The purpose of a mixin is to allow you to do multiple inheritence
// You can also, however, use it as a different paradigm for objects.

// class FlyingBird{}
// class SwimmingBird{}

// class Pigeon extends FlyingBird{}
// class Penguin extends SwimmingBird{}


// Instead of creating differences for swimmiable or flyable.
// You just create a class that represents the animal
// And then you add mixins to it.

swimmable = {
  swim(){}
};

flyable = {
  fly(){}
};

class Duck{}
Object.assign(Duck.prototype, swimmable, flyable);

