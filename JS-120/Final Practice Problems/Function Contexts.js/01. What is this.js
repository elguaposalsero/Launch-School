// "This" answers the following question: 
// Within which object are you calling the funciton
// In this case, there is no function. In that case "this" just refers
// To the global object.

let person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);