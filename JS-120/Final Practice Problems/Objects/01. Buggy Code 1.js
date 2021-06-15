// eslint-disable-next-line max-lines-per-function
function createGreeter(name) {
  return {
    name: name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet: function(timeOfDay) {
      let msg = '';
      switch (timeOfDay) {
        case 'morning':
          console.log(this);
          msg += `${this.morning} ${name}`;
          break;
        case 'afternoon':
          msg += `${afternoon} ${name}`;
          break;
        case 'evening':
          msg += `${evening} ${name}`;
          break;
      }

      console.log(msg);
    },
  };
}





// Exepcted Output

let helloVictor = createGreeter('Victor');
console.log(helloVictor);
helloVictor.greet('morning'); // Good Morning Victor