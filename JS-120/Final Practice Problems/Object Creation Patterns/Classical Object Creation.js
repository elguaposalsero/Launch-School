// The way that you do inheritance with pseudoclassical
// Is that you need to add things to the prototype.


// There is one main key to this pattern
// It's that objects get created and assigned to the prototype
// However, that prototype variable empty until you add anything
// So it's okay if you overwrite it or reassign it. There's nothng in it


function Person(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
  this.fullName = function () {
    console.log(this.name);
  };
}

Person.prototype.fullName = function () {
  return this.firstName + ' ' + this.lastName;
};

let albert = new Person('albert', 'dorfman', 26, 'male');
let james = new Person ('james', 'dorfman', 22, 'male');
console.log(albert.fullName === james.fullName);




Person.prototype.communicate = function() {
  console.log('Communicating');
};

Person.prototype.eat = function() {
  console.log('Eating');
};

Person.prototype.sleep = function() {
  console.log('Sleeping');
};

function Doctor(firstName, lastName, age, gender, specialization) {
  Person.call(this, firstName, lastName, age, gender);
  this.specialization = specialization;
}


Doctor.prototype = Object.create(Person.prototype);
// "create" makes a new object who's prototype is the argument
// In this case Doctor.prototype is equal to ...
// An object that inherits from Person
// This is important because they're not the same object
// This means I can add stuff to Doctor.prototype
// And if I do that it won't also add to Person. prototype
// IMPORTANT PUT THIS INTO YOUR NOTES

Doctor.prototype.diagnose = function() {
  console.log('Diagnosing');
};

// Constructor is an "instance method" put that in your notes.
Doctor.prototype.constructor = Doctor;

function Student(firstName, lastName, age, gender, degree) {
  Person.call(this, firstName, lastName, age, gender);
  this.degree = degree;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function () {
  console.log('studying');
};

// eslint-disable-next-line max-len
function GraduateStudent(firstName, lastName, age, gender, degree, graduateDegree) {
  Student.call(this, firstName, lastName, age, gender, degree);
  this.graduateDegree = graduateDegree;
}

GraduateStudent.prototype = Object.create(Student.prototype);
GraduateStudent.prototype.constructor = GraduateStudent;

GraduateStudent.prototype.degree = function research() {
  console.log('researching');
}


Dog.prototype = Object.create(Animal.prototype)




// let person = new Person('foo', 'bar', 21, 'gender');
// console.log(person instanceof Person);     // logs true
// person.eat();                              // logs 'Eating'
// person.communicate();                      // logs 'Communicating'
// person.sleep();                            // logs 'Sleeping'
// console.log(person.fullName());            // logs 'foo bar'

// let doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
// console.log(doctor instanceof Person);     // logs true
// console.log(doctor instanceof Doctor);     // logs true
// doctor.eat();                              // logs 'Eating'
// doctor.communicate();                      // logs 'Communicating'
// doctor.sleep();                            // logs 'Sleeping'
// console.log(doctor.fullName());            // logs 'foo bar'
// doctor.diagnose();                         // logs 'Diagnosing'

// let graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// // logs true for next three statements
// console.log(graduateStudent instanceof Person);
// console.log(graduateStudent instanceof Student);
// console.log(graduateStudent instanceof GraduateStudent);
// graduateStudent.eat();                     // logs 'Eating'
// graduateStudent.communicate();             // logs 'Communicating'
// graduateStudent.sleep();                   // logs 'Sleeping'
// console.log(graduateStudent.fullName());   // logs 'foo bar'
// graduateStudent.study();                   // logs 'Studying'
// graduateStudent.research();                // logs 'Researching'