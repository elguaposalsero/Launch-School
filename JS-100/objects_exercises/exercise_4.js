let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let keys = Object.keys(obj); //[b, a, c]
keys = keys.map(element => element.toUpperCase());
console.log(keys);

