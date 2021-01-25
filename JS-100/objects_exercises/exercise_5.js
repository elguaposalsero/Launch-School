let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
// Add a qux property with a value 3 to myObj
myObj.aux = 3;

// Iterate only over the objects own properties
for (let key in myObj){
  if (myObj.hasOwnProperty(key)){
    console.log(key);
  }
}