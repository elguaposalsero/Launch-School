// let franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function() {
//     return [1, 2, 3].map(function(number) {
//       return this.name + ' ' + number;
//     }, franchise);
//   },
// };

// let franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function() {
//     let self = this;
//     return [1, 2, 3].map(function(number) {
//       return self.name + ' ' + number;
//     }, franchise);
//   },
// };

// let franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function() {
//     console.log(this.name);
//   },
// };

// let franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function() {
//     console.log(this.name);
//   },
// };

// Oh I see. The difference here is that you're passing "this" in. So it's evaluated inside of the function
// If however you try to access this inside the function you get fucked.


// We have a new function called print()
// This function then gets called outside inside of allMovies()
// However, since it's called normall, 
// let franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function() {
//     function print() {
//       return this.name;
//     }
//     return print(); //undefined
//   }
// };

let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(num => this.name + ' ' + num);
  }
}

console.log(franchise.allMovies());


// franchise.allMovies() // How to Train Your Dragon

// console.log(franchise.allMovies());

// The issue here is that you are calling a normal function
// You're not using dot notation, mneaning you're not calling a method
// This means that "this" inside the second function is actually global
// A few ways to fix this

// Trying to return the following:

// [
//   'How to Train Your Dragon 1',
//   'How to Train Your Dragon 2',
//   'How to Train Your Dragon 3'
// ]