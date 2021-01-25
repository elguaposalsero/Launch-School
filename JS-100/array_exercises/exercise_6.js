//Determine the lengths of all the elements in an array of string values
// then descard the even values (keep the odd values)
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(arr){
  return arr.map(element => element.length).filter(element => element % 2 !== 0);
}
console.log(oddLengths(arr));
