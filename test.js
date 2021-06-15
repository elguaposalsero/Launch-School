function Human() {
  this.age = 12;
  this.name = 'albert';
  // this.printAge = function () {
  //   console.log(this.age);
  // }
}
Human.prototype.printAge = function() {
  console.log(this.age);
};

let albert = new Human();
albert.printAge();
