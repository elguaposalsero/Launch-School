// Bind can also do partial function applications
// Figure out how to do this in your "bind" function.


let obj = {
  firstName: 'Albert',
  lastName: 'Dorfman',
  printname() {
    console.log(this.name);
  }
};

function printName(label1, label2) {
  console.log(`${label1}: ${this.firstName}`);
  console.log(`${label2}: ${this.lastName}`);
}

function myBind(func, obj) {
  return function(...args) {
    func.apply(obj, args);
  };
}

let boundPrintName = myBind(printName, obj);
boundPrintName('First Name', 'Last Name');